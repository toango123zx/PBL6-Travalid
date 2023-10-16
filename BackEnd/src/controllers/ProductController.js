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
        console.log("getAllProduct");
        const userId = 1;
        const allProduct = await prisma.product.findMany();
        const formattedProductList = allProduct.map(product => {
            return {
                ...product,
                count_complete	: parseInt(product.id),
            };
        });

        res.status(200).send({
            status: 'success',
            msg: 'You have successfully.',
            data: formattedProductList,
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
        console.log("getProductById");
        const allProduct = await prisma.product.findUnique({
            where: { id_product : userId }
          });
        const formattedProductList =  {
                ...allProduct,
                count_complete	: parseInt(allProduct.id),
            };
        res.status(200).send({
            status: 'success',
            msg: 'You have successfully.', 
            data: formattedProductList,
        });
    } catch (err) {
        console.error('getProductById: ', err);
        res.status(500).send({
            msg: 'Get internal server error in get all product',
        });
    }
};
export const createProduct = async (req, res, next) => {
    // Some code here
}
export const updateProduct = async (req, res, next) => {
    // Some code here
}
export const deleteProduct = async (req, res, next) => {
    // Some code here
}

