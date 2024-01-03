const { prisma } = require('../config/prismaDatabase');

export const getBills = async (id_user, id_supplier) => {
    if (id_user && id_supplier) {
        return false;
    };
    let __where;
    if (id_user) {
        __where = {
            id_user: Number(id_user)
        };
    } else {
        __where = {
            id_supplier: Number(id_supplier)
        };
    };
    try {
        return await prisma.bill.findMany({
            select: {
                id_bill: true,
                time: true,
                quantity: true,
                status: true,
            },
            where: __where
        });
    } catch (e) {
        return false;
    };
};

export const getDetailBill = async (id_bill, id_user) => {
    try {
        return await prisma.bill.findFirst({
            select: {
                id_bill: true,
                user: {
                    select: {
                        id_user: true,
                        image: true,
                        name: true,
                        email: true,
                        gender: true,
                        date_of_birth: true,
                        phone_number: true,
                        address: true,
                        status: true,
                    }
                },
                supplier: {
                    select: {
                        id_user: true,
                        image: true,
                        name: true,
                        email: true,
                        gender: true,
                        date_of_birth: true,
                        phone_number: true,
                        address: true,
                        status: true,
                    }
                },
                time: true,
                quantity: true,
                discount_value: true,
                status: true,
                info_bill: {
                    select: {
                        product_name: true,
                        city_name: true,
                        schedule_product: {
                            select: {
                                id_schedule_product: true,
                                id_product: true,
                                start_time: true,
                                end_time: true,
                                price: true,
                                status: true,
                            }
                        }
                    }
                }

            },
            where: {
                OR: [
                    {
                        id_bill: Number(id_bill),
                        id_user: Number(id_user)
                    },
                    {
                        id_bill: id_bill,
                        id_supplier: Number(id_user),
                    }
                ]
            }
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
                status: __status,
                OR: [
                    {
                        id_user: Number(id_user)
                    },
                    {
                        id_supplier: Number(id_user)
                    }
                ]
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
                id_user: Number(id_user),
            }
        });
    } catch (e) {
        console.log('error view', e);
        return false;
    };
};

export const getAllBills = async () => {
    try {
        return await prisma.bill.findMany({
            select: {
                id_bill: true,
                user: {
                    select: {
                        id_user: true,
                        username: true,
                        name: true,
                        email: true,
                        image: true,
                    }
                },
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
        const createdBill = await prisma.bill.create({
            data: bill
        });
        // return true;
        return createdBill.id_bill;
    } catch (e) {
        console.error("Error creating bill:", e);
        return false;
    };
};

