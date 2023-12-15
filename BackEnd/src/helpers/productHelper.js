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
    product.user.tax_id_number = product.user.info_supplier[0].tax_id_number;
    product.departure = product.location.display_name;
    delete product.user.info_supplier;
    delete product.location;
    product.supplier = product.user;
    delete product.user;
    return product
};





