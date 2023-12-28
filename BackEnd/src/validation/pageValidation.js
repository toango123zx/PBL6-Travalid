import * as envApp from '../config/envApp';

export const checkPageWallet = (req, res, next) => {
    let __page = Number(req.query.page);
    if (!__page) {
        __page = 1;
    };
    
    req.start = (__page - 1) * envApp.LimitGetTransaction;
    next();
}