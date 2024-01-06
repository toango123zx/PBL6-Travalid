import * as envApp from '../config/envApp';

const { prisma } = require('../config/prismaDatabase');

export const getTotalRevenue = async (start_time, end_time, id_supplier) => {
    try {
        if (id_supplier === undefined) {
            return await prisma.bill.findMany({
                where: {
                    status: {
                        in: ['done', 'paided']
                    },
                    time: {
                        gte: new Date(start_time),
                        lte: new Date(end_time),
                    }
                },
                select: {
                    discount_value: true,
                    info_bill: {
                        select: {
                            schedule_product: {
                                select: {
                                    price: true
                                }
                            }
                        }
                    }
                }
            });
        } else {
            return await prisma.bill.findMany({
                where: {
                    id_supplier: id_supplier,
                    status: {
                        in: ['done', 'paided']
                    },
                    time: {
                        gte: new Date(start_time),
                        lte: new Date(end_time),
                    }
                },
                select: {
                    discount_value: true,
                    info_bill: {
                        select: {
                            schedule_product: {
                                select: {
                                    price: true
                                }
                            }
                        }
                    }
                }
            });
        }
    } catch (error) {
        return false;
    }
};

export const getActiveDiscountsCount = async (start_time, end_time, id_supplier) => {
    try {
        if (id_supplier === undefined) {
            return await prisma.discount.findMany({
                where: {
                    status: 'active',
                    end_time: {
                        gte: new Date(start_time),
                        lte: new Date(end_time),
                    },
                },
            });
        }
        else {
            return await prisma.discount.findMany({
                where: {
                    id_user: id_supplier,
                    status: 'active',
                    end_time: {
                        gte: new Date(start_time),
                        lte: new Date(end_time),
                    },
                },
            });
        }
    } catch (error) {
        return false;
    }
}

export const getProductbyIdLocation = async (id_location, id_user) => {
    try {
        if (id_user === undefined) {
            return await prisma.product.findMany({
                where: {
                    id_location: id_location,
                },
            });
        } else {
            return await prisma.product.findMany({
                where: {
                    id_user: id_user,
                    id_location: id_location,
                },
            });
        }
    } catch (error) {
        return false;
    }
}

export const getDislayNameByIdLocation = async (id_location) => {
    try {
        return await prisma.location.findUnique({
            where: {
                id_location: id_location,
            },
            select: {
                display_name: true,
            }
        })
    } catch (error) {
        return false;
    }
}

export const getCompletedCustomers = async (start_time, end_time, id_user) => {
    try {
        if (id_user === undefined) {
            return await prisma.bill.findMany({
                where: {
                    status: 'done',
                    time: {
                        gte: new Date(start_time),
                        lte: new Date(end_time),
                    },
                },
            });
        } else {
            return await prisma.bill.findMany({
                where: {
                    id_supplier: id_user,
                    status: 'done',
                    time: {
                        gte: new Date(start_time),
                        lte: new Date(end_time),
                    },
                },
            });
        }
    } catch (error) {
        return false;
    }
}