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
        return false;
    };
};

// export const getAllBills = async () => {
//     try {
//         return await prisma.bill.findMany({
//             select: {
//                 id_bill: true,
//                 id_user: true,
//                 time: true,
//                 quantity: true,
//                 status: true,
//                 info_bill: {
//                     select: {
//                         id_info_bill: true,
//                         schedule_product: {
//                             select: {
//                                 start_time: true,
//                                 end_time: true,
//                                 price: true,
//                                 status: true,
//                                 product: {
//                                     select: {
//                                         name: true,
//                                         location: {
//                                             select: {
//                                                 display_name: true,
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         });
//     } catch (e) {
//         return false;
//     };
// };

export const getAllBills = async () => {
    return [
            {
                "id_bill": 1,
                "user": {
                    "name": "traveller1",
                    "email": "traveller1@gmail.com",
                    "image": "https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg"
                },
                "time": "2023-12-21T11:22:47.020Z",
                "quantity": 4,
                "status": "pending",
                "info_bill": [
                    {
                        "id_info_bill": 3184,
                        "schedule_product": {
                            "start_time": "2024-10-20T23:00:00.000Z",
                            "end_time": "2024-11-22T13:00:00.000Z",
                            "price": 1000000,
                            "status": "active",
                            "product": {
                                "name": "Núi Bà Nà",
                                "location": {
                                    "display_name": "Bà Nà Hill"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "id_bill": 2,
                "user": {
                    "name": "traveller2",
                    "email": "traveller2@gmail.com",
                    "image": "https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                },
                "time": "2023-10-20T02:14:56.000Z",
                "quantity": 8,
                "status": "paided",
                "info_bill": [
                    {
                        "id_info_bill": 3183,
                        "schedule_product": {
                            "start_time": "2024-11-22T23:00:00.000Z",
                            "end_time": "2024-11-24T13:00:00.000Z",
                            "price": 1500000,
                            "status": "active",
                            "product": {
                                "name": "Núi Bà Nà",
                                "location": {
                                    "display_name": "Bà Nà Hill"
                                }
                            }
                        }
                    }
                ]
            },
        ]
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
        return false;
    };
};

