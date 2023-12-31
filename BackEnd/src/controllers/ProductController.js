const cron = require('node-cron');
const { productCreateValidate, productUpdateValidate, productDeleteValidate} = require('../validation/authValidation');

import * as envApp from '../config/envApp';
import * as productHelper from '../helpers/productHelper';
import * as scheduleHelper from '../helpers/scheduleHelper';
import * as productService from '../services/productService';
import * as scheduleProductService from '../services/scheduleProductService';
import * as discountService from '../services/discountService';

cron.schedule('0 */3 * * *', inactiveProduct);// run 3 hours each time

async function inactiveProduct() {
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

export const getAllProduct = async (req, res, next) => {
    try { 
        let page = parseInt(req.query.page, 10);
        if (page < 0 || !!page == false) page = 1;
        const allProduct = await productService.getAllProducts(page);
        if (!allProduct) {
            return res.status(403).json({
                position: "getAllProduct",
                msg: "The user does not have permission to access this resource"
            });
        }
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully.',
            data: allProduct
        });

    } catch (err) {
        res.status(500).json({
            msg: 'Get internal server error in get all product',
        });
    }
};

export const getAllProductService = async (req, res, next) => {
    try {
        let page = parseInt(req.query.page, 10);
        if (page < 0 || !!page == false) page = 1; // set default page
        const limit = envApp.LimitProductService;
        let start = (page - 1) * limit;
        const id_user = req.user.id_user;
        const products = await productService.getAllProductForSupplier(id_user, start, limit);
        const schedules = await scheduleProductService.getSchedulesProduct(undefined, id_user, 'travel_supplier', start, limit)
        const discounts = await discountService.getDiscountsByIdUser(id_user, start)
        if (!products || !schedules || !discounts) {
            return res.status(403).json({
                position: "getAllProduct",
                msg: "The user does not have permission to access this resource"
            });
        }
        let product = productHelper.formatProductsFromDb(products);
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
        if (page < 0 || !!page == false) page = 1; // set default page
        const limit = envApp.LimitGetProductTraveller;
        const id_user = req.user.id_user;
        let start = (page - 1) * limit;
        let allProduct = await productService.getAllProductForSupplier(id_user, start, limit);
        if (!allProduct) {
            return res.status(403).json({
                position: "getAllProduct",
                msg: "The user does not have permission to access this resource"
            });
        }
        allProduct = productHelper.formatProductsFromDb(allProduct);
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully.',
            data: { allProduct }
        });

    } catch (err) {
        res.status(500).json({
            msg: 'Get internal server error in get all product',
        });
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId) || productId < 0) {
            return res.status(400).json({
                position: 'Product id',
                msg: 'Invalid product id format'
            });
        }
        const Product = await productService.getProductById(productId);
        if (!Product) {
            return res.status(404).json({
                position: "Product id",
                msg: "Product does not exist"
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
        res.status(500).json({
            msg: 'Get internal server error in get product',
        });
    }
};
export const createProduct = async (req, res, next) => {
    try {
        const __user = req.user;
        const id_user = req.user.id_user;
        const { name, location_map, time, quantity, age, description, id_location, city } = req.body;
        let product = {
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
        const { error } = productCreateValidate(product);
        if (error) {
            return res.status(400).json({
                msg: error.details[0].message
            })
        }
        const createProduct = await productService.create_Product(product);
        if (!createProduct) {
            if (__user.role === 'traveller' || __user.role === 'admin') {
                return res.status(403).json({
                    position: "Role not allowed",
                    msg: "The user does not have permission to update this resource"
                })
            }
            else {
                return res.status(500).json({
                    position: "Create product failed",
                    msg: "Product registration unsuccessful"
                });
            }
        }
        return res.sendStatus(200)
    } catch (err) {
        return res.status(500).json({
            msg: 'Get internal server error in get product',
        });
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const id_product = parseInt(req.params.id);
        const id_user = req.user.id_user;
        const { name, location_map, time, quantity, age, description, id_location, city } = req.body;
        const product = {
            name: name,
            id_user: id_user,
            location_map: location_map,
            time: time,
            quantity: quantity,
            age: age,
            description: description,
            id_location: id_location,
            city: city
        };
        const { error } = productUpdateValidate(product);
        if (error) {
            return res.status(400).json({
                msg: error.details[0].message
            })
        }
        const listIdProduct = await productService.getIdProductsByIdUser(id_user)
        if (listIdProduct.length === 0) {
            return res.status(404).json({
                position: "id product",
                msg: "You have no products"
            });
        } else if (listIdProduct.some(item => item.id_product === id_product)) {
            const updateProduct = await productService.updateProduct(id_product, product)
            return res.sendStatus(200)
        } else if (listIdProduct.some(item => item.id_product !== id_product)) {
            return res.status(404).json({
                position: "id product",
                msg: "You don't have this product yet"
            });
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Update Product error',
        });
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        let date = new Date();
        const id_user = req.user.id_user;
        const id_product = parseInt(req.params.id);
        const role = req.user.role;
        const time = Number(req.body.time);
        console.log("time ", time);
        const { error } = productDeleteValidate(time);
        if (error) {
            return res.status(400).json({
                msg: error.details[0].message
            })
        }
        let dataProduct;
        let time_delete = date.setHours(date.getHours() + time)

        if (role === "admin") {
            dataProduct = await productService.setStatusProduct(id_product, id_user, role, "warning", time_delete);
            if (!dataProduct) {
                return res.status(409).json({
                    position: "status",
                    msg: "status is already a warning, or must have an active status"
                })
            }
        } else if (role.includes("supplier")) {
            dataProduct = await productService.setStatusProduct(id_product, id_user, role, "waiting", time_delete);
            if (!dataProduct) {
                return res.status(409).json({
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
        return res.sendStatus(200)
    }
    catch (err) {
        res.status(500).json({
            msg: 'Delete Product error',
        });
    }
};

export const activeProduct = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        const id_product = parseInt(req.params.id);
        const role = req.user.role;
        const inactive_product = await productService.getInactiveProductsByIdProduct(id_product);
        if (inactive_product) {
            const dataProduct = await productService.setStatusProduct(id_product, id_user, role, "active");
                if (!dataProduct) {
                    return res.status(403).json({
                        position: "user role",
                        msg: "The user does not have sufficient rights to perform this task"
                    })
                }
            return res.sendStatus(200)
        } else {
            return res.status(409).json({
                position: "product id",
                msg: "Product is active"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            msg: 'Delete Product error',
        });
    }
}