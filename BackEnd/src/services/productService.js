const { prisma } = require('../config/prismaDatabase');
import * as envApp from '../config/envApp';

export const getAllProducts = async (page) => {
    try {
        const limit = envApp.LimitGetProductTraveller;
        let start = (page - 1) * limit;
        return await prisma.product.findMany({
            select: {
                id_product: true,
                name: true,
                avg_rate: true,
                count_complete: true,
                city: true,
                image: true
            },
            skip: start,
            take: limit,
        });
    } catch (error) {
        return false;
    }
};

export const getProductById = async (productId) => {
    try {
        return await prisma.product.findFirst({
            where: { id_product: productId },
            select: {
                id_product: true,
                name: true,
                description: true,
                city: true,
                location: {
                    select : {
                        display_name : true,
                    }
                },
                time: true,
                quantity: true,
                count_complete: true,
                location_map: true,
                image: true,
                user: {
                    select: {
                        id_user: true,
                        name: true,
                        email: true,
                        phone_number: true,
                        address: true,
                        info_supplier: {
                            select: {
                                tax_id_number: true,
                            }
                        }
                    }
                },
                schedule_product: {
                    select: {
                        id_schedule_product: true,
                        start_time: true,
                        end_time: true,
                        price: true,
                        booked: true,
                        status: true
                    }
                }
            }
        });
    } catch (error) {
        return false;
    }
};

export const create_Product = async (product) => {
    try {
        return await prisma.product.create({
            data: product
        });
    } catch (error) {
        return false;
    }
}

export const updateProduct = async (id_product, product) => {
    try {
        return await prisma.product.update({
            where: {
                id_product: id_product,
            },
            data: product
        });
    } catch (error) {
        return false;
    }
}

export const getIdProductsByIdUser = async (id_user) => {
    try {
        return await prisma.product.findMany({
            select: {
                id_product: true
            },
            where: {
                id_user: id_user
            },
        })
    } catch (error) {
        return false;
    }
}

export const getAllProductForSupplier = async (id_user, start, limit) => {
    try {

        return await prisma.product.findMany({
            where: {
                id_user: id_user,
            },
            select: {
                id_product: true,
                name: true,
                city: true,
                time: true,
                quantity: true,
                location: {
                    select: {
                        display_name: true
                    }
                },
                status: true,
                avg_rate: true,
                count_complete: true,
            },

            skip: start,
            take: limit,
        });
    }
    catch (err) {
        return false;
    }
}

export const getAllScheduleForSupplier = async (start, limit) => {
    try {
        return await prisma.schedule_Product.findMany({
            select: {
                id_product: true,
                name: true,
                city: true,
                time: true,
                quantity: true,
                location: {
                    select: {
                        display_name: true
                    }
                },
                status: true,
                avg_rate: true,
                count_complete: true,
            },
            skip: start,
            take: limit,
        });
    }
    catch (err) {
        return false;
    }
}

export const setStatusProduct = async (id_product, id_user, role, status, inactive_at) => {
    let __status;
    let product = {
        id_product: id_product,
        status: status
    }

    let newProduct = {
        status: __status,
    }

    switch (String(status)) {
        case 'active':
            if (role === 'admin') {
                newProduct.status = 'active';
                product.status = 'warning'
                newProduct.inactive_product = {
                    delete: {
                        id_product: id_product
                    }
                }
            }
            if (role.includes('supplier')) {
                newProduct.status = 'active';
                product.id_user = id_user;
                product.status = 'waiting'
                newProduct.inactive_product = {
                    delete: {
                        id_product: id_product
                    }
                }
            }
            break;
        case 'inactive':
            if (role === 'admin') {
                __status = 'inactive';
                product.status = 'warning'
            }
            if (role.includes('supplier')) {
                __status = 'inactive';
                product.id_user = id_user;
                product.status = 'waiting'
            }
            break;
        case 'waiting':
            if (role.includes('supplier')) {
                product.id_user = id_user;
                product.status = 'active';
                newProduct.status = 'waiting'
                newProduct.inactive_product = {
                    create: {
                        inactive_at: new Date(inactive_at)
                    }
                }
            }
            break;
        case 'warning':
            if (role === 'admin') {
                product.status = 'active';
                newProduct.status = 'warning'
                newProduct.inactive_product = {
                    create: {
                        inactive_at: new Date(inactive_at)
                    }
                }
            }
            break;
        default:
            return false;
    };
    try {
        return await prisma.product.update({
            where: product,
            data: newProduct
        })
    } catch (error) {
        return false;
    }
}

export const getCurrentStatus = async (id_product) => {
    try {
        const current_status = await prisma.product.findUnique({
            where: {
                id_product: id_product
            },
            select: {
                status: true
            }
        })
        return current_status.status;
    } catch (e) {
        return false;
    }

}

export const getIdProductsInactive = async () => {
    try {
        return await prisma.inactive_Product.findMany({
            where: {
                inactive_at: {
                    lte: new Date(),
                }
            },
            select: {
                id_product: true,
            }
        })
    } catch (error) {
        return false;
    }
}

export const getIdScheduleProductsByIdProduct = async (id_product) => {
    try {
        return await prisma.schedule_Product.findMany({
            where: {
                id_product: {
                    in: id_product
                },
                start_time: {
                    lte: new Date(),
                }
            },
            select: {
                id_schedule_product: true,
            }
        })
    } catch (error) {
        return false;
    }
}

export const getIdBillsByIdScheduleProduct = async (id_schedule_product) => {
    try {
        return await prisma.info_Bill.findMany({
            where: {
                id_schedule_product: {
                    in: id_schedule_product
                }
            },
            select: {
                id_bill: true,
            }
        })
    } catch (error) {
        return false;
    }
}

export const cancelBillsByBillId = async (id_bill_cancel) => {
    try {
        return await prisma.bill.updateMany({
            where: {
                status: {
                    in: ['pending', 'paided']
                },
                id_bill: {
                    in: id_bill_cancel
                }
            },
            data: {
                status: 'cancel'
            }
        })
    } catch (error) {
        return false;
    }
}

export const inactiveScheduleProductsByIdProduct = async (id_product) => {
    try {
        return await prisma.schedule_Product.updateMany({
            where: {
                id_product: {
                    in: id_product
                },
            },
            data: {
                status: 'inactive'
            }
        })
    } catch (error) {
        return false;
    }
}

export const cancelDiscountsByIdProduct = async (id_product) => {
    try {
        return await prisma.discount.updateMany({
            where: {
                id_product: {
                    in: id_product
                },
            },
            data: {
                status: 'cancel'
            }
        })
    } catch (error) {
        return false;
    }
}


export const inactiveProductsByIdProduct = async (id_product) => {
    try {
        return await prisma.product.updateMany({
            where: {
                id_product: {
                    in: id_product
                }
            },
            data: {
                status: 'inactive'
            }
        })
    } catch (error) {
        return false;
    }
}

export const deleteInactiveProductsByIdProduct = async (id_product) => {
    try {
        return await prisma.inactive_Product.deleteMany({
            where: {
                id_product: {
                    in: id_product
                }
            }
        })
    } catch (error) {
        return false;
    }
}

export const getInactiveProductsByIdProduct = async (id_product) => {
    try {
        return await prisma.inactive_Product.findUnique({ where: { id_product: id_product } })
    } catch (error) {
        return false;
    }
}