const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const insertDataRate = async () => {
    await prisma.rate.createMany({
        data: [
            {
                id_product: 1,
                id_user: 2,
                comment: "Very Good",
                star: 5,
            }
        ]
    })
}

module.exports = {
    insertDataRate
}