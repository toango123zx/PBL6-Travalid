import * as hash from '../helpers/hash';
import * as authHelper from '../helpers/authHelper';
import { not } from 'joi';

export const createUser = async (req, res, next) => {
    const __user = {
        username: req.body.username.replace(/\s/g, ''),
        password: "",
        name: req.body.name,
        email: req.body.email,
        gender: Boolean(req.body.gender),
        date_of_birth: new Date(req.body.date_of_birth),
        phone_number: req.body.phone_number,
        address: req.body.address,
        salt: ""
    };
    if (req.body.role && !(req.body.role === "traveller")) {
        __user.role = req.body.role;
    };

    const { __salt, __hashedPassword } = hash.hashPassword(req.body.password);

    __user.salt = __salt;
    __user.password = __hashedPassword;

    req.user = __user;
    next();
};

export const verifyToken = (req, res, next) => {
    const __token = req.headers.token;
    const __temp_refreshToken = req.headers.refresh;
    let __refreshToken = "";
    if (!__temp_refreshToken) {
        __refreshToken = req.cookies.refreshToken;
    } else {
        __refreshToken = __temp_refreshToken;
    }
    // const __refreshToken = req.cookies.refreshToken;
    // const __refreshToken = __temp_refreshToken;
    if (!__refreshToken || !__token) {
        return res.status(401).json({
            position: "Token or refreshToken does not exist",
            msg: "You're not authenticated"
        });
    };

    // const verify = authHelper.verifyToken(__token.split(" ")[1], req.cookies.refreshToken);
    const verify = authHelper.verifyToken(__token.split(" ")[1], __refreshToken);
    if (verify.error) {
        switch (verify.error.name) {
            case undefined:
                break;
            case "TokenExpiredError":
                return res.status(403).json({
                    position: "Token expire",
                    msg: "Expired token require a request to reissue the token"
                });
            case "TokenNotInitializedError":
                return res.status(403).json({
                    position: "refresh token does not exist",
                    msg: "The user is not logged into the system"
                });
            default:
                return res.status(403).json({
                    position: "Incorrect token",
                    msg: "Incorrect token"
                });
        };
    } else {
        delete verify.data.iat;
        delete verify.data.exp;
        req.user = verify.data;
        next();
    };
};

export const checkAdminRole = async (req, res, next) => {
    if (req.user.role === "admin") {
        return next();
    };
    return res.status(403).json({
        position: "User role is not accessible",
        msg: "Users need site administrator permissions to access this resource"
    });
};

export const checkSupplierRole = async (req, res, next) => {
    if (req.user.role.includes('supplier')) {
        return next();
    };
    return res.status(403).json({
        position: "User role is not accessible",
        msg: "Users need permission from the website supplier to access this resource"
    });
};

export const checkSupplierOrAdminRole = async (req, res, next) => {
    // return res.json(req.user.role.includes('supplier'))
    if (req.user.role.includes('supplier') || req.user.role === 'admin') {
        return next();
    };
    return res.status(403).json({
        position: "User role is not accessible",
        msg: "Users need to be an administrator or website suppllier to access this resource"
    });
};