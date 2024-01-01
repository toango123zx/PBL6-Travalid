const { prisma } = require('../config/prismaDatabase');
import * as envApp from '../config/envApp';


export const getTransactions = async (id_user) => {
    try {
        const _transactions =  await prisma.transactions.findMany({
            select: {
                id_transaction: true,
                id_user: true,
                amount: true,
                time: true
            },
            where: {
                id_user: Number(id_user),
            }
        });
        return _transactions;
    } catch (e) {
        return false;
    };
};

export const createRequestWithdrawal = async (requestWithdrawal) => {
    try {
        return await prisma.transactions.create({
            data: requestWithdrawal
        });
    } catch (e) {
        return false;
    };
};

export const updateRequestWithdrawal = async (id_transaction, status) => {
    const __checkStatus = ["waiting", "accepted", "rejected"];
    try {
        if (!__checkStatus.includes(status)) {
            return false;
        };
        await prisma.transactions.update({
            where: {
                id_transaction: Number(id_transaction)
            },
            data: {
                status: String(status)
            }
        });

        return true;
    } catch (e) {
        return false;
    };
};