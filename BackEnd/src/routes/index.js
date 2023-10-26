
const { PrismaClient } = require('@prisma/client');

const siteRouter = require('./site');
const travellerRouter = require('./traveller');

function route(app) {
    app.use('/', siteRouter);
    app.use('/traveller', travellerRouter);
}

module.exports = route;