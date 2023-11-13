const authRouter = require('./auth');
const productRouter = require('./product');
const discountRouter = require ('./discount');

function route(app) {
    app.use('/', authRouter);
    app.use('/product', productRouter);
    app.use('/discount', discountRouter);
}

module.exports = route;