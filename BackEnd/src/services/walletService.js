const { prisma } = require('../config/prismaDatabase');
import * as envApp from '../config/envApp';


export const getTransactions = async (id_transaction, id_user, action, status, start) => {
    const __checkAction = ["deposit", "withdrawal"];
    const __checkStatus = ["waiting", "accepted", "rejected"];
    try {
        const __where = {
            id_transaction: Number(id_transaction),
            id_user: Number(id_user),
            action: String(action),
            status: String(status),
        };
        if (!id_transaction) {
            delete __where.id_transaction;
        };
        if (!__where.id_user) {
            delete __where.id_user;
        };
        if (!action && __checkAction.includes(action)) {
            delete __where.action;
        }
        if (!status && __checkStatus.includes(status)) {
            delete __where.status;
        };
        return await prisma.transactions.findMany({
            select: {
                id_transaction: true,
                id_user: true,
                amount: true,
                time: true,
                bank_account_number: true,
                bank_name: true,
                action: true,
                status: true,
            },
            skip: start,
            take: envApp.LimitGetTransaction,
            where: __where,
            orderBy: [
                {
                    time: 'desc'
                },
            ]
        });
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