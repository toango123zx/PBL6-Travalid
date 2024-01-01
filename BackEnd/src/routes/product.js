const express = require('express');
const router = express.Router();

import * as controller from '../controllers/productController';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as Role from '../common/constants';

router.get('/', controller.getAllProduct);
router.get('/supplier', authMiddleware.verifyToken, authMiddleware.checkSupplierRole, controller.getAllProductForSupplier);
router.get('/supplier/products', authMiddleware.verifyToken, authMiddleware.checkSupplierRole, controller.getAllProductService);
router.post('/', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.createProduct);
router.get('/:id', controller.getProductById);
router.put('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.updateProduct);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.deleteProduct);
router.patch('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.activeProduct);


module.exports = router;