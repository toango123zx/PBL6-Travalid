const express = require('express');

import * as userController from '../controllers/userController';
import * as authMiddleware from '../middlewares/authMiddleware';

const userRouter = express.Router();

userRouter.get('/', authMiddleware.verifyToken, authMiddleware.checkAdminRole, userController.getUsers);
userRouter.get('/:id', authMiddleware.verifyToken, authMiddleware.checkAdminRole, userController.getUser);

module.exports = userRouter;