const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

const insertDataContact = async () => {
    await prisma.contact.createMany({
        data: [
            {
                id_user_call: 2,
            }
        ]
    });

    await prisma.info_Contact.createMany({
        data: [
            {
                id_contact: 1,
                id_user_listen: 3,
                message: "Hello"
            },

        ]
    })
}

module.exports = {
    insertDataContact
}