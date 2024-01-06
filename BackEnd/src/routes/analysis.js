const express = require('express');
const router = express.Router();

import * as controller from '../controllers/analysisController';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as Role from '../common/constants';

router.get('/admin/revenue', authMiddleware.verifyToken, authMiddleware.checkAdminRole, controller.getTotalRevenueforAdmin);
router.get('/admin/discount', authMiddleware.verifyToken, authMiddleware.checkAdminRole, controller.getActiveDiscountsCountforAdmin);
router.get('/admin/product_location', authMiddleware.verifyToken, authMiddleware.checkAdminRole, controller.getProductCountByLocationforAdmin);
router.get('/admin/product_by_time', authMiddleware.verifyToken, authMiddleware.checkAdminRole, controller.getCompletedCustomersCountByTimeforAdmin);
router.get('/supplier/revenue', authMiddleware.verifyToken, authMiddleware.checkSupplierRole, controller.getTotalRevenueforSupplier);
router.get('/supplier/discount', authMiddleware.verifyToken, authMiddleware.checkSupplierRole, controller.getActiveDiscountsCountforSupplier);
router.get('/supplier/product_location', authMiddleware.verifyToken, authMiddleware.checkSupplierRole, controller.getProductCountByLocationforSupplier);
router.get('/supplier/product_by_time', authMiddleware.verifyToken, authMiddleware.checkSupplierRole, controller.getCompletedCustomersCountByTimeforSupplier);

module.exports = router;