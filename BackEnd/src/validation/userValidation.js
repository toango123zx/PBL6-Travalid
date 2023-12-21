const Joi = require('joi');

const changeUserInformationSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/)
        .label('name error')
        .messages({
            "date.base": "Name must be a string",
            "string.pattern.base": "Names that contain numbers or special characters"
        }),
    email: Joi.string()
        .email()
        .label('email error')
        .messages({
            "date.base": "Email must be a string",
            "string.email": "as sample: user1@gmail.com"
        }),
    gender: Joi.boolean()
        .label("gender error")
        .messages({
            "boolean.base": "Gender must be true or false"
        }),
    phone_number: Joi.string()
        .length(10).pattern(/^[0-9]+$/)
        .label("phone_number error")
        .messages({
            "string.base": "Phone number must be a string of 10 numeric characters",
            "string.length": "Phone number must have 10 characters",
            "string.pattern.base": "Phone numbers contain only numbers"
        }),
    address: Joi.string()
        .label("address error")
        .messages({
            "string.base": "Address must be a string",
        }),
    date_of_birth: Joi.date()
        .max(new Date()).iso()
        .label("date_of_birth error")
        .messages({
            "date.base": "Date_of_birth must be a valid date (maybe string format yy-mm-dd)",
            "date.format": "Invalid date and as sample: yy-mm-dd",
            "date.max": "Date_of_birth is less the current date"
        }),
});

const changeUserPasswordSchema = Joi.object({
    currentPassword: Joi.string()
        .required()
        .label('current password error')
        .messages({
            "string.base": "current password must be a string",
            "any.required": "error due to input data missing current password"
        }),
    newPassword: Joi.string()
        .required()
        .label('new password error')
        .messages({
            "string.base": "Name must be a string",
            "any.required": "error due to input data missing new password"
        }),
});

const userValidation = (schemaValidation, data) => {
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

export const userUpdateValidation = (req, res, next) => {
    try {
        const value = userValidation(changeUserInformationSchema, req.body);
        req.updateInfoUser = value;
    } catch (err) {
        return res.status(500).send({
            position: "Update user Validation Error",
            msg: "Error from the server",
        });
    };
    next();
};

export const changeUserPasswordValidation = (req, res, next) => {
    try {
        const value = userValidation(changeUserPasswordSchema, req.body);
        req.updateInfoUser = value;
    } catch (err) {
        return res.status(500).send({
            position: "Change user password  Validation Error",
            msg: "Error from the server",
        });
    };
    next();
};