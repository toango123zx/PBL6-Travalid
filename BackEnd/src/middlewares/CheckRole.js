const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
export const checkRole = (roles) => {
    try {
        return async (req, res, next) => {
            const userId = 1; // Ví dụ: userId
            const _user = await prisma.user.findUnique({
                where: { id_user: userId }
            });
            if (roles.includes(_user?.role)) {
                next();
            } else {
                res.status(401).send({ msg: "You don't have permission to access data." });
            }
        };
    } catch (error) {
        console.log(error);
    }
};