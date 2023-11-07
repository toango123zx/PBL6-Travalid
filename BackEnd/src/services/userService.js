const { prisma } = require('../config/prismaDatabase');

export const getUser = async (username, email, tax_id_number) => {
    try {
        return await prisma.user.findFirst({
            select: {
                id_user: true,
                username: true,
                password: true,
                salt: true,
                role: true,
                status: true,
            },
            where: {
                OR: [
                    {
                        username: username,
                    },
                    {
                        email: email,
                    },
                    {
                        info_supplier: {
                            some: {
                                tax_id_number: tax_id_number
                            }
                        },
                    }
                ],
                NOT: {
                    status: "inactive",
                },
            }
        });
    } catch (e) {
        return false;
    };
};

export const creteUser = async (user) => {
    try {
        await prisma.user.create({
            data: user
        });
        return true;
    } catch (e) {
        return false;
    };

};

export const createSupplier = async (user, info_Supplier) => {
    const supplier = {
        ...user,
        info_supplier: {
            create: info_Supplier
        }
    };
    try {
        await prisma.user.create({
            data: supplier
        });
        return true;
    } catch (e) {
        return false;
    };
};

export const deleteUser = async (username) => {
    try {
        await prisma.user.delete({
            where: {
                username: username
            }
        });
        return true;
    } catch (e) {
        return false;
    };
};