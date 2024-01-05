const Joi = require('joi');

import * as envApp from '../config/envApp';

const idProductsSchema = Joi.object({
    id_products: Joi.array()
        .items(Joi
            .required()
            .label('id_product item error')
            .messages({
                "any.required": "error due to input data missing id_product item",
            }))
        .required()
        .label('id_products error')
        .messages({
            "array.base": "id_products must be a array contains string items",
            "string.base": "Items id_products must be string",
            "string.integer": "Items id_products must be string",
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

export const idProductsValidation = async (req, res, next) => {
    try {
        let __idProducts = await prodcutValidation(idProductsSchema, req.query);
        __idProducts = __idProducts.id_products.map(idProduct => {
            return Number(idProduct)
        });
        req.idProducts = __idProducts;
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