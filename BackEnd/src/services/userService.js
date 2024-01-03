const { prisma } = require('../config/prismaDatabase');

export const getUser = async (id_user, username, email, tax_id_number) => {
    try {
        let __properties = [
            {
                id_user: id_user,
            },
            {
                username: username,
            },
            {
                email: email,
            }];
        if (tax_id_number) {
            __properties.push({
                info_supplier: {
                    some: {
                        tax_id_number: Number(tax_id_number)
                    }
                },
            });
        };
        
        return await prisma.user.findFirst({
            select: {
                id_user: true,
                username: true,
                password: true,
                name: true,
                image: true,
                date_of_birth: true,
                balance: true,
                salt: true,
                role: true,
                status: true,
            },
            where: {
                OR: __properties,
                NOT: {
                    status: "inactive",
                },
            }
        });
    } catch (e) {
        return false;
    };
};

export const getUsers = async () => {
    try {
        return await prisma.user.findMany({
            take: 20,
            skip: 1,
            select: {
                id_user: true,
                username: true,
                name: true,
                role: true,
                phone_number: true,
                balance: true,
                status: true,
            }
        });
    } catch (e) {
        false;
    };
};

export const getInfoUser = async (id_user, role) => {
    let __user = {
        id_user: true,
        username: true,
        role: true,
        image: true,
        name: true,
        email: true,
        gender: true,
        date_of_birth: true,
        phone_number: true,
        address: true,
        balance: true,
        status: true,
        info_supplier: {
            select: {
                tax_id_number: true,
            }
        }
    };
    switch (role) {
        case "traveller": {
            delete __user.info_supplier;
            break;
        };
        case "admin": {
            delete __user.info_supplier;
            break;
        };
        case "travel_supplier": {
            delete __user.gender;
            break;
        };
        case "hotel_supplier": {
            delete __user.gender;
            break;
        };
        case "restaurant_supplier": {
            delete __user.gender;
            break;
        };
        case "transportation_supplier": {
            delete __user.gender;
            break;
        };
        default: {
            return false
        };
    };
    try {
        return await prisma.user.findFirst({
            select: __user,
            where: {
                id_user: Number(id_user),
                role: String(role)
            }
        });
    } catch (e) {
        false;
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

export const updateUser = async (id_user, user) => {
    try {
        await prisma.user.update({
            where: {
                id_user: Number(id_user),
            },
            data: user,
        });
        return true;
    } catch (e) {
        return false;
    };
};

export const updateUserBalance = async (id_user, amount, prismaClient = prisma) => {
    try {
        await prismaClient.user.update({
            where: {
                id_user: Number(id_user),
            },
            data: {
                balance: {
                    increment: Number(amount)
                }
            },
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