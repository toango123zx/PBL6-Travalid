const express = require('express');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

import * as userController from '../controllers/userController';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as authValidation from '../validation/authValidation';

const userRouter = express.Router();

userRouter.get('/', authMiddleware.verifyToken, authMiddleware.checkAdminRole, userController.getUsers);
userRouter.get('/me', authMiddleware.verifyToken, userController.getMyProfile);
userRouter.get('/:id', authMiddleware.verifyToken, authMiddleware.checkAdminRole, userController.getUser);
userRouter.put('/', authMiddleware.verifyToken, authValidation.userUpdateValidation, userController.updateMyProfile);
userRouter.patch('/password', authMiddleware.verifyToken, userController.updateUserPassword);
userRouter.patch('/avata', authMiddleware.verifyToken, upload.single('file'), userController.updateUserImage);

module.exports = userRouter;