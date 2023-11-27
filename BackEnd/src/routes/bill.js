const express = require('express');
const billRouter = express.Router();

import * as billController from '../controllers/billController';
// import * as billMiddleware from '../middlewares/billMiddleware';
import * as authMiddleware from '../middlewares/authMiddleware';

billRouter.get('/purchase', authMiddleware.verifyToken, billController.getPurchaseBills)
billRouter.get('/:id', authMiddleware.verifyToken, billController.getDetailBill);
billRouter.post('/', authMiddleware.verifyToken, billController.createBill);
billRouter.delete('/:id', authMiddleware.verifyToken, billController.cancelBill);

module.exports = billRouter;