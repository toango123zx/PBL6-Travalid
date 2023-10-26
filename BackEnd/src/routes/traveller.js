const express = require('express');

const { PrismaClient } = require('@prisma/client');

import * as authController from '../controllers/authController'
import * as authValidation from '../middleware/authValidation'

const travellerRouter = express.Router();

travellerRouter.post('/sign-up', authValidation.travellerSignUpValidation, authValidation.checkDuplicateUser, authController.travellerSignUp)

module.exports = travellerRouter;