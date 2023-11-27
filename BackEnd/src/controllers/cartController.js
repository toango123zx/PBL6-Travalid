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