import * as userService from '../services/userService';
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/).required(),
    email: Joi.string().email().required(),
    gender: Joi.number().valid(0, 1).required(),
    phone_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    address: Joi.string(),
    date_of_birth: Joi.date().max(new Date()).iso().required(),
    status: Joi.string()
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
            return res.status(400).send({
                message: error.message
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    next();
}


export const supplierSignUpValidation = (req, res, next) => {
    try {
        const { error } = supplierSchema.validate(req.body);
        if (error) {
            return res.status(400).send({
                message: error.message,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
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
            return res.status(400).send({
                message: error.message,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    next();

});

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