const express = require('express');
const router = express.Router();

import * as controller from '../controllers/productController';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as Role from '../common/constants';

router.get('/', controller.getAllProduct);
router.get('/:id', controller.getProductById);
router.get('/supplier', controller.getAllProductForSupplier);
router.get('/supplier/products',  authMiddleware.verifyToken,authMiddleware.checkSupplierRole, controller.getAllProductService);
router.post('/', authMiddleware.verifyToken, authMiddleware.checkSupplierRole, controller.createProduct);
router.put('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.updateProduct);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.deleteProduct);


module.exports = router;