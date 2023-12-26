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

export const createRequestWithdrawal = async (req, res) => {
    const __requestWithdrawal = req.requestWithdrawal;
    const __user = await userService.getUser(String(req.user.username));
    
    if (__user.balance < __requestWithdrawal.amout) {
        return res.status(409).json({
            position: "Error: Amount in request withdrawal",
            msg: "Your account balance is not enough to make the request"
        });
    };
    __requestWithdrawal.id_user = __user.id_user;
    if (! await walletService.createRequestWithdrawal(__requestWithdrawal)) {
        return res.status(500).json({
            position: "Error: Create request withdrawal with prisma",
            msg: "Error from the server"
        })
    };

    return res.sendStatus(200);
};