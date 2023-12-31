import * as billService from '../services/billService';
import * as scheduleProductService from '../services/scheduleProductService';
import * as discountService from '../services/discountService';
import * as userService from '../services/userService';
import * as billHelper from '../helpers/billHelper';

const lodash = require('lodash');

export const getPurchaseBills = async (req, res) => {
    const __user = req.user;
    const __start = req.start;
    const __bills = await billService.getBills(__user.id_user, undefined, __start);
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
    const __start = req.start;
    const __bills = await billService.getBills(undefined, __user.id_user, __start);
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


export const createBill = async (req, res) => {
    let __user = req.user;
    let __bill = req.bill;

    __bill.id_user = __user.id_user;
    __bill.discount_value = 0;

    let __prosmise = [
        scheduleProductService.getSchedulesProduct(__bill.id_schedule_product, __user.id_user, "traveller"),
        userService.getUser(undefined, __user.username),
    ];
    if (__bill.id_discount) {
        __prosmise.push(await discountService.getDiscounts(__bill.id_discount, undefined, undefined, __bill.id_schedule_product));
    };
    const dataFromDatabase = await Promise.allSettled(__prosmise)
        .then((dataFromDatabase) => dataFromDatabase);
    const __schedules_product = lodash.uniqBy(dataFromDatabase[0].value, "id_product");
    __user = dataFromDatabase[1].value;
    if (__schedules_product.length !== __bill.id_schedule_product.length) {
        return res.status(409).json({
            position: "id_schedules_products",
            msg: "One or more product schedules are unavailable or the schedules are empty"
        });
    };

    let __discounts;
    if (__bill.id_discount) {
        __discounts = lodash.uniqBy(dataFromDatabase[2].value, 'id_product')
        if (__bill.id_discount.length != __discounts.length) {
            return res.status(409).json({
                position: "Error: id discount",
                msg: "The discount program has expired or there are no products available for this discount program or Product schedule ID has duplicate products when invoicing"
            });
        };
        delete __bill.id_discount;
    };

    __bill.id_supplier = __schedules_product[0].product.id_user;

    __user.age = (new Date() - new Date(__user.date_of_birth)) / (1000 * 60 * 60 * 24 * 365.25);
    __bill.cost = 0;
    __bill.info_bill = [];
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
        const __info_bill = {
            id_schedule_product: Number(__bill.id_schedule_product[i]),
            product_name: String(__schedules_product[i].product.name),
            city_name: String(__schedules_product[i].product.city)
        };
        __bill.cost += __schedules_product[i].price;
        const __discount = lodash.find(__discounts, (discount) => __schedules_product[i].id_product == discount.id_product);
        if (__discount) {
            __bill.discount_value = __schedules_product[i].price * __discount.value / 100;
            __info_bill.id_discount = Number(__discount.id_discount);
        };

        __bill.info_bill.push(__info_bill);

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

    delete __bill.id_schedule_product;
    __bill.total = __bill.cost - __bill.discount_value;
    __prosmise = null;
    __prosmise = [];
    if (__user.balance >= Number(__bill.total)) {
        __user.balance -= Number(__bill.total)
        __bill.status = "paided";
        __prosmise.push(userService.updateUser(__user.id_user, { balance: Number(__user.balance) }));
    };

    delete __bill.cost;
    delete __bill.total;

    __prosmise.push(billService.createBill(__bill));
    await Promise.allSettled(__prosmise)
        .then((result) => {
            if (result.length == 2) {
                if (result[0].status === "rejected" || result[1].status === "rejected") {
                    return res.status(500).json({
                        position: "Error: Prisma Update User Or create bill",
                        msg: "Error from the server"
                    });
                };
                return res.sendStatus(200);
            } else {
                if (result[0].status === "rejected") {
                    return res.status(500).json({
                        position: "Error: Prisma Update User",
                        msg: "Error from the server"
                    });
                }
                return res.status(202).json({
                    position: "Error: Pay bill",
                    msg: "Bill was created but Bill Payment failed due to insufficient user account balance"
                });
            };
        });
    return;
};

export const payBill = async (req, res) => {
    const dataFromDb = await Promise.allSettled([
        userService.getUser(undefined, req.user.username),
        billService.getDetailBill(req.params.id, req.user.id_user)
    ])
        .then((result) => {
            if (!result[1].value) {
                res.status(404).json({
                    position: "Error: Bill id",
                    msg: "This resource does not exist"
                });

                return false;
            };
            if (result[1].value.status !== "pending") {
                res.status(403).json({
                    position: "Error: Bill status",
                    msg: "The user does not have permission to update billing information for this resource"
                });

                return false;
            };
            const dateNow = new Date();
            for (const scheduleProduct of result[1].value.info_bill) {
                if (new Date(scheduleProduct.schedule_product.start_time) <= dateNow) {
                    res.status(409).json({
                        position: "Error: start time for schedule prodcut in the bill",
                        msg: "There exists a schedule whose start time has elapsed"
                    });

                    return false;
                };
            };

            return [result[0].value, billHelper.formatBillFormDb(result[1].value)];
        });
    if (!dataFromDb) {
        return;
    };
    const [__user, __bill] = dataFromDb;

    if (__user.balance <= Number(__bill.total)) {
        return res.status(409).json({
            position: "Error: Pay bill",
            msg: "Bill payment failed due to insufficient user account balance"
        });
    };

    __user.balance -= Number(__bill.total);
    const __total = __bill.total;
    delete __bill.cost;
    delete __bill.total;

    await Promise.allSettled([
        billService.updateBillStatus(__bill.id_bill, __user.id_user, "paided"),
        userService.updateUser(__user.id_user, { balance: Number(__user.balance) })
    ])
        .then(async (result) => {
            const __status = String(result[0].value) + String(result[1].value);
            switch (__status) {
                case "truetrue":
                    return res.sendStatus(200);
                case "truefalse":
                    await billService.updateBillStatus(__bill, __bill.id_user, "pending");
                    return res.status(500).json({
                        position: "Error: Prisma Update User balance",
                        msg: "Error from the server"
                    });
                case "falsetrue":
                    await userService.updateUser(__user.id_user, { balance: Number(__user.balance) + Number(__total) });
                    return res.status(403).json({
                        position: "Error: Prisma upadate bill status",
                        msg: "The user does not have permission to update this resource"
                    });
                case "falsefalse":
                    return res.status(500).json({
                        position: "Error: Prisma Update User balance and upadate bill status",
                        msg: "Error from the server"
                    });
            };
        });

    return;
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