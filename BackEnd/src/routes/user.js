const express = require('express');
const userRouter = express.Router();

import * as billController from '../controllers/billController';
import * as authMiddleware from '../middlewares/authMiddleware';

userRouter.get('/', authMiddleware.verifyToken, billController.getBills);
userRouter.get('/:id', authMiddleware.verifyToken, billController.getDetailBill);
userRouter.post('/', authMiddleware.verifyToken, billController.createBill);
userRouter.delete('/:id', authMiddleware.verifyToken, billController.cancelBill);

module.exports = userRouter;