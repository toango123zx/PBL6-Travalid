import * as envSupplier from '../config/envSupplier';
import * as userService from '../services/userService';
import * as hash from '../helpers/hash';
import * as authHelper from '../helpers/authHelper';

export const travellerSignUp = async (req, res, next) => {
    const __user = req.user;

    if (!userService.creteUser(__user)) {
        return res.status(500).json({
            position: "insert prisma",
            msg: "Unable to add user table data to the database",
        });
    };

    return res.sendStatus(200);
};

export const supplierSignUp = async (req, res, next) => {
    const __user = req.user;
    const __info_supplier = {
        tax_id_number: req.body.tax_id_number,
        fee: envSupplier.fee
    };

    if (await userService.createSupplier(__user, __info_supplier)) {
        return res.sendStatus(200);
    } else {
        return res.status(500).json({
            position: "Prisma create Supplier",
            msg: "Error from the server",
        });
    };
};

export const signIn = async (req, res, next) => {
    const __username = req.body.username.replace(/\s/g, '');
    const __password = req.body.password;

    const __user = await userService.getUser(__username, "", "");
    if (__user === false) {
        return res.status(500).json({
            position: "Prisma query User",
            msg: "Error from the server"
        });
    };
    if (__user === null) {
        return res.status(404).json({
            position: "username",
            msg: "username does not exist"
        });
    };
    if (!(hash.comparePassword(__user.password, __user.salt, __password))) {
        return res.status(401).json({
            position: "password",
            msg: "Invalid password",
        });
    };
    
    delete __user.password;
    delete __user.salt;
    
    const { __token, __refreshToken } = authHelper.createSignInToken(__user);

    res.cookie('refreshToken', __refreshToken, {
        httpOnly: true
    });

    return res.status(200).json({
        data: __user,
        token: __token
    });
};