import * as hash from '../helpers/hash';

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