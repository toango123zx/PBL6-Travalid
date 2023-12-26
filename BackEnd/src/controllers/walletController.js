import * as userService from '../services/userService';
import * as walletService from '../services/walletService';

export const getTransactions = async (req, res) => {
    const [__user, __wallet] = await Promise.all([
        userService.getUser(String(undefined, req.user.username)),
        walletService.getTransactions(undefined, Number(req.user.id_user), undefined, undefined, req.start)
    ]);
    __user.transaction = __wallet;

    return res.status(200).json({
        user: __user
    });
};

export const createRequestWithdrawal = async (req, res) => {
    const __requestWithdrawal = req.requestWithdrawal;
    const __user = await userService.getUser(undefined, String(req.user.username));

    if (__user.balance < __requestWithdrawal.amount) {
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

export const acceptRequest = async (req, res) => {
    let __request = (await walletService.getTransactions(Number(req.params.id), undefined, "withdrawal", "waiting", req.start))[0];
    if (!__request) {
        return res.status(404).json({
            position: "Error: id Request withdrawal not found",
            msg: "Request withdrawal not found"
        });
    };
    const __user = await userService.getUser(__request.id_user);
    if (__user.balance < __request.amount) {
        return res.status(409).json({
            position: "Error: Amount in request withdrawal",
            msg: "Your account balance is not enough to make the request"
        });
    };
    __request.status = "accepted";
    Promise.allSettled([
        userService.updateUser(__user.id_user, { balance: __user.balance - Number(__request.amount) }),
        walletService.updateRequestWithdrawal(__request.id_transaction, "accepted")
    ])
        .then(async (result) => {
            const __status = String(result[0].value) + String(result[1].value);
            switch (__status) {
                case "truetrue":
                    return res.sendStatus(200);
                case "truefalse":
                    await userService.updateUser(__user.id_user, { balance: __user.balance });
                    return res.status(500).json({
                        position: "Error: Accept request withdrawal with prisma",
                        msg: "Error from the server"
                    });
                case "falsetrue":
                    await walletService.updateRequestWithdrawal(__request.id_transaction, "waiting");
                    return res.status(500).json({
                        position: "Error: update balance for user with prisma",
                        msg: "Error from the server"
                    });
                case "falsefalse":
                    return res.status(500).json({
                        position: "Error: Accept request withdrawal and update balance for usser with prisma",
                        msg: "Error from the server"
                    });
            };
        });

    return;
};