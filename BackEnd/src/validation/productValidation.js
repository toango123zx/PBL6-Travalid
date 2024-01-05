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

export const productCreateValidate = data => {
    const productSchema = Joi.object({
        id_user: Joi.number().strict().required(),
        name: Joi.string().pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/).required(),
        location_map: Joi.string().required(),
        time: Joi.number().strict().required(),
        quantity: Joi.number().strict().required(),
        age: Joi.number().strict().required(),
        description: Joi.string().pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/).required(),
        id_location: Joi.number().strict().required(),
        city: Joi.string().pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/).required(),
    });
    return productSchema.validate(data)
}

export const productUpdateValidate = data => {
    const productSchema = Joi.object({
        id_user: Joi.number().strict(),
        name: Joi.string().pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/),
        location_map: Joi.string(),
        time: Joi.number().strict(),
        quantity: Joi.number().strict(),
        age: Joi.number().strict(),
        description: Joi.string().pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/),
        id_location: Joi.number().strict(),
        city: Joi.string().pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/),
    });
    return productSchema.validate(data)
}

export const productDeleteValidate = data => {
    const time = Joi.number().required()
    return time.validate(data)
}