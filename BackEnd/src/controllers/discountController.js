import * as discountService from '../services/discountService';

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