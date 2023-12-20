const { prisma } = require('../config/prismaDatabase');

export const createDestroy = async (destroyObject) => {
    const __checkCategories = ["image", "user", "product"];
    try {
        if (!__checkCategories.includes(destroyObject.category)) {
            return false;
        };
        const __value = await prisma.destroy.create({
            data: destroyObject
        });
        
        return {
            status: true,
            value: __value
        };
    } catch (e) {
        return {
            status: false,
        };
    };
};

export const updateDestroyByIdDestroy = async (id_destroy, value) => {
    try {
        await prisma.destroy.update({
            where: {
                id_destroy: Number(id_destroy),
            },
            data: {
                value: String(value)
            },
        });

        return true;
    } catch (e) {
        return false;
    };
};

export const deleteDestroyByIdDelete = async (id_destroy) => {
    try {
        await prisma.destroy.delete({
            where: {
                id_destroy: Number(id_destroy),
            },
        });

        return true;
    } catch (e) {
        return false;
    };
};

export const deleteDestroyByCategory = async (id, category) => {
    try {
        await prisma.destroy.delete({
            where: {
                id: Number(id),
                category: String(category),
            },
        });

        return true;
    } catch (e) {
        return false;
    };
};