const Joi = require('joi');

export const rateCreateValidate = data => {
    const rateSchema = Joi.object({
        id_product: Joi.number().strict(),
        id_user: Joi.number().strict(), 
        comment: Joi.string().default("").label('comment error')
        .messages({
            "string.base": "comment must be a string",
            "any.required": "error due to input data missing comment"
        }),
        star: Joi.number().integer().strict().min(1).max(5).required().label('star error')
        .messages({
            "number.base": "star must be a number",
            "number.integer": "star must be an integer",
            "number.min": "star greater than the 1",
            "number.max": "star is less or equal the 5",
            "any.required": "error due to input data missing star"
        }),
    });
    return rateSchema.validate(data);
}
