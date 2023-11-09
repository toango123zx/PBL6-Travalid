const express = require('express');
const discountRouter = express.Router();

import * as discountController from '../controllers/discountController';

discountRouter.get('/all', discountController.getAllDiscount);

module.exports = discountRouter;