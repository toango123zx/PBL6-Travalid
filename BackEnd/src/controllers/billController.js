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
    switch (await billService.updateBillStatus(__id_bill, __user.id_user, 'done')) {
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
    console.log(__schedules_product)

    if (__schedules_product.length !== __id_schedules_product.length) {
        return res.status(409).json({
            position: "id_schedules_products",
            msg: "There are one or more product schedules that are unavailable"
        });
    };
    
    let __id_product = [];
    __user.age = (new Date() - new Date(__user.date_of_birth)) / (1000 * 60 * 60 * 24 * 365.25);
    let sum = 0;

    for (const i in __schedules_product) {
        __bill.info_bill.push({
            id_schedule_product: Number(__id_schedules_product[i]),
        });

        __id_product.push(__schedules_product[i].id_product);
        if (__user.age < __schedules_product[i].product.age) {
            return res.status(403).json({
                position: "User age",
                msg: `Your age does not meet the requirements of id schedule product ${__schedules_product[i].id_product}`
            });
        };
        sum += __schedules_product[i].price;

        if (i == 0) {
            continue;
        } else {
            if (__schedules_product[i].start_time < __schedules_product[i - 1].end_time) {
                return res.status(404).json({
                    position: "Time schedules product",
                    msg: `The schedules products id ${__schedules_product[i - 1].id_schedule_product} and id ${__schedules_product[i].id_schedule_product} conflict with each other`
                });
            };
        };
    };

    if (new Set(__id_product).size !== __bill.info_bill.length) {
        return res.status(404).json({
            position: "id product",
            msg: "Product schedule ID has duplicate products when invoicing"
        });
    };

    const __discount = await discountService.getDiscountbySchedulesProduct(__bill.id_discount, __id_schedules_product);

    if (!__discount) {
        return res.status(404).json({
            position: "id discount",
            msg: "The discount program has expired or there are no products available for this discount program"
        });
    };
    if (!await billService.createBill(__bill)) {
        return res.status(500).json({
            position: "Prisma Create Bill",
            msg: "Error from the server"
        });
    };
    __bill.cost = sum;
    __bill.discount = -(__discount.value * sum / 100);
    __bill.total = sum + __bill.discount;

    return res.sendStatus(200);
};