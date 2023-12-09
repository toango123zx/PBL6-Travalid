const { prisma } = require('../config/prismaDatabase');

export const getSchedulesProductByDiscounts = async (id_schedules_product, id_discount) => {
    try {
        return await prisma.schedule_Product.findFirst({
            select: {
                id_schedule_product: true,
                id_product: true
            },
            where: {
                start_time: {
                    gt: new Date(),
                },
                status: 'active',
                id_schedule_product: {
                    in: id_schedules_product
                },
                product: {
                    discount: {
                        some: {
                            id_discount: id_discount,
                            status: "active",

                        }
                    }

                }
            }
        });
    } catch (e) {
        return false
    }
};

export const getScheduleProduct = async (id_schedules_product) => {
    try {
        return prisma.schedule_Product.findFirst({
            select: {
                id_schedule_product: true,
                id_product: true,
                start_time: true,
                end_time: true,
                price: true,
                booked: true,
                status: true,
                product: {
                    select: {
                        name: true,
                        id_user: true,
                        quantity: true,
                        age: true,
                        city: true,
                    }
                }
            },
            where: {
                id_schedule_product: Number(id_schedules_product),
                start_time: {
                    gt: new Date()
                },
                status: 'active',
            },
            orderBy: {
                start_time: 'asc'
            }
        });
    } catch (e) {
        return false;
    };
};

export const getSchedulesProduct = async (id_schedules_product, id_user, role, start, limit) => {
    let whereGetScheduleProduct;
    switch (role) {
        case 'traveller': {
            console.log(1)
            whereGetScheduleProduct = {
                id_schedule_product: {
                    in: id_schedules_product,
                },
                start_time: {
                    gt: new Date()
                },
                status: 'active',
            }
            break;
        }
        case 'travel_supplier': {
            whereGetScheduleProduct = {
                product: {
                    id_user: Number(id_user)
                }
            }
            break;
        }
        default: {
            console.log(2)
            return false;
        }
    }
    try {
        return await prisma.schedule_Product.findMany({
            select: {
                id_schedule_product: true,
                id_product: true,
                start_time: true,
                end_time: true,
                price: true,
                booked: true,
                status: true,
                product: {
                    select: {
                        name: true,
                        id_user: true,
                        quantity: true,
                        age: true,
                        city: true,
                    }
                }
            },
            where: whereGetScheduleProduct,
            orderBy: {
                start_time: 'asc'
            },
            skip: start,
            take: limit,
        });

    } catch (e) {
        console.log(e);
        return false;
    };
};