const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const insertDataUser = async () => {
    await prisma.user.createMany({
        data: [
            {
                username: 'admin',
                password: 'admin',
                id_role: "admin",
                name: 'admin',
                email: "admin@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                point: 0,
                status: 'active',
            },
            {
                username: 'traveller',
                password: 'traveller',
                id_role: "traveller",
                name: 'traveller',
                email: "traveller@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                point: 0,
                status: 'active',
            },
            {
                username: 'travel_supplier',
                password: 'travel_supplier',
                id_role: "travel_supplier",
                name: 'travel_supplier',
                email: "travel_supplier@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                point: 0,
                status: 'active',
            }
        ]
    })
    await prisma.info_Supplier.createMany({
        data: [
            {
                id_user: 3,
                tax_id_number: '0000000000000',
                fee: 8
            }
        ]
    })
}

module.exports = {
    insertDataUser
}