import { Schedule_Product_Status } from "@prisma/client";

export const formatCartFormDb = (cart) => {
    cart = cart.map((scheduleProduct) => {
        scheduleProduct = {
            ... scheduleProduct,
            ... scheduleProduct.schedule_poruduct,
        };
        delete scheduleProduct.schedule_poruduct;
        return scheduleProduct;
    });

    return cart;
};