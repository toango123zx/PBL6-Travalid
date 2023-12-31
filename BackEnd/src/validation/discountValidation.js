const Joi = require('joi');

import * as envApp from '../config/envApp';

const discountSchema = Joi.object({
    id_product: Joi.number().strict()
        .required()
        .label('id_product error')
        .messages({
            "number.base": "id_product must be a number",
            "any.required": "error due to input data missing id_product"
        }),
    name: Joi.string()
        .required()
        .label('name discount error')
        .messages({
            "string.base": "name discount must be a string",
            "any.required": "error due to input data missing name discount"
        }),
    code: Joi.string()
        .label('code discount error')
        .messages({
            "string.base": "code discount must be a string",
        }),
    description: Joi.string()
        .required()
        .label('description discount error')
        .messages({
            "string.base": "description discount must be a string",
            "any.required": "error due to input data missing description discount"
        }),
    start_time: Joi.date()
        .min(new Date()).iso()
        .required()
        .label('start_time discount error')
        .messages({
            "date.base": "start_time must be a valid date (maybe string format yy-mm-dd)",
            "date.format": "Invalid date and as sample: yy-mm-dd",
            "date.min": "start_time greater than the current date",
            "any.required": "error due to input data missing start_time discount"
        }),
    end_time: Joi.date()
        .min(Joi.ref('start_time')).iso()
        .required()
        .label('end_time discount error')
        .messages({
            "date.base": "start_time must be a valid date (maybe string format yy-mm-dd)",
            "date.format": "Invalid date and as sample: yy-mm-dd",
            "date.min": "end_time is less the start_time",
            "any.required": "error due to input data missing end_time discount"
        }),
    value: Joi.number().integer().strict()
        .min(1)
        .max(100)
        .required()
        .label('value error')
        .messages({
            "number.base": "value must be a number",
            "number.integer": "value must be an integer",
            "number.min": "value greater than the 0",
            "number.max": "value is less or equal the 100",
            "any.required": "error due to input data missing value discount"

        }),
    quantity: Joi.number().integer().strict()
        .min(1)
        .required()
        .label('quantity error')
        .messages({
            "number.base": "quantity must be a number",
            "number.integer": "quantity must be an integer",
            "number.min": "quantity greater than the 0",
            "any.required": "error due to input data missing quantity discount"
        }),
    point: Joi.number().integer().strict()
        .min(0)
        .label('point error')
        .messages({
            "number.base": "point must be a number",
            "number.integer": "point must be an integer",
            "number.min": "point greater than the 0",
        })
});

const discountValidation = (schemaValidation, data) => {
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

export const createDiscountValidation = (req, res, next) => {
    try {
        const __discount = discountValidation(discountSchema, req.body);
        if (__discount.code) {
            __discount.code = __discount.code.replace(/\s/g, '');    
        }
        req.discount = __discount;
    } catch (err) {
        return res.status(404).send(err);
    };

    next();
};

export const checkPage = (req, res, next) => {
    let __page = Number(req.query.page);
    if (!__page) {
        __page = 1;
    };
    
    req.start = (__page - 1) * envApp.LimitGetDiscount;
    next();
}