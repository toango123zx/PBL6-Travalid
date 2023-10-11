const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();

const insertData = async () => {
    console.log("hihi")
    const users = await prisma.user.findUnique({
        where: {
            id_user: 1,
        }
    })
    console.log(users);
}

insertData()
    .then(async () => {
        prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(`error prisma insert Data: ${e}`);
        prisma.$disconnect
    })
