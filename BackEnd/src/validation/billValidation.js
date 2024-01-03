const Joi = require('joi');

import * as envApp from '../config/envApp';

const billSchema = Joi.object({
    id_discount: Joi.array().items(Joi.number().integer().strict())
        .label('id_discount error')
        .messages({
            "array.base": "id_discount must be a array contains numeric items",
            "number.base": "Items in the sales id_discount must be integer",
            "number.integer": "Items in the sales id_discount must be integer",
        }),
    id_schedule_product: Joi.array().items(
        Joi.number().integer().strict().required()
            .label('id_schedule_product item error')
            .messages({
                "number.base": "Items in the sales id_schedule_product must be integer",
                "number.integer": "Items in the sales id_schedule_product item must be integer",
                "any.required": "error due to input data missing id_schedule_product item"
            }))
        .required()
        .label('id_schedule_product bill error')
        .messages({
            "array.base": "id_schedule_product must be a array contains numeric items",
            "number.base": "Items in the sales id_schedule_product must be integer",
            "number.integer": "Items in the sales id_schedule_product must be integer",
            "any.required": "error due to input data missing id_schedule_product"
        }),
    quantity: Joi.number().integer().strict()
        .min(1)
        .required()
        .label('quantity bill error')
        .messages({
            "number.base": "quantity must be a number",
            "number.integer": "quantity must be an integer",
            "number.min": "quantity greater than the 0",
            "any.required": "error due to input data missing quantity bill"
        }),
});

const billValidation = (schemaValidation, data) => {
    const { error, value } = schemaValidation.validate(data);
    if (error) {
        const __error = {
            position: error.details[0].context.label,
            msg: error.stack,
        };
        throw __error;
    };
    return value;
};

export const createBillValidation = (req, res, next) => {
    try {
        const __bill = billValidation(billSchema, req.body);
        req.bill = __bill;
    } catch (err) {
        return res.status(422).send(err);
    };

    next();
};

export const checkPage = (req, res, next) => {
    let __page = Number(req.query.page);
    if (!__page) {
        __page = 1;
    };

    req.start = (__page - 1) * envApp.LimitGetBill;
    next();
};