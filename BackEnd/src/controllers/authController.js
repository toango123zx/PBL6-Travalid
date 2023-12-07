import * as envSupplier from '../config/envSupplier';
import * as userService from '../services/userService';
import * as hash from '../helpers/hash';
import * as authHelper from '../helpers/authHelper';

export const travellerSignUp = async (req, res, next) => {
    const __user = req.user;
    
    // if (__user.role === "traveller" && !__user.role) {
    //     return res.status(422).json({
    //         position: "Traveller role",
    //         msg: "Invalid traveller role error for the system",
    //     });
    // };

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

    // if (!__user.role.includes('supplier')) {
    //     return res.status(422).json({
    //         position: "Supplier role",
    //         msg: "Invalid supplier role error for the system",
    //     });
    // };
    
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

export const adminSignUp = async (req, res, next) => {
    const __user = req.user;

    if (!userService.creteUser(__user)) {
        return res.status(500).json({
            position: "insert prisma",
            msg: "Unable to add user table data to the database",
        });
    };

    return res.sendStatus(200);
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

export const refreshSignInToken = (req, res, next) => {
    const __refreshToken = req.cookies.refreshToken;
    if (!__refreshToken) {
        return res.status(401).json({
            position: "refreshToken does not exist",
            msg: "You're not authenticated"
        });
    };
    const __newTokens = authHelper.refreshSignInToken(__refreshToken);
    if (__newTokens.error) {
        switch (__newTokens.error.name) {
            case undefined:
                break;
            case "TokenExpiredError":
                return res.status(403).json({
                    position: "Refresh token expire",
                    msg: "Expired refresh token require a request to reissue the token"
                });
            case "TokenNotInitializedError":
                return res.status(403).json({
                    position: "refresh token does not exist",
                    msg: "The user is not logged into the system"
                });
            default:
                return res.status(403).json({
                    position: "Incorrect refresh token",
                    msg: "Incorrect refresh token"
                });
        };
    };
    const { __token, __refreshToken: __newRefreshToken } = __newTokens;

    res.cookie('refreshToken', __newRefreshToken, {
        httpOnly: true
    });

    return res.json({
        token: __token,
    });
};

export const decodeJWT = (req, res) => {
    return res.status(200).json({
        data: req.user
    });
};