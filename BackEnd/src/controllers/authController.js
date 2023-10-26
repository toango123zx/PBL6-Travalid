const { PrismaClient } = require('@prisma/client');
var bodyParser = require('body-parser');
import * as hash from '../helpers/hash';
import * as envSupplier from '../config/envSupplier'
import * as travellerController from '../controllers/travellerController'
import * as supplierController from '../controllers/supplierController'

const prisma = new PrismaClient();

export const travellerSignUp = async (req, res, next) => {
    if (! await travellerController.creteUser(req.body)) {
        return res.status(500).json({
            position: "insert prisma",
            msg: "Unable to add user table data to the database",
        });
    }

    return res.sendStatus(200);
}

export const supplierSignUp = (travellerSignUp, async (req, res, next) => {
    if (! await travellerController.creteUser(req.body)) {
        return res.status(500).json({
            position: "insert prisma",
            msg: "Unable to add user table data to the database",
        });
    }
    if (! await supplierController.creteInfoSupplier(req.body)) {
        await travellerController.deleteUser(req.body.username);
        return res.status(409).json({
            position: "tax_id_number",
            msg: "already exist",
        });
    }

    return res.sendStatus(200);
})