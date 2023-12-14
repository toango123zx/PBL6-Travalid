export const formatProductsFromDb = (products) => {
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


export const formatProductFromDb = (product) => {

    let __product = {
        ...product,
        ...product.location,
    }
    __product.user.tax_id_number = __product.user.info_supplier[0].tax_id_number;
    delete __product.user.info_supplier;
    delete __product.location;
    __product.supplier = __product.user;
    delete __product.user;
    return __product;
};





