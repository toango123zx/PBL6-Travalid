const Joi = require('joi');

import * as envApp from '../config/envApp';

const idProductsSchema = Joi.object({
    id_products: Joi.array()
        .items(Joi.number()
            .integer()
            .strict()
            .required()
            .label('id_product item error')
            .messages({
                "number.base": "Items id_products must be integer",
                "number.integer": "Items id_products must be integer",
                "any.required": "error due to input data missing id_product item",
            }))
        .required()
        .label('id_products error')
        .messages({
            "array.base": "id_products must be a array contains numeric items",
            "number.base": "Items id_products must be integer",
            "number.integer": "Items id_products must be integer",
            "any.required": "error due to input data missing id_products array",
            "array.includesRequiredKnowns": "error due to input data missing id_product item"
        }),
});

const prodcutValidation = (schemaValidation, data) => {
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

export const idProductsValidation = (req, res, next) => {
    try {
        const __bill = prodcutValidation(idProductsSchema, req.body);
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

    req.start = (__page - 1) * envApp.LimitGetDiscount;
    next();
};