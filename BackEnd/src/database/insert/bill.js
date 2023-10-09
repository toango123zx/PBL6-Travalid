const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const insertDataBill = async () => {
    await prisma.bill.createMany({
        data: [
            {
                id_user: 2,
                quantity: 4,
                id_discount: 1,
                status: 'paiding'
            }
        ]
    })
    
    await prisma.info_bill.createMany({
        data: [
            {
                id_bill: 1,
                id_schedule_product: 4,
            },
            {
                id_bill: 1,
                id_schedule_product: 4,
            }
        ]
    })
}

module.exports = {
    insertDataBill
}