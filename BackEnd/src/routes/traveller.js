const express = require('express');
const travellerRouter = express.Router();

import * as authController from '../controllers/authController';
import * as authValidation from '../middlewares/authValidation';

travellerRouter.post('/sign-up', authValidation.travellerSignUpValidation, authValidation.checkDuplicateUser, authController.travellerSignUp);
travellerRouter.post('/sign-in', authController.signIn);

module.exports = travellerRouter;