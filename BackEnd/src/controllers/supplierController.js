const { PrismaClient } = require('@prisma/client');
var bodyParser = require('body-parser');
import * as hash from '../helpers/hash';
import * as envSupplier from '../config/envSupplier'
import * as travellerController from '../controllers/travellerController'

const prisma = new PrismaClient();

export const creteInfoSupplier = async (req) => {
    const __user = await prisma.user.findFirst({
        select: {
            id_user: true,
            username: true
        },
        where: {
            username: req.username
        }
    });

    const __info_supplier = {
        id_user: __user.id_user,
        tax_id_number: req.tax_id_number,
        fee: envSupplier.fee
    }

    try {
        await prisma.info_Supplier.create({
            data: __info_supplier,
        })
    }
    catch (e) {
        return false;
    }

    return true;
}