const express = require('express');
const discountRouter = express.Router();

import * as discountController from '../controllers/discountController';
import * as authMiddleware from '../middlewares/authMiddleware';

discountRouter.get('/all', discountController.getAllDiscount);
discountRouter.get('/', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, discountController.getDiscounts);
discountRouter.get('/:id', discountController.getDetailDiscount);

module.exports = discountRouter;