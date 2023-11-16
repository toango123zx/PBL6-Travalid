const { prisma } = require('../config/prismaDatabase');

export const createProduct = async (id_prodcut, id_user, role) => {
    if (String(role) == "admin") {
        id_user = {
            not: -1
        };
    } else {
        if (!String(role).includes("supplier")) {
            return false;
        };
        id_user = Number(id_user);
    };
    try {
        return await prisma.product.findFirst({
            select: {
                id_product: true,
            },
            where: {
                id_product: Number(id_prodcut),
                id_user: id_user
                
            }
        });
    } catch (e) {
        return false;
    };
};


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