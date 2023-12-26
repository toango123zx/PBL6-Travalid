const express = require('express');
const walletRouter = express.Router();

import * as authMiddleware from '../middlewares/authMiddleware';
import * as walletController from '../controllers/walletController';
import * as walletValidation from '../validation/walletValidation';
import * as pageValidation from '../validation/pageValidation';

walletRouter.get('/', authMiddleware.verifyToken, pageValidation.checkPageWallet, walletController.getTransactions);
walletRouter.post('/request-withdrawal', authMiddleware.verifyToken, walletValidation.createRequestWithdrawalValidation, walletController.createRequestWithdrawal);

module.exports = walletRouter;