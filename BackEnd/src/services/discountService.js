const { prisma } = require('../config/prismaDatabase');

export const getAllDiscount = async () => {
    try {
        return await prisma.discount.findMany({
            select: {
                id_discount: true,
                id_product: true,
                name: true,
                start_time: true,
                description: true,
                end_time: true,
                value: true,
                quantity: true,
                point: true,
                applited: true,
                status: true,
                user: {
                    select: {
                        role: true,
                    }
                }
            },
            where: {
                status: {
                    not: "cancel"
                },
                end_time: {
                    gt: new Date(),
                }
            },
            orderBy: [
                {
                    value: 'desc',
                },
                {
                    end_time: 'asc',
                },
                {
                    start_time: 'asc',
                },
                {
                    quantity: 'asc'
                }]
        });
    } catch (e) {
        return false;
    };
};

export const getDiscounts = async (id_user) => {
    try {
        return prisma.discount.findMany({
            select: {
                id_discount: true,
                id_product: true,
                name: true,
                start_time: true,
                description: true,
                end_time: true,
                value: true,
                quantity: true,
                point: true,
                applited: true,
                status: true,
                user: {
                    select: {
                        role: true,
                    }
                }
            },
            where: {
                id_user: Number(id_user),
            },
            orderBy: [
                {
                    start_time: 'desc',
                },
                {
                    end_time: 'desc',
                },
                {
                    value: 'desc',
                },
                {
                    quantity: 'desc'
                }]
        });
    } catch (e) {
        return false;
    };
};

export const getDetailDiscount = async (id_discount) => {
    try {
        return prisma.discount.findFirst({
            select: {
                id_discount: true,
                id_product: true,
                name: true,
                start_time: true,
                description: true,
                end_time: true,
                value: true,
                quantity: true,
                point: true,
                applited: true,
                status: true,
                user: {
                    select: {
                        role: true,
                    }
                }
            },
            where: {
                id_discount: Number(id_discount),
                status: {
                    not: "cancel"
                },
                end_time: {
                    gt: new Date(),
                }
            }
        });
    } catch (e) {
        return false;
    };
};

export const createDiscount = async (discount) => {
    try {
        await prisma.discount.create({
            data: discount,
        });
        return true;
    } catch (e) {
        console.log(e)
        return false;
    };
};

export const updateDiscount = async (id_discount, id_user, role, status) => {
    const __checkStatus = ["full", "cancel"];
    if (!__checkStatus.includes(String(status))) {
        return null;
    };
    if (String(status) === 'full' || role === 'admin') {
        id_user = {
            not: 0,
        };
    } else {
        id_user = Number(id_user);
    };
    try {
        await prisma.discount.update({
            where: {
                id_discount: Number(id_discount),
                id_user: id_user,
                status: 'active'
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