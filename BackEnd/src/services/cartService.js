const { prisma } = require('../config/prismaDatabase');

export const getCarts = async (id_user) => {
    try {
        return await prisma.cart.findMany({
            select: {
                id_cart: true,
                product_name: true,
                city_name: true,
                schedule_poruduct: {
                    select: {
                        id_schedule_product: true,
                        id_product: true,
                        start_time: true,
                        end_time: true,
                        price: true,
                        status: true,
                    }
                }
            },
            where: {
                id_user: Number(id_user)
            },
            orderBy: {
                id_cart: 'desc'
            }
        });
    } catch (e) {
        return false;
    };
};

export const getCartByIdSchedule = async (id_schedule_product, id_user) => {
    try {
        return await prisma.cart.findFirst({
            select: {
                id_cart: true,
                product_name: true,
                city_name: true,
                schedule_poruduct: {
                    select: {
                        id_schedule_product: true,
                        id_product: true,
                        start_time: true,
                        end_time: true,
                        price: true,
                        status: true,
                    }
                }
            },
            where: {
                id_schedule_product: Number(id_schedule_product),
                id_user: Number(id_user)
            }
        });
    } catch (e) {
        return false;
    };
};

export const createCart = async (cart) => {
    try {
        await prisma.cart.create({
            data: cart
        });
        return true;
    } catch (e) {
        return false;
    };
};

export const deleteCart = async (id_cart, id_user) => {
    try {
        await prisma.cart.delete({
            where: {
                id_cart: Number(id_cart),
                id_user: Number(id_user)
            }
        });
        return true;
    } catch (e) {
        return false;
    };
};