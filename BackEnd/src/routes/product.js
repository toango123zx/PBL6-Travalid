const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

import * as controller from '../controllers/ProductController';
import { checkRole } from '../middlewares/CheckRole';
import  * as Role from '../common/constants';

router.get('/',checkRole(Role.role) ,controller.show);
router.get('/getAllProduct',controller.getAllProduct);
router.get('/getProductById',controller.getProductById);

module.exports = router;