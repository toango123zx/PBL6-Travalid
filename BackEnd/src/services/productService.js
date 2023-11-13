const { prisma } = require('../config/prismaDatabase');

export const getProduct = async (id_prodcut) => {
    try {
        return await prisma.product.findFirst({
            where: {
                id_product: Number(id_prodcut),
            }
        });
    } catch (e) {
        return false;
    };
};