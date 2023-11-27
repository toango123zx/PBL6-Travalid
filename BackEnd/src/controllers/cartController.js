import * as cartService from '../services/cartService';
import * as scheduleProductService from '../services/scheduleProductService';
import * as cartHelper from '../helpers/cartHelper';

export const getCart = async (req, res) => {
    const __user = req.user;
    let cart = await cartService.getCarts(__user.id_user);
    cart = cartHelper.formatCartFormDb(cart);
    return res.status(200).json({
        user: __user,
        data: cart
    });
};

/** Create cart
 * Check if the product schedule is available
 * Check if the product schedule exists in the shopping cart 
 */

export const createCart = async (req, res) => {
    const __user = req.user;
    let __cart = {
        id_user: Number(__user.id_user),
        id_schedule_product: Number(req.body.id_schedule_product)
    };
    if (await cartService.getCartByIdSchedule(__cart.id_schedule_product, __user.id_user)) {
        return res.status(409).json({
            position: "Error: Product Schedule id",
            msg: "The product schedule id already exists in the cart"
        });
    };

    const __schedule_poruduct = await scheduleProductService.getScheduleProduct(__cart.id_schedule_product);
    if (!__schedule_poruduct) {
        return res.status(403).json({
            position: "Error: Create cart prisma in id schedule product",
            msg: `This product schedule ID ${__cart.id_schedule_product} has started, the task cannot be performed with this product schedule ID`
        });
    };

    __cart.product_name = __schedule_poruduct.product.name;
    __cart.city_name = __schedule_poruduct.product.city;

    if (!await cartService.createCart(__cart)) {
        return res.status(500).json({
            position: "Error: Creating new product calendar in shopping cart using Prisma",
            msg: "Error from the server",
            data: __cart
        });
    };

    return res.sendStatus(200);
};