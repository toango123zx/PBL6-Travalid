const { prisma } = require('../config/prismaDatabase');

export const createDestroy= async (destroyObject, catogry) => {
    const __checkCategories = ["image", "user", "product"];
    try {
        if (!__checkCategories.includes(catogry)) {
            return false;
        };

        const __destroyObjects = {
            id: Number(destroyObject.id),
            value: String(destroyObject.value),
            category: String(catogry)
        };
        const __value = await prisma.destroy.create({
            data: __destroyObjects
        });

        return {
            status: true,
            value: __value
        };
    } catch (e) {
        console.log(e);
        return {
            status: false,
        };
    };
};

export const createDestroys = async (destroyObjects, catogry) => {
    const __checkCategories = ["image", "user", "product"];
    try {
        const __destroyObjects = [];
        const __length = destroyObjects.__length;
        if (!__checkCategories.includes(catogry) && __length === 0) {
            return false;
        };

        for (const i in __length) {
            __destroyObjects.push({
                id: Number(destroyObjects[i].id),
                value: String(destroyObjects[i].value),
                category: String(catogry)
            });
        };

        const __value =  await prisma.destroy.createMany({
            data: __destroyObjects,
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

export const deleteDestroysByIdDestroys = async (id_destroys) => {
    try {
        await prisma.destroy.deleteMany({
            where: {
                id_destroy: id_destroys,
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