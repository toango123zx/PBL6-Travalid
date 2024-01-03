const { prisma } = require('../config/prismaDatabase');
import * as envApp from '../config/envApp';


export const getLocations = async () => {
    try {
        const _locations =  await prisma.location.findMany({
            select: {
                id_location: true,
                system_name: true,
                display_name: true,
                city: true
            }
        });
        return _locations;
    } catch (e) {
        return false;
    };
};

export const getLocationByID = async (id_location) => {
    try {
        const _locations =  await prisma.location.findMany({
            select: {
                id_location: true,
                system_name: true,
                display_name: true,
                city: true
            },
            where: {
                id_location: Number(id_location),
            }

        });
        return _locations;
    } catch (e) {
        return false;
    };
};