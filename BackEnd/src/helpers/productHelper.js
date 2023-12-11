export const formatProductFormDb = (products) => {
    products = products.map((product) => {
        product = {
            ...product,
            ...product.location,
        };
        delete product.location;
        return product;
    });

    return products;
};

