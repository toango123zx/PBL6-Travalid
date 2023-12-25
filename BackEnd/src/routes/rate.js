const express = require('express');
const router = express.Router();

import * as controller from '../controllers/rateController';
import * as authMiddleware from '../middlewares/authMiddleware';

router.post('/:id', authMiddleware.verifyToken,authMiddleware.checkTravellerRole,  controller.createRate);
router.delete('/:id', authMiddleware.verifyToken,authMiddleware.checkAdminRole, controller.deleteRate);
router.get('/:id', controller.getAllRate);

module.exports = router;