const { prisma } = require('../config/prismaDatabase');

export const getBills = async (id_user) => {
    try {
        return await prisma.bill.findMany({
            select: {
                id_bill: true,
                time: true,
                quantity: true,
                status: true,
            },
            where: {
                id_user: Number(id_user)
            }
        })
    } catch (e) {
        return false;
    }
};

export const getDetailBill = async (id_bill, id_user) => {
    try {
        return await prisma.bill.findFirst({
            select: {
                id_bill: true,
                time: true,
                quantity: true,
                status: true,
                discount: {
                    select: {
                        value: true
                    }
                },
                info_bill: {
                    select: {
                        id_info_bill: true,
                        schedule_product: {
                            select: {
                                start_time: true,
                                end_time: true,
                                price: true,
                                status: true,
                                product: {
                                    select: {
                                        name: true,
                                        location: {
                                            select: {
                                                display_name: true,
                                            }
                                        }
                                    }
                                }
                            },

                        }
                    }
                }
            },
            where: {
                id_bill: id_bill,
                id_user: id_user
            },
        });
    } catch (e) {
        return false;
    };
};

export const updateBillStatus = async (id_bill, id_user, status) => {
    const __checkStatus = ['done', 'paided', 'pending', 'cancel'];
    let __status = '';
    if (!__checkStatus.includes(String(status))) {
        return null;
    };
    switch (String(status)) {
        case 'done':
            __status = 'paided';
            break;
        case 'paided':
            __status = 'pending';
            break;
        case 'pending':
            return false;
        case 'cancel':
            __status = 'pending';
            break;
        default:
            return false;
    };
    try {
        await prisma.bill.update({
            where: {
                id_bill: id_bill,
                id_user: id_user,
                status: __status
            },
            data: {
                status: String(status)
            }
        });
        return true;
    } catch (e) {
        return false;
    };
};

export const getBill = async (id_user) => {
    try {
        return await prisma.bill.findMany({
            select: {
                id_bill: true,
                id_user: true,
                time: true,
                quantity: true,
                status: true,
                info_bill: {
                    select: {
                        id_info_bill: true,
                        schedule_product: {
                            select: {
                                start_time: true,
                                end_time: true,
                                price: true,
                                status: true,
                                product: {
                                    select: {
                                        name: true,
                                        location: {
                                            select: {
                                                display_name: true,
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            where: {
                id_user: id_user,
            }
        });
    } catch (e) {
        return false;
    };
};

export const createBill = async (bill) => {
    try {
        bill.info_bill = {
            create: bill.info_bill
        }
        await prisma.bill.create({
            data: bill
        });
        return true;
    } catch (e) {
        console.log(e)
        return false;
    };
};