import * as userService from '../services/userService';

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
        console.log(__users)
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
    if (!await userService.updateUser(__user.id_user, __updateUserInfo)) {
        return res.status(500).json({
            position: "prisma update user",
            msg: "Erorr foramt information user"
        });
    };

    return res.sendStatus(200);
};