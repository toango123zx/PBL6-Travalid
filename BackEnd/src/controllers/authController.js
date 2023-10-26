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

export const signIn = async (req, res, next) => {
    const __username = req.body.username.replace(/\s/g, '');;
    const __password = req.body.password;
    const __user = await prisma.user.findFirst({
        select: {
            username: true,
            password: true,
            salt: true,
            role: true,
            email: true,
            status: true
        },
        where: {
            username: __username,
            NOT: {
                role: "traveller",
                status: "inactive"
            }
        }
    })

    if (__user === null) {
        return res.status(404).json({
            position: "username",
            msg: "username does not exist"
        });
    }

    console.log(typeof (hash.comparePassword(__user.password, __user.salt, __password)))
    if (!(hash.comparePassword(__user.password, __user.salt, __password))) {
        return res.status(401).json({
            position: "password",
            msg: "Invalid password",
        });
    }

    __user['token'] = __user.password;

    delete __user.password;
    delete __user.salt;

    return res.status(200).json({
        data: __user,
    });
}