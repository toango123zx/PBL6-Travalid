const express = require('express');
const supplierRouter = express.Router();

import * as authController from '../controllers/authController';
import * as authValidation from '../middlewares/authValidation';

supplierRouter.post('/sign-up', authValidation.supplierSignUpValidation, authValidation.checkDuplicateUser, authController.supplierSignUp);
supplierRouter.post('/sign-in', authController.signIn);

module.exports = supplierRouter;