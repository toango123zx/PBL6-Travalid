const express = require('express');
const cartRouter = express.Router();

import * as cartController from '../controllers/cartController';
import * as authMiddleware from '../middlewares/authMiddleware';

cartRouter.get('/', authMiddleware.verifyToken, cartController.getCart);
cartRouter.post('/', authMiddleware.verifyToken, cartController.createCart);

module.exports = cartRouter;