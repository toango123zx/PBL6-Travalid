const { PrismaClient } = require('@prisma/client');

const { insertDataLocation } = require('./location');
const { insertDataCity } = require('./city');
const { insertDataUser } = require('./user');
const { insertDataProduct } = require('./product');
const { insertDataRate } = require('./rate');
const { insertDataContact } = require('./contact');
const { insertDataCart } = require('./cart');
const { insertDataBill } = require('./bill')

const prisma = new PrismaClient();

const insertData = async () => {
    await insertDataCity();
    await insertDataLocation();
    await insertDataUser();
    await insertDataProduct();
    // await insertDataRate();
    // await insertDataContact();
    // await insertDataCart();
    await insertDataBill();
}

insertData()
    .then(async () => {
        prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(`error prisma insert Data: ${e}`);
        prisma.$disconnect
    })
