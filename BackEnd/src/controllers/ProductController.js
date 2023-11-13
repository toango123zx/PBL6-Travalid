const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const show = async (req, res, next) => {
    console.log("123")
    res.send({
        data: "show"
    })
}
export const getAllProduct = async (req, res, next) => {
    try {
        const allProduct = await prisma.product.findMany();
        res.status(200).send({
            status: 'success',
            msg: 'You have successfully.',
            data: allProduct,
        });
    } catch (err) {
        console.error('getAllProduct: ', err);
        res.status(500).send({
            msg: 'Get internal server error in get all product',
        });
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const userId = parseInt(req.query.userId);
        const Product = await prisma.product.findUnique({
            where: { id_product: userId }
        });
        res.status(200).send({
            status: 'success',
            msg: 'You have successfully.',
            data: Product,
        });
    } catch (err) {
        console.error('getProductById: ', err);
        res.status(500).send({
            msg: 'Get internal server error in get product',
        });
    }
};
export const createProduct = async (req, res, next) => {
    try {
        const { name, id_user, location_map, time, quantity, age, description, id_location } = req.body;
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
            }
        });
        res.status(200).send({
            status: 'success',
            msg: 'You have successfully.',
            data: createProduct,
        });
    } catch (err) {
        console.error('createProduct: ', err);
        res.status(500).send({
            msg: 'Get internal server error in get product',
        });
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const id_product = parseInt(req.query.id_product);
        const { name, id_user, location_map, time, quantity, age, description, id_location } = req.body;
        const updateProduct = await prisma.product.update({
            where: {
                id_product: id_product
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
            }
        });
        res.status(200).send({
            status: 'success',
            msg: 'You have successfully.',
            data: updateProduct,
        });
    } catch (err) {
        console.error('updateProduct: ', err);
        res.status(500).send({
            msg: 'Update Product error',
        });
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const id_product = parseInt(req.query.id_product);
        const deleteRates = await prisma.rate.deleteMany({
            where: {
                id_product: id_product
            }
          });
        const deleteProduct = await prisma.product.delete({
            where: {
                id_product: id_product
            },
        });
        res.status(200).send({
            status: 'success',
            msg: 'You have successfully.',
            data: deleteProduct,
        });
    } catch (err) {
        console.error('deleteProduct: ', err);
        res.status(500).send({
            msg: 'Delete erorr',
        });
    }
};

