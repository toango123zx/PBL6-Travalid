import * as userService from '../services/userService';

export const getUser = async (req, res) => {
    const __id_user = Number(req.params.id)
    const __role = (req.body.role);
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