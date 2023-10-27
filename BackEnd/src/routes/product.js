const express = require('express');
const router = express.Router();

import * as controller from '../controllers/ProductController';
import { checkRole } from '../middlewares/CheckRole';
import  * as Role from '../common/constants';

router.get('/',checkRole(Role.role) ,controller.show);
router.get('/getAllProduct',controller.getAllProduct);
router.get('/getProductById',controller.getProductById);
router.post('/createProduct',controller.createProduct);
router.put('/updateProduct',controller.updateProduct);
router.delete('/deleteProduct',controller.deleteProduct);


module.exports = router;