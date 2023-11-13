const express = require('express');

import * as authController from '../controllers/authController';

const authRouter = express.Router();

authRouter.post('/sign-in', authController.signIn);

module.exports = authRouter;