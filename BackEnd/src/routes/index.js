const authRouter = require('./auth');
const productRouter = require('./product');
const billRouter = require('./bill');
const cartRouter = require ('./cart');
const discountRouter = require ('./discount');

function route(app) {
    app.use('/', authRouter);
    app.use('/product', productRouter);
    app.use('/discount', discountRouter);
    app.use('/cart',cartRouter)
    app.use('/bill', billRouter);
}

module.exports = route;