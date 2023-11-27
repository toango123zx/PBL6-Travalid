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
            }
        });
    } catch (e) {
        console.log(e)
        return false;
    };
};