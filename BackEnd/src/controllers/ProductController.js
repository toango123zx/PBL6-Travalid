const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { productCreateValidation } = require('../validation/authValidation');
import * as envApp from '../config/envApp';
import * as productHelper from '../helpers/productHelper';
import * as scheduleHelper from '../helpers/scheduleHelper';
import * as productService from '../services/productService';
import * as scheduleProductService from '../services/scheduleProductService';
import * as discountService from '../services/discountService';
const cron = require('node-cron');


export const getAllProduct = async (req, res, next) => {
    try {
        let page = parseInt(req.query.page, 10);
        const limit = envApp.LimitGetProductTraveller;
        if (page < 0 || !!page == false) page = 1; // set default page

        let start = (page - 1) * limit;
        const allProduct = await prisma.product.findMany({
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
        if (!allProduct) {
            return res.status(403).json({
                position: "getAllProduct",
                msg: "The user does not have permission to access this resource"
            });
        }
        res.status(200).json({
            status: 'success1123',
            msg: 'You have successfully.',
            data: allProduct
        });

    } catch (err) {
        console.error('getAllProduct: ', err);
        res.status(500).json({
            msg: 'Get internal server error in get all product',
        });
    }
};

export const getAllProductService = async (req, res, next) => {
    try {
        let page = parseInt(req.query.page, 10);
        const limit = envApp.LimitProductService;
        let start = (page - 1) * limit;
        if (page < 0 || !!page == false) page = 1; // set default page
        const id_user = req.user.id_user;
        const products = await productService.getAllProductForSupplier(id_user, start, limit);
        const schedules = await scheduleProductService.getSchedulesProduct(undefined, id_user, 'travel_supplier', start, limit)
        const discounts = await discountService.getDiscounts(id_user, start, limit)
        if (!products || !schedules || !discounts) {
            return res.status(403).json({
                position: "getAllProduct",
                msg: "The user does not have permission to access this resource"
            });

        }
        let product = productHelper.formatProductFormDb(products);
        let schedule = scheduleHelper.formatScheduleFormDb(schedules);
        let discount = discounts.map((discount) => {
            discount.supplier = discount.user.role;
            delete discount.user;
            return discount;
        });
        return res.status(200).send({
            data: {
                product, schedule, discount
            }
        })
    }
    catch (err) {
        return res.status(400).send({
            error: err,
        })
    }
}

export const getAllProductForSupplier = async (req, res, next) => {
    try {
        let page = parseInt(req.query.page, 10);
        const limit = envApp.LimitGetProductTraveller;
        const id_user = req.user.id_user;
        if (page < 0 || !!page == false) page = 1; // set default page
        let start = (page - 1) * limit;
        let allProduct = await productService.getAllProductForSupplier(id_user, start, limit);
        if (!allProduct) {
            return res.status(403).json({
                position: "getAllProduct",
                msg: "The user does not have permission to access this resource"
            });
        }
        allProduct = productHelper.formatProductFormDb(allProduct);
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully.',
            data: { allProduct }
        });

    } catch (err) {
        console.error('getAllProduct: ', err);
        res.status(500).json({
            msg: 'Get internal server error in get all product',
        });
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const productId = parseInt(req.params.id);
        if (productId < 0 || !!productId == false) {
            return res.status(404).send({
                position: 'Product id',
                msg: 'Product not found'
            })
        }
        const Product = await prisma.product.findUnique({
            where: { id_product: productId },
            select: {
                id_product: true,
                name: true,
                description: true,
                city: true,
                location: true,
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
        if (!Product) {
            return res.status(403).json({
                position: "Detailed Product id",
                msg: "The user does not have permission to access this resource"
            });
        }
        const product = productHelper.formatProductFromDb(Product);
        product.image_description = [];

        res.status(200).json({
            status: 'success',
            msg: 'You have successfully.',
            data: product,
        });
    } catch (err) {
        console.error('getProductById: ', err);
        res.status(500).json({
            msg: 'Get internal server error in get product',
        });
    }
};
export const createProduct = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        const { name, location_map, time, quantity, age, description, id_location, city } = req.body;
        const createProduct = await prisma.product.create({
            data: {
                name: name,
                id_user: id_user,
                location_map: location_map,
                time: time,
                quantity: quantity,
                age: age,
                description: description,
                id_location: id_location,
                city: city
            }
        });
        if (!createProduct) {
            if (__user.role === 'traveller') {
                return res.status(403).json({
                    position: "Role not allowed",
                    msg: "The user does not have permission to update this resource"
                })
            }
        }
        res.status(201).json({
            status: 'success',
            msg: 'You have successfully.',
            data: createProduct,
        });
    } catch (err) {
        console.error('createProduct: ', err);
        res.status(500).json({
            msg: 'Get internal server error in get product',
        });
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const id_product = parseInt(req.params.id);
        const id_user = req.user.id_user;
        const { name, location_map, time, quantity, age, description, id_location, city } = req.body;
        const listIdProduct = await prisma.product.findMany({
            select: {
                id_product: true
            },
            where: {
                id_user: id_user
            },
        })
        if (listIdProduct.length === 0) {
            return res.status(404).json({
                position: "id product",
                msg: "You have no products"
            });
        } else if (listIdProduct.some(item => item.id_product === id_product)) {
            const updateProduct = await prisma.product.update({
                where: {
                    id_product: id_product,
                    id_user: id_user,
                },
                data: {
                    name: name,
                    id_user: id_user,
                    location_map: location_map,
                    time: time,
                    quantity: quantity,
                    age: age,
                    description: description,
                    id_location: id_location,
                    city: city
                }
            });

            res.status(200).json({
                status: 'success',
                msg: 'You have successfully.',
                data: updateProduct,
            });
        } else if (listIdProduct.some(item => item.id_product !== id_product)) {
            return res.status(404).json({
                position: "id product",
                msg: "You don't have this product yet"
            });
        }

    } catch (err) {
        console.error('updateProduct: ', err);
        res.status(500).json({
            msg: 'Update Product error',
        });
    }
};


export const deleteProduct = async (req, res, next) => {
    try {
        console.log("-------------deleteProduct--------")
        let date = new Date();
        const id_user = req.user.id_user;
        const id_product = parseInt(req.params.id);
        const role = req.user.role;
        const time = parseInt(req.body.time);
        let dataProduct;
        let time_delete = date.setHours(date.getHours() + time)
        if (role === "admin") {
            dataProduct = await productService.setStatusProduct(id_product, id_user, role, "warning", time_delete);
            if (!dataProduct) {
                return res.status(404).send({
                    position: "status",
                    msg: "status is already a warning, or must have an active status"
                })
            }
        } else if (role.includes("supplier")) {
            dataProduct = await productService.setStatusProduct(id_product, id_user, role, "waiting", time_delete);
            if (!dataProduct) {
                return res.status(404).send({
                    position: "status",
                    msg: "status is already a waiting, or must have an active status "
                })
            }
        } else {
            return res.status(403).json({
                position: "role user",
                msg: "User does not have access rights"
            })
        }
        res.json(dataProduct);
    }
    catch (err) {
        console.error('Delete product: ', err);
        res.status(500).json({
            msg: 'Delete Product error',
        });
    }
};
// check nếu như time_hiện_tại < time_delete thì mới chạy
export const activeProduct = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        const id_product = parseInt(req.params.id);
        const role = req.user.role;
        const inactive_product = await prisma.inactive_Product.findUnique({ where: { id_product: id_product } })
        if (inactive_product) {
            let dataProduct;
            if (role === "admin") {
                dataProduct = await productService.setStatusProduct(id_product, id_user, role, "active");
                if (!dataProduct) {
                    return res.status(404).send({
                        position: "id product",
                        msg: "status is already a active, or must have an active status  "
                    })
                }
            } else if (role.includes("supplier")) {
                dataProduct = await productService.setStatusProduct(id_product, id_user, role, "active");
                if (!dataProduct) {
                    return res.status(404).send({
                        position: "id product",
                        msg: "status is already a active, or must have an active status "
                    })
                }
            } else {
                return res.status(403).json({
                    position: "role user",
                    msg: "User does not have access rights"
                })
            }
            return res.status(200).json(dataProduct);
        } else {
            return res.status(409).json({
                position: "product id",
                msg: "Product is active"
            })
        }

    }
    catch (err) {
        console.error('Delete product: ', err);
        res.status(500).json({
            msg: 'Delete Product error',
        });
    }
}

// check time_hiện_tại > time_delete thì xóa
const inactiveProduct = async (req, res) => {
        let id_products = await productService.getIdProductsInactive();
        const id_product_delete = id_products.map(item => item.id_product);
        if (id_product_delete.length > 0) {
            let id_schedule_products = await productService.getIdScheduleProductsByIdProduct(id_product_delete)
            const id_schedule_product_delete = id_schedule_products.map(item => item.id_schedule_product);
            let id_bills = await productService.getIdBillsByIdScheduleProduct(id_schedule_product_delete);
            const id_bill_cancel = id_bills.map(item => item.id_bill);
            let cancel_bills = await productService.cancelBillsByBillId(id_bill_cancel);
            let inactive_schedules = await productService.inactiveScheduleProductsByIdProduct(id_product_delete);
            let cancel_discounts = await productService.cancelDiscountsByIdProduct(id_product_delete);
            let inactive_products = await productService.inactiveProductsByIdProduct(id_product_delete);
            let delete_inactive_products = await productService.deleteInactiveProductsByIdProduct(id_product_delete)

            console.log("Success inactive products");
        } else {
            console.log("There are no products to delete")
        }
    }

    cron.schedule('0 */3 * * *', inactiveProduct);// run 3 hours each time



// xử lí xong : xem lại cái bảng mới lấy ra nếu hết thì thành fasle => dừng cron;
// nếu còn thì => tiếp tục cron;;
// khi người dùng sử dụng API xóa => nếu biến product_xoa là false thành true và cron.start() --- còn không thì cho qua

