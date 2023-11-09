import * as discountService from '../services/discountService';
import * as productService from '../services/productService';

export const getAllDiscount = async (req, res) => {
    let __discounts = await discountService.getAllDiscount();
    if (!__discounts) {
        return res.status(404).json({
            position: "id user",
            msg: "No discounts offered by this user were found"
        });
    } else {
        __discounts = __discounts.map((discount) => {
            discount.user = discount.user.role;
            return discount;
        });
        return res.status(200).json({
            data: __discounts
        });
    };
};

export const getDiscounts = async (req, res) => {
    const __user = req.user;
    let __discounts = await discountService.getDiscounts(__user.id_user);
    if (!__discounts) {
        return res.status(404).json({
            position: "id user",
            msg: "No discounts offered by this user were found"
        });
    } else {
        __discounts = __discounts.map((discount) => {
            discount.user = discount.user.role;
            return discount;
        });
        return res.status(200).json({
            data: __discounts
        });
    };
};

export const getDetailDiscount = async (req, res) => {
    const __id_discount = Number(req.params.id);
    let __discount = await discountService.getDetailDiscount(__id_discount);
    if (!__discount) {
        return res.status(404).json({
            position: "id discount",
            msg: "This discount code could not be found"
        });
    } else {
        __discount.user = __discount.user.role;
        return res.status(200).json({
            data: __discount
        });
    };
};

export const createDiscount = async (req, res) => {
    const __user = req.user;
    const __discount = {
        id_user: Number(__user.id_user),
        id_product: Number(req.body.id_product),
        name: String(req.body.name),
        description: String(req.body.description),
        start_time: new Date(req.body.start_time),
        end_time: new Date(req.body.end_time),
        value: Number(req.body.value),
        point: Number(req.body.point),
        quantity: Number(req.body.quantity)
    };
    const __product = await productService.getProduct(__discount.id_product);

    if (!__product) {
        if (!(__user.role === 'admin' || __discount.id_user !== __product.id_user)) {
            return res.status(403).json({
                position: "Id discount",
                msg: "The user does not have permission to update this resource"
            });
        };
    };
    if (!(__discount.start_time < __discount.end_time) || !(new Date() < __discount.end_time)) {
        return res.status(422).json({
            position: "Start time and end time",
            msg: "The start time must be less than the end time and the end time must be greater than the current time"
        });
    };
    if (!(0 < __discount.value && __discount.value <= 100)) {
        return res.status(422).json({
            position: "Discount value",
            msg: "The discount value must be greater than 0 and less than or equal"
        });
    };
    if (!__discount.point) {
        delete __discount.point;
    } else {
        if (__discount.point < 0) {
            return res.status(422).json({
                position: "discount point",
                msg: "Discount point must be greater than "
            });
        };
    };
    if (__discount.quantity <= 0) {
        return res.status(422).json({
            position: "Quantity discounts",
            msg: "Quantity discount must be greater than 0"
        });
    };

    if (await discountService.createDiscount(__discount)) {
        return res.sendStatus(200);
    };
    return res.status(500).json({
        position: "Prisma create discount",
        msg: "Error from the server",
    });
};