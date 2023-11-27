const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const insertDataUser = async () => {
    await prisma.user.createMany({
        data: [
            {
                username: 'admin',
                // password = "admin"
                password: "e67aea41a82deac1bc8ac813931cd81eb945237e5565d0137b1b58848df3c104b09871b1e10fcf33a4b28d9105c75e700053d9a9aed8c9d501c8db61993aded6",
                role: "admin",
                name: 'admin',
                email: "admin@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "97f1408723bb64a52bf3326a47b4e0a5",
            },
            {
                username: 'traveller',
                // password = "traveller"
                password: '2be95efc72cbffe5f0a8e15898d2490f42f99d524084529eeaaa5bf94bf18e9201a9cf2aa7c7900c119860eb9fe60b65b789ea4c47f7a8e81f82623c4591cc58',
                name: 'traveller',
                email: "traveller@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "7e7b253524395ac70aa73e24afba2543",
            },
            {
                username: 'traveller1',
                // password = "traveller"
                password: '2be95efc72cbffe5f0a8e15898d2490f42f99d524084529eeaaa5bf94bf18e9201a9cf2aa7c7900c119860eb9fe60b65b789ea4c47f7a8e81f82623c4591cc58',
                name: 'traveller',
                email: "traveller1@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "7e7b253524395ac70aa73e24afba2543",
            },
            {
                username: 'traveller2',
                // password = "traveller"
                password: '2be95efc72cbffe5f0a8e15898d2490f42f99d524084529eeaaa5bf94bf18e9201a9cf2aa7c7900c119860eb9fe60b65b789ea4c47f7a8e81f82623c4591cc58',
                name: 'traveller',
                email: "traveller2@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "7e7b253524395ac70aa73e24afba2543",
            },
            {
                username: 'traveller3',
                // password = "traveller"
                password: '2be95efc72cbffe5f0a8e15898d2490f42f99d524084529eeaaa5bf94bf18e9201a9cf2aa7c7900c119860eb9fe60b65b789ea4c47f7a8e81f82623c4591cc58',
                name: 'traveller',
                email: "traveller3@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "7e7b253524395ac70aa73e24afba2543",
            },
            {
                username: 'traveller4',
                // password = "traveller"
                password: '2be95efc72cbffe5f0a8e15898d2490f42f99d524084529eeaaa5bf94bf18e9201a9cf2aa7c7900c119860eb9fe60b65b789ea4c47f7a8e81f82623c4591cc58',
                name: 'traveller',
                email: "traveller4@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "7e7b253524395ac70aa73e24afba2543",
            },
            {
                username: 'traveller5',
                // password = "traveller"
                password: '2be95efc72cbffe5f0a8e15898d2490f42f99d524084529eeaaa5bf94bf18e9201a9cf2aa7c7900c119860eb9fe60b65b789ea4c47f7a8e81f82623c4591cc58',
                name: 'traveller',
                email: "traveller5@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "7e7b253524395ac70aa73e24afba2543",
            },
            {
                username: 'travel_supplier',
                // password = 'travel_supplier'
                password: 'ebae9fdc8a1a2bbbc359cf972016d13fc3b1fb7d9f090e728b2a7aff2daf0bf384b6f3540a4cf2a6157d1102934f79017d55643d9d9dae175a0591ab9f50ecb7',
                role: "travel_supplier",
                name: 'travel_supplier',
                email: "travel_supplier@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "f8048cdc4a77db5b719d975e2ac590e2", 
            },
            {
                username: 'travel_supplier1',
                // password = 'travel_supplier'
                password: 'ebae9fdc8a1a2bbbc359cf972016d13fc3b1fb7d9f090e728b2a7aff2daf0bf384b6f3540a4cf2a6157d1102934f79017d55643d9d9dae175a0591ab9f50ecb7',
                role: "travel_supplier",
                name: 'travel_supplier',
                email: "travel_supplier1@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "f8048cdc4a77db5b719d975e2ac590e2", 
            },
            {
                username: 'travel_supplier2',
                // password = 'travel_supplier'
                password: 'ebae9fdc8a1a2bbbc359cf972016d13fc3b1fb7d9f090e728b2a7aff2daf0bf384b6f3540a4cf2a6157d1102934f79017d55643d9d9dae175a0591ab9f50ecb7',
                role: "travel_supplier",
                name: 'travel_supplier',
                email: "travel_supplier2@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "f8048cdc4a77db5b719d975e2ac590e2", 
            },
            {
                username: 'travel_supplier3',
                // password = 'travel_supplier'
                password: 'ebae9fdc8a1a2bbbc359cf972016d13fc3b1fb7d9f090e728b2a7aff2daf0bf384b6f3540a4cf2a6157d1102934f79017d55643d9d9dae175a0591ab9f50ecb7',
                role: "travel_supplier",
                name: 'travel_supplier',
                email: "travel_supplier3@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "f8048cdc4a77db5b719d975e2ac590e2", 
            },
            {
                username: 'travel_supplier4',
                // password = 'travel_supplier'
                password: 'ebae9fdc8a1a2bbbc359cf972016d13fc3b1fb7d9f090e728b2a7aff2daf0bf384b6f3540a4cf2a6157d1102934f79017d55643d9d9dae175a0591ab9f50ecb7',
                role: "travel_supplier",
                name: 'travel_supplier',
                email: "travel_supplier4@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "f8048cdc4a77db5b719d975e2ac590e2", 
            },
            {
                username: 'travel_supplier5',
                // password = 'travel_supplier'
                password: 'ebae9fdc8a1a2bbbc359cf972016d13fc3b1fb7d9f090e728b2a7aff2daf0bf384b6f3540a4cf2a6157d1102934f79017d55643d9d9dae175a0591ab9f50ecb7',
                role: "travel_supplier",
                name: 'travel_supplier',
                email: "travel_supplier5@gmail.com",
                gender: true,
                date_of_birth: new Date('2002-07-11'),
                phone_number: '000000000',
                address: 'Hoa Khanh',
                salt: "f8048cdc4a77db5b719d975e2ac590e2", 
            },
        ]
    })
    
    await prisma.info_Supplier.createMany({
        data: [
            {
                id_user: 8,
                tax_id_number: '0000000000000',
                fee: 8
            },
            {
                id_user: 9,
                tax_id_number: '0000000000001',
                fee: 8
            },
            {
                id_user: 10,
                tax_id_number: '0000000000002',
                fee: 8
            },
            {
                id_user: 11,
                tax_id_number: '0000000000003',
                fee: 8
            },
            {
                id_user: 12,
                tax_id_number: '0000000000004',
                fee: 8
            },
            {
                id_user: 13,
                tax_id_number: '0000000000005',
                fee: 8
            }
        ]
    })
}

module.exports = {
    insertDataUser
}