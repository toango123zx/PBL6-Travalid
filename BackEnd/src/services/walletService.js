const { prisma } = require('../config/prismaDatabase');
import * as envApp from '../config/envApp';


export const getTransactions = async (id_user, action, status, start) => {
    try {
        const __where = {
            id_user: Number(id_user),
            action: String(action),
            status: String(status),
        };
        if (!__where.id_user) {
            delete __where.id_user;
        };
        if (!action) {
            delete __where.action;
        }
        if (!status) {
            delete __where.status;
        };
        return await prisma.transactions.findMany({
            select: {
                id_user: true,
                amount: true,
                time: true,
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