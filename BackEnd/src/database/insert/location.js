const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const insertDataLocation = async () => {
    await prisma.location.createMany({
        data: [
            {
                system_name: 'BaNaHill',
                display_name: 'Bà Nà Hill',
                id_city: 1
            },
            {
                system_name: "NguHanhSonMountains",
                display_name: "Núi Ngũ Hành Sơn",
                id_city: 1,
            },
            {
                system_name: "HoiAnOldQuarter",
                display_name: "Phố Cổ Hội An",
                id_city: 3,
            },
            {
                system_name: "TheAncientCapitalOfHue",
                display_name: "Cố Đô Huế",
                id_city: 2
            },
            {
                system_name: "KhaiDinhMausoleum",
                display_name: "Lăng Khải Định",
                id_city: 2
            }
        ]
    })
}

module.exports = {
    insertDataLocation
}