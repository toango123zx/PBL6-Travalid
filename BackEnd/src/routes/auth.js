const express = require('express');

import * as authController from '../controllers/authController';
import { verifyToken } from '../helpers/authHelper';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as authValidation from '../validation/authValidation';

const authRouter = express.Router();

authRouter.post('/authenticate' , authController.chat)
authRouter.post('/sign-up/admin', authMiddleware.verifyToken, authValidation.adminSignUpValidation, authValidation.checkDuplicateUser, authMiddleware.createUser,  authController.adminSignUp);
authRouter.post('/sign-up/supplier', authValidation.supplierSignUpValidation, authValidation.checkDuplicateUser, authMiddleware.createUser, authController.supplierSignUp);
authRouter.post('/sign-up/traveller', authValidation.travellerSignUpValidation, authValidation.checkDuplicateUser, authMiddleware.createUser,  authController.travellerSignUp);
authRouter.post('/sign-in', authController.signIn);
authRouter.put('/refresh-token', authController.refreshSignInToken);
authRouter.post('/decode-jwt', authMiddleware.verifyToken, authController.decodeJWT)

module.exports = authRouter;