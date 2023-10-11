const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const insertDataProduct = async () => {
    await prisma.product.createMany({
        data: [
            {
                name: 'Núi Bà Nà',
                id_user: 3,
                location_map: '123123',
                time: 7.5,
                quantity: 20,
                age: 6,
                description: "Đây là chuyến du lịch đầy thú vị nhaa",
                id_location: 1,
            },
            {
                name: 'Ngũ Hành Sơn',
                id_user: 2,
                location_map: '123124',
                time: 2.5,
                quantity: 20,
                age: 6,
                description: "Đây là chuyến du lịch đầy thú vị nhaa",
                id_location: 1,
            }
        ]
    })

    await prisma.schedule_Product.createMany({
        data: [
            {
                id_product: 1,
                start_time: new Date('2023-10-21 06:00'),
                end_time: new Date('2023-10-22 20:00'),
                price: 1000000,
            },
            {
                id_product: 1,
                start_time: new Date('2023-10-20 06:00'),
                end_time: new Date('2023-10-21 20:00'),
                price: 1500000,
            },
            {
                id_product: 1,
                start_time: new Date('2023-10-19 06:00'),
                end_time: new Date('2023-10-20 20:00'),
                price: 1800000,
            },
            {
                id_product: 2,
                start_time: new Date('2023-10-20 06:00'),
                end_time: new Date('2023-10-21 20:00'),
                price: 120000,
            },
            {
                id_product: 2,
                start_time: new Date('2023-10-23 06:00'),
                end_time: new Date('2023-10-23 08:00'),
                price: 100000,
            }
        ]
    })

    await prisma.discount.createMany({
        data: [
            {
                id_user: 3,
                id_product: 1,
                start_time: new Date('2023-10-15 06:00'),
                end_time: new Date('2023-10-18 20:00'),
                value: 20,
                count: 20,
                point: 0,
            },
            {
                id_user: 3,
                id_product: 2,
                start_time: new Date('2023-10-15 06:00'),
                end_time: new Date('2023-10-18 20:00'),
                value: 30,
                count: 10,
                point: 0
            }

        ]
    })
}

module.exports = {
    insertDataProduct
}