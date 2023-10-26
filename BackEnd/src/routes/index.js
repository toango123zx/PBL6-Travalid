
const { PrismaClient } = require('@prisma/client');

const siteRouter = require('./site');
const travellerRouter = require('./traveller');
const supplierRouter = require('./supplier');

function route(app) {
    app.use('/', siteRouter);
    app.use('/traveller', travellerRouter);
    app.use('/supplier', supplierRouter)
}

module.exports = route;