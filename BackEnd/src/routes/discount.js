const express = require('express');
const discountRouter = express.Router();

import * as discountController from '../controllers/discountController';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as discountValidation from '../validation/discountValidation';

discountRouter.get('/all', discountValidation.checkPage, discountController.getDiscountsForTraveller);
discountRouter.get('/', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, discountValidation.checkPage, discountController.getDiscountsForSupplier);
discountRouter.get('/:id', discountController.getDetailDiscount);
discountRouter.get('/product/:id', discountController.getDiscountByProduct);
discountRouter.post('/', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, discountValidation.createDiscountValidation, discountController.createDiscount);
discountRouter.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, discountController.cancelDiscount);

module.exports = discountRouter;