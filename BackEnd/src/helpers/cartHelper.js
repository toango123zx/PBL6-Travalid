export const formatCartFormDb = (cart) => {
    cart = cart.map((scheduleProduct) => {
        scheduleProduct = {
            ... scheduleProduct,
            ... scheduleProduct.schedule_poruduct,
            ... scheduleProduct.schedule_poruduct.product
        };
        delete scheduleProduct.schedule_poruduct;
        delete scheduleProduct.product;
        return scheduleProduct;
    });

    return cart;
};