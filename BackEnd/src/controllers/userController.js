import * as hash from '../helpers/hash';
import * as envApp from '../config/envApp';
import * as userService from '../services/userService';
import * as deletionService from '../services/destroyService';
import * as authHelper from '../helpers/authHelper';
import * as imageHelper from '../helpers/imageHelper';

export const getUser = async (req, res) => {
    const __id_user = Number(req.params.id)
    const __role = String(req.body.role);
    const __user = await userService.getInfoUser(__id_user, __role);
    if (!__user) {
        return res.status(500).json({
            position: "role user",
            msg: "The user's role does not match the id passed in"
        });
    };
    return res.status(200).json({
        data: __user
    });
};

export const getMyProfile = async (req, res) => {
    let __user = req.user;
    __user = await userService.getInfoUser(__user.id_user, __user.role);
    return res.status(200).json({
        data: __user
    });
};

export const getUsers = async (req, res) => {
    const __users = await userService.getUsers();
    if (!__users) {
        return res.status(500).json({
            position: "prisma query user",
            msg: "Users data query is unavailable due to server"
        });
    };
    return res.status(200).json({
        data: __users
    });
};

export const updateMyProfile = async (req, res) => {
    const __user = req.user;
    const __updateUserInfo = req.updateInfoUser;
    if (!__user.email) {
        const __emailUser = await userService.getUser(undefined, __updateUserInfo.email);
        if (__emailUser && __emailUser.id_user !== __user.id_user) {
            return res.status(409).json({
                position: "email",
                msg: "already exist",
            });
        };
    };
    const __newUser = await userService.updateUser(__user.id_user, __updateUserInfo)
    if (!__newUser) {
        return res.status(500).json({
            position: "prisma update user",
            msg: "Erorr foramt information user"
        });
    };
    __user.name = __newUser.name;
    __user.date_of_birth = __newUser.date_of_birth;
    const { __token, __refreshToken } = authHelper.createSignInToken(__user);
    res.cookie('refreshToken', __refreshToken, {
        httpOnly: true
    });
    return res.status(200).json({
        data: __user,
        token: __token
    });
};

export const updateUserPassword = async (req, res) => {
    const __user = await userService.getUser(req.user.username);

    if (!(hash.comparePassword(__user.password, __user.salt, req.body.currentPassword))) {
        return res.status(401).json({
            position: "password",
            msg: "Invalid password",
        });
    };

    const { __salt, __hashedPassword } = hash.hashPassword(req.body.newPassword);
    const __updateUserInfo = {
        salt: __salt,
        password: __hashedPassword
    };

    if (!(await userService.updateUser(__user.id_user, __updateUserInfo))) {
        return res.status(500).json({
            position: "prisma update user",
            msg: "Erorr foramt information user"
        });
    };

    return res.sendStatus(200);
};

export const updateUserImage = async (req, res) => {
    let __user = req.user;
    const __imageData = req.file;
    let __updateDb;

    const __imageURL = await imageHelper.uploadImage("avatar", __user.name, __imageData);
    if (!__imageURL) {
        return res.status(500).json({
            position: "upload user Image",
            msg: "Error from the server"
        });
    };

    const __imageDelete = {
        id: Number(__user.id_user),
        category: "image",
        value: String(__user.image)
    };
    if (__user.image !== envApp.defaultUserImage) {
        __updateDb = await Promise.allSettled([
            userService.updateUser(__user.id_user, { image: __imageURL }),
            deletionService.createDestroy(__imageDelete)
        ]).then(async (value) => {
            const __status = String(value[0].value) + String(value[1].value.status);
            if (__status == "truetrue") {
                return true;
            };
            if (__status == "falsetrue") {
                await deletionService.updateDestroyByIdDestroy(__user.id_user, __imageURL);
                return false;
            };
            imageHelper.deleteImage(__imageURL);
            switch (__status) {
                case "falsefalse":
                    return false;
                case "truefalse":
                    await userService.updateUser(__user.id_user, { image: __user.image });
                    return false;
            };
        });
    } else {
        __updateDb = await userService.updateUser(__user.id_user, { image: __imageURL });
        if (!__updateDb) {
            imageHelper.deleteImage(__imageURL);
        }
    };
    if (!__updateDb) {
        return res.status(500).json({
            position: "upldate user Image",
            msg: "Error from the server"
        });
    };

    __user.image = __imageURL;
    const { __token, __refreshToken } = authHelper.createSignInToken(__user);
    res.cookie('refreshToken', __refreshToken, {
        httpOnly: true
    });
    
    return res.status(200).json({
        data: __user,
        token: __token
    });
};