const authRouter = require('./auth');
const productRouter = require('./product');
const billRouter = require('./bill');
const cartRouter = require ('./cart');
const discountRouter = require ('./discount');
const userRouter = require ('./user');
const walletRouter = require ('./wallet');
const scheduleProductRouter = require ('./scheduleProduct');
const locationRouter = require ('./location');

function route(app) {
    app.use('/', authRouter);
    app.use('/schedule_product', scheduleProductRouter);
    app.use('/user', userRouter);
    app.use('/product', productRouter);
    app.use('/discount', discountRouter);
    app.use('/cart',cartRouter)
    app.use('/bill', billRouter);
    app.use('/wallet', walletRouter);
    app.use('/location', locationRouter);
}

module.exports = route;