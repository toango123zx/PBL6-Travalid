import { prisma } from "../config/prismaDatabase";

export const getAllRates = async (id_product, start, limit) => {
    try {
        return await prisma.rate.findMany({
            where: {
                id_product: id_product,
                status: 'display'
            },
            skip: start,
            take: limit,
        });
    } catch (error) {
        return false;
    }
};

export const getRateById = async (id_rate) => {
    try {
        return await prisma.rate.findUnique({
            where: {
                id_rate: id_rate
            },
            select: {
                id_rate: true
            }
        })
    } catch (error) {
        return false;
    }
}

export const createRate = async (data) => {
    try {
        return await prisma.rate.create({
            data: data
        })
    } catch (error) {
        return false;
    }
}


export const deleteRate = async (id_rate) => {
    try {
        await prisma.rate.update({
            where: {
                id_rate: id_rate
            },
            data: {
                status: "hidden"
            }
        })
        return true;
    } catch (error) {
        return false;
    }
}

export const getComplete = async (id_user, id_product) => {
    try {
        return await prisma.bill.findMany({
            select: {
                id_bill: true,
                id_user: true,
                status: true,
                info_bill: {
                    select: {
                        schedule_product: {
                            select: {
                                id_schedule_product: true,
                                id_product: true,
                            }
                        }
                    }
                }
            },
            where: {
                status: "done",
                id_user: Number(id_user),
                info_bill: {
                    some: {
                        schedule_product: {
                            id_product: Number(id_product)
                        }
                    }
                }
            }
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const getQuantityRate = async (id_user, id_product) => {
    try {
        const quantity = await prisma.rate.findMany({
            where: {
                id_user: id_user,
                id_product: id_product,
            }
        })
        return quantity.length || 0;
    } catch (error) {
        return false;
    }
}