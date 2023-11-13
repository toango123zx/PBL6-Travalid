const { prisma } = require('../config/prismaDatabase');

export const getUser = async (username, email, tax_id_number) => {
    try {
        return await prisma.user.findFirst({
            select: {
                id_user: true,
                username: true,
                password: true,
                date_of_birth: true,
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