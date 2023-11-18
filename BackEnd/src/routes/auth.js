const express = require('express');

import * as authController from '../controllers/authController';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as authValidation from '../validation/authValidation';

const authRouter = express.Router();

authRouter.post('/sign-up/admin', authMiddleware.verifyToken, authValidation.adminSignUpValidation, authValidation.checkDuplicateUser, authMiddleware.createUser,  authController.adminSignUp);
authRouter.post('/sign-up/supplier', authValidation.supplierSignUpValidation, authValidation.checkDuplicateUser, authMiddleware.createUser, authController.supplierSignUp);
authRouter.post('/sign-up/traveller', authValidation.userSignUpValidation, authValidation.checkDuplicateUser, authMiddleware.createUser,  authController.travellerSignUp);
authRouter.post('/sign-in', authController.signIn);
authRouter.put('/refresh-token', authController.refreshSignInToken);

module.exports = authRouter;