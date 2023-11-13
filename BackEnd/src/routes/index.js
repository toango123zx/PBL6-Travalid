const authRouter = require('./auth');
const productRouter = require('./product');

function route(app) {
    app.use('/', authRouter);
    app.use('/product', productRouter);
}

module.exports = route;