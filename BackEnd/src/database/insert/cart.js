const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const insertDataCart = async () => {
    await prisma.cart.createMany({
        data: [
            {
                id_user: 2
            }
        ]
    })
    
    await prisma.info_Cart.createMany({
        data: [
            {
                id_cart: 1,
                id_schedule_product: 4,
            },
            {
                id_cart: 1,
                id_schedule_product: 4,
            }
        ]
    })
}

module.exports = {
    insertDataCart
}