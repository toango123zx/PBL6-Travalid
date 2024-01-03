import * as discountService from '../services/discountService';
import * as productService from '../services/productService';

export const getDiscountsForTraveller = async (req, res) => {
    const __start = req.start;
    let __discounts = await discountService.getAllDiscount(__start);
    if (!__discounts) {
        return res.status(404).json({
            position: "id user",
            msg: "No discounts offered by this user were found"
        });
    } else {
        __discounts = __discounts.map((discount) => {
            discount.supplier = discount.user.role;
            delete discount.user;
            return discount;
        });
        return res.status(200).json({
            data: __discounts
        });
    };
};

export const getDiscountsByIdProducts = async (req, res) => {
    const __id_products = req.body.id_products;
    let __discounts = await discountService.getDiscountsByIdProducts(__id_products);
    if (!__discounts) {
        return res.status(500).json({
            position: "Error: Prisma query discount",
            msg: "Error form the server"
        });
    } else {
        __discounts = __discounts.map((discount) => {
            discount.supplier = discount.user.role;
            delete discount.user;
            return discount;
        });
    };
    return res.status(200).json({
        data: __discounts
    });
};

export const getDiscountsForSupplier = async (req, res) => {
    const __user = req.user;
    const __start = req.start;
    let __discounts = await discountService.getDiscountsByIdUser(__user.id_user, __start);
    if (!__discounts) {
        return res.status(404).json({
            position: "id user",
            msg: "No discounts offered by this user were found"
        });
    } else {
        __discounts = __discounts.map((discount) => {
            discount.supplier = discount.user.role;
            delete discount.user;
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
        __discount.supplier = __discount.user.role;
        delete __discount.user;
        return res.status(200).json({
            data: __discount
        });
    };
};

/**
 * Code is only valid during the validity period + depending on the product
*/

export const createDiscount = async (req, res) => {
    const __user = req.user;
    const __discount = req.discount;
    __discount.id_user = Number(__user.id_user);

    if (__discount.code && await discountService.getDiscountByCode(__discount.id_product, __discount.code)) {
        return res.status(409).json({
            position: "Code discount",
            msg: "Discount code is being used for this product"
        });
    };

    const __product = await productService.getProductById(__discount.id_product);

    if (!__product) {
        return res.status(409).json({
            position: "Id product",
            msg: "Id product not found"
        });
    };
    if (!(__user.role === 'admin' || __discount.id_user !== __product.user.id_user)) {
        return res.status(403).json({
            position: "Id discount",
            msg: "The user does not have permission to update this resource"
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

export const cancelDiscount = async (req, res) => {
    const __user = req.user;
    const __id_discount = Number(req.params.id);
    switch (await discountService.updateDiscount(__id_discount, __user.id_user, __user.role, 'cancel')) {
        case true:
            return res.sendStatus(200);
        case false:
            return res.status(403).json({
                position: "Id discount",
                msg: "The user has no control over this resource"
            });
        case null:
            return res.status(500).json({
                position: "Discount status",
                msg: "Error from the server: Invalid discount status"
            });
    };
};