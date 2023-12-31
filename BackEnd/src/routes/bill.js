const express = require('express');
const billRouter = express.Router();

import * as billController from '../controllers/billController';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as billValidation from '../validation/billValidation';

billRouter.get('/purchase', authMiddleware.verifyToken, billValidation.checkPage, billController.getPurchaseBills);
billRouter.get('/sell', authMiddleware.verifyToken,  billValidation.checkPage, authMiddleware.checkSupplierRole, billController.getSellBills);
billRouter.get('/:id', authMiddleware.verifyToken, billController.getDetailBill);
billRouter.post('/', authMiddleware.verifyToken, billValidation.createBillValidation, billController.createBill);
billRouter.patch('/payment/:id', authMiddleware.verifyToken, billController.payBill);
billRouter.delete('/:id', authMiddleware.verifyToken, billController.cancelBill);

module.exports = billRouter;