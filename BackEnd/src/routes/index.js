const authRouter = require('./auth');
const productRouter = require('./product');

function route(app) {
    app.use('/', authRouter);
    app.use('/product', productRouter);
    app.use('/supplier', supplierRouter)
}

module.exports = route;