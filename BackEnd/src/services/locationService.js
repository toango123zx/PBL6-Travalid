import { prisma } from "../config/prismaDatabase";

export const getLoactions = async (id_product, start, limit) => {
    try {
        return await prisma.location.findMany({
            select: {
                display_name: true,
                id_location: true,
                city: {
                    select: {
                        name: true,
                    }
                }
            },
            orderBy: [
                {
                    city: {
                        name: 'asc',
                    }
                },
                {
                    display_name: 'asc',
                }]
        });
    } catch (error) {
        return false;
    };
};