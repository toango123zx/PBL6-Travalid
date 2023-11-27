import * as billService from '../services/billService';
import * as scheduleProductService from '../services/scheduleProductService';
import * as discountService from '../services/discountService';
import * as billHelper from '../helpers/billHelper';

export const getPurchaseBills = async (req, res) => {
    const __user = req.user;
    const __bills = await billService.getBills(__user.id_user);
    if (!__bills) {
        return res.status(500).json({
            position: "Pisma query bills",
            msg: "Bills data query is unavailable due to server"
        });
    };
    return res.status(200).json({
        data: __bills,
    });
};

export const getSellBills = async (req, res) => {
    const __user = req.user;
    const __bills = await billService.getBills(undefined, __user.id_user);
    if (!__bills) {
        return res.status(500).json({
            position: "Pisma query bills",
            msg: "Bills data query is unavailable due to server"
        });
    };
    return res.status(200).json({
        data: __bills,
    });
};

export const getDetailBill = async (req, res) => {
    const __id_bill = Number(req.params.id);
    const __user = req.user;
    let __bill = await billService.getDetailBill(__id_bill, __user.id_user);
    if (!__bill) {
        return res.status(403).json({
            position: "Detailed bill id",
            msg: "The user does not have permission to access this resource"
        });
    };
    __bill = billHelper.formatBillFormDb(__bill);
    return res.status(200).json({
        data: __bill,
    });
};

export const cancelBill = async (req, res) => {
    const __id_bill = Number(req.params.id);
    const __user = req.user;
    switch (await billService.updateBillStatus(__id_bill, __user.id_user, 'cancel')) {
        case true:
            return res.sendStatus(200);
        case false:
            return res.status(403).json({
                position: "Id bill",
                msg: "The user does not have permission to update this resource"
            });
        case null:
            return res.status(422).json({
                position: "Bill status",
                msg: "Invalid bill status"
            });
    };
};

/**Check if the bill product schedule matches the quantity with the available product schedule in the database (check if the product schedule is not empty)
 * Check if the product calendar is from the same supplier
 * Check if the age of the registrant is allowed
 * Read the production schedule from the database arranged in ascending chronological order. Check for time conflicts between schedules
 * Check which product calendar has duplicate products
 * Check if the discount id in the bill can be applied to the registered product schedule (in the database)
 * format object
 * Create new bill data
 * 
 * Warning (unfinished):
 ** Automatic updates are set in the product schedule
 ** Automatically update the completed count in the product (change count into quantity)
**/
export const createBill = async (req, res) => {
    let __user = req.user;
    let __id_schedules_product = req.body.id_schedule_product;
    const __bill = {
        id_user: __user.id_user,
        id_discount: Number(req.body.id_discount),
        quantity: Number(req.body.quantity),
        info_bill: []
    };
    const __schedules_product = await scheduleProductService.getSchedulesProduct(__id_schedules_product);

    if (__id_schedules_product.length &&__schedules_product.length !== __id_schedules_product.length) {
        return res.status(409).json({
            position: "id_schedules_products",
            msg: "One or more product schedules are unavailable or the schedules are empty"
        });
    };

    __bill.id_supplier = __schedules_product[0].product.id_user;
    let __id_product = [];
    __user.age = (new Date() - new Date(__user.date_of_birth)) / (1000 * 60 * 60 * 24 * 365.25);
    let sum = 0;

    for (const i in __schedules_product) {   
        if (__schedules_product[i].product.id_user !== __bill.id_supplier) {
            return res.status(422).json({
                position: "Error: The supplier id of the product schedule",
                msg: `Product schedule ID ${__schedules_product[i].id_schedule_product} is different from the supplier's product schedule id from the previous product schedule`
            });
        };

        if (__user.age < __schedules_product[i].product.age) {
            return res.status(403).json({
                position: "Error: User age",
                msg: `Product schedule id ${__schedules_product.id_schedule_product} has a different supplier id than the previous products`
            });
        };
        sum += __schedules_product[i].price;

        __id_product.push(__schedules_product[i].id_product);
        __bill.info_bill.push({
            id_schedule_product: Number(__id_schedules_product[i]),
            product_name: String(__schedules_product[i].product.name),
            city_name: String(__schedules_product[i].product.city)
        });

        if (i == 0) {
            continue;
        } else {
            if (__schedules_product[i].start_time < __schedules_product[i - 1].end_time) {
                return res.status(404).json({
                    position: "Error: Time schedules product",
                    msg: `The schedules products id ${__schedules_product[i - 1].id_schedule_product} and id ${__schedules_product[i].id_schedule_product} conflict with each other`
                });
            };
        };
    };
        
    if (new Set(__id_product).size !== __bill.info_bill.length) {
        return res.status(404).json({
            position: "Error: id product",
            msg: "Product schedule ID has duplicate products when invoicing"
        });
    };

    const __discount = await discountService.getDiscountbySchedulesProduct(__bill.id_discount, __id_schedules_product);

    if (!__discount) {
        return res.status(404).json({
            position: "Error: id discount",
            msg: "The discount program has expired or there are no products available for this discount program"
        });
    };

    __bill.discount_value = __discount.value;
    if (!await billService.createBill(__bill)) {
        return res.status(500).json({
            position: "Error: Prisma Create Bill",
            msg: "Error from the server"
        });
    };
    __bill.cost = sum;
    __bill.discount = -(__discount.value * sum / 100);
    __bill.total = sum + __bill.discount;

    return res.sendStatus(200);
};