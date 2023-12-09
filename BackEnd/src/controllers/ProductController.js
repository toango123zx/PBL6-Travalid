const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { productCreateValidation } = require('../validation/authValidation');
import * as envApp from '../config/envApp';
import * as productHelper from '../helpers/productHelper';
import * as productService from '../services/productService';
import * as scheduleProductService from '../services/scheduleProductService';
import * as discountService from '../services/discountService';

export const getAllProduct = async (req, res, next) => {
    try {
        let page = parseInt(req.query.page, 10);
        const limit = envApp.LimitGetProductTraveller;
        if (page < 0 || !!page == false) page = 1; // set default page

        let start = (page - 1) * limit;
        console.log("page : ", page, "limit :  ", limit)
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
        const product = await productService.getAllProductForSupplier(id_user, start, limit);
        const schedule = await scheduleProductService.getSchedulesProduct(undefined, id_user, 'travel_supplier', start, limit)
        const discount = await discountService.getDiscounts(id_user, start, limit)
        if (!product || !schedule || !discount) {
            return res.status(403).json({
                position: "getAllProduct",
                msg: "The user does not have permission to access this resource"
            });

        }
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
        if (page < 0 || !!page == false) page = 1; // set default page

        let start = (page - 1) * limit;
        console.log("page : ", page, "limit :  ", limit)
        let allProduct = await productService.getAllProductForSupplier();
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
            where: { id_product: productId }
        });
        if (!Product) {
            return res.status(403).json({
                position: "Detailed Product id",
                msg: "The user does not have permission to access this resource"
            });
        }
        res.status(200).json({
            status: 'success',
            msg: 'You have successfully.',
            data: Product,
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
        console.log('updateProduct')
        const id_product = parseInt(req.params.id);
        const id_user = req.user.id_user;
        console.log(id_user)
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
        const id_user = req.user.id_user;
        const id_product = parseInt(req.params.id);
        const role = req.user.role;
        let dataProduct;
        if (role === "admin") {
            dataProduct = await productService.setStatusProduct(id_product, id_user, role, "warning");
            if (!dataProduct) {
                return res.status(404).send({
                    position: "status",
                    msg: "status is already a warning, or must have an active status "
                })
            }
        } else if (role.includes("supplier")) {
            dataProduct = await productService.setStatusProduct(id_product, id_user, role, "waiting");
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