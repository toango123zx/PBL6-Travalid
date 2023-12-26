import * as userService from '../services/userService';
import * as walletService from '../services/walletService';

export const getTransactions = async (req, res) => {
    const [__user, __wallet] = await Promise.all([
        userService.getUser(String(req.user.username)),
        walletService.getTransactions(Number(req.user.id_user), undefined, undefined, req.start)
    ]);
    __user.transaction = __wallet;
    
    return res.status(200).json({
        user: __user
    });
};