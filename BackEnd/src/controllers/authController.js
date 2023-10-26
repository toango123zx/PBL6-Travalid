const { PrismaClient } = require('@prisma/client');
var bodyParser = require('body-parser');
import * as hash from '../helpers/hash';
import * as travellerController from '../controllers/travellerController'

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