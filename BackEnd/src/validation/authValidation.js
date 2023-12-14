import * as userService from '../services/userService';
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/).required(),
    email: Joi.string().email().required(),
    gender: Joi.number().valid(0, 1, true, false).required(),
    phone_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    address: Joi.string(),
    date_of_birth: Joi.date().max(new Date()).iso().required(),
    status: Joi.string()
});

const userUpdateSchema = Joi.object({
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
            "date.max": "Date_of_birth greater than the current date"
        }),
});

const travellerSchema = userSchema.keys({
    role: Joi.string().valid('traveller')
});

const supplierSchema = userSchema.keys({
    tax_id_number: Joi.string().max(13).required(),
    role: Joi.string().valid('transportation_supplier', 'restaurant_supplier', 'hotel_supplier', 'travel_supplier').required(),
});

const adminSchema = userSchema.keys({
    role: Joi.string().valid('admin').required()
});

export const travellerSignUpValidation = (req, res, next) => {
    try {
        const { error } = travellerSchema.validate(req.body);
        if (error) {
            return res.status(422).send({
                message: error.message
            });
        };
    } catch (err) {
        return res.status(500).send({
            position: "Traveller admin sign up validation Error",
            msg: "Error from the server",
        });
    };

    next();
};

export const supplierSignUpValidation = (req, res, next) => {
    try {
        const { error } = supplierSchema.validate(req.body);
        if (error) {
            return res.status(422).send({
                message: error.message,
            });
        };
    } catch (err) {
        return res.status(500).send({
            position: "Supplier sign up validation Error",
            msg: "Error from the server",
        });
    };

    next();
};

export const adminSignUpValidation = ((req, res, next) => {
    const __user = req.user;
    if (__user.role !== "admin") {
        return res.status(403).json({
            position: "The role of the creator",
            msg: "The user must have the administrator role to create an administrator account",
        });
    };
    try {
        const { error } = adminSchema.validate(req.body);
        if (error) {
            return res.status(422).send({
                message: error.message,
            });
        };
    } catch (err) {
        return res.status(500).send({
            position: "Admin sign up validation Error",
            msg: "Error from the server",
        });
    };

    next();
});

export const userUpdateValidation = (req, res, next) => {
    try {
        const { error, value } = userUpdateSchema.validate(req.body);
        if (error) {
            return res.status(422).send({
                position: error.details[0].context.label,
                msg: error.stack,
            });
        };

        req.updateInfoUser = value;
    } catch (err) {
        return res.status(500).send({
            position: "userUpdateValidation function at updateUserValidation schema",
            msg: "Error from the server",
        });
    };
    next();
};

export const checkDuplicateUser = async (req, res, next) => {
    const __tax_id_number = !(req.body.tax_id_number) ? "" : req.body.tax_id_number.replace(/\s/g, '');
    const __user = await userService.getUser(req.body.username.replace(/\s/g, ''), req.body.email.replace(/\s/g, ''), __tax_id_number);
    if (__user !== null && __tax_id_number) {
        return res.status(409).json({
            position: "username or email or tax id number",
            msg: "already exist",
        });
    };

    if (__user !== null && !(__tax_id_number)) {
        return res.status(409).json({
            position: "username or email",
            msg: "already exist",
        });
    };

    if (!(__tax_id_number)) {
        return next();
    };

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
