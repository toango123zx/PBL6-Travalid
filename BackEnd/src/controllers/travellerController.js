const { PrismaClient } = require('@prisma/client');
var bodyParser = require('body-parser');
import * as hash from '../helpers/hash';

const prisma = new PrismaClient();

export const creteUser = async (req) => {
    const __user = {
        username: req.username.replace(/\s/g, ''),
        password: "",
        name: req.name,
        email: req.email,
        gender: Boolean(req.gender),
        date_of_birth: new Date(req.date_of_birth),
        phone_number: req.phone_number,
        address: req.address,
        salt: ""
    }
    if (req.role && !(req.role === "traveller")) {
        __user.role = req.role
    }

    const { __salt, __hashedPassword } = hash.hashPassword(req.password);

    __user.salt = __salt;
    __user.password = __hashedPassword;
    
    try {
        await prisma.user.create({
            data: __user
        })
    }
    catch (e) {
        return false;
    }

    return true;
}

export const deleteUser = async (username) => {
    try {
        await prisma.user.delete({
            where: {
                username: username
            }
        })
    } catch (e) {
        return false;
    }
    
    return true;
}