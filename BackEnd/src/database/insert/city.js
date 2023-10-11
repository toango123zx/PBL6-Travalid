const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

const insertDataCity = async () => {
    await prisma.city.createMany({
        data: [
            {
                name: 'Đà Nẵng',
            },
            {
                name: 'Huế',
            },
            {
                name: 'Quảng Nam',
            },
            {
                name: 'Quảng Ngãi',
            },
        ],
    })
}

module.exports = {
    insertDataCity
}