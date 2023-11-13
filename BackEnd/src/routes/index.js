
const siteRouter = require('./site')
const productRouter = require('./product')

function route(app) {
    app.use('/', siteRouter);
    app.use('/product', productRouter);
}

module.exports = route;