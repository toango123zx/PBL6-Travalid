import * as discountService from '../services/discountService';
import * as userService from '../services/userService';

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