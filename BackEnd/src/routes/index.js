const siteRouter = require('./site');
const travellerRouter = require('./traveller');
const supplierRouter = require('./supplier');
const productRouter = require('./product')

function route(app) {
    app.use('/', siteRouter);
    app.use('/traveller', travellerRouter);
    app.use('/supplier', supplierRouter);
    app.use('/product', productRouter);
}

module.exports = route;