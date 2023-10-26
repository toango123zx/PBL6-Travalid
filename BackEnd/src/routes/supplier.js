const express = require('express');

const { PrismaClient } = require('@prisma/client');

import * as authController from '../controllers/authController'
import * as authValidation from '../middleware/authValidation'

const supplierRouter = express.Router();

supplierRouter.post('/sign-up', authValidation.supplierSignUpValidation, authValidation.checkDuplicateUser, authController.supplierSignUp)
supplierRouter.post('/sign-in', authController.signIn)

module.exports = supplierRouter;