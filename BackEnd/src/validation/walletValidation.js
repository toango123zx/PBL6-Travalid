const Joi = require('joi');

const requestWithdrawalSchema = Joi.object({
    amount: Joi.number()
        .integer()
        .min(10000)
        .required()
        .label('amount error')
        .messages({
            "number.base": "amount must be a number",
            "number.integer": "amount must be an integer",
            "number.min": "amount greater than the 10.000",
            "any.required": "error due to input data missing amount"
        }),
    bank_account_number: Joi.string()
        .required()
        .label('bank_account_number error')
        .messages({
            "string.base": "bank_account_number must be a string",
            "any.required": "error due to input data missing bank_account_number"
        }),
    bank_name: Joi.string()
        .required()
        .label("back_name error")
        .messages({
            "string.base": "back_name must be a string",
            "any.required": "error due to input data missing back_name"

        }),
});

const requestWithdrawalValidation = (schemaValidation, data) => {
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

export const createRequestWithdrawalValidation = (req, res, next) => {
    try {
        const __requestWithdrawal = requestWithdrawalValidation(requestWithdrawalSchema, req.body);
        __requestWithdrawal.amount = Number.parseFloat(__requestWithdrawal.amount);
        __requestWithdrawal.action = String("withdrawal");
        __requestWithdrawal.status = String("waiting");
        __requestWithdrawal.time = String(new Date());
        req.requestWithdrawal = __requestWithdrawal;
    } catch (err) {
        return res.status(422).send(err);
    };
    
    next();
};