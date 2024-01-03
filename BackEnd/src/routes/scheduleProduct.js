const express = require('express');
const router = express.Router();

import * as controller from '../controllers/scheduleController';
import * as authMiddleware from '../middlewares/authMiddleware';
import * as Role from '../common/constants';

router.get('/', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.getAllScheduleProduct);
router.get('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.getScheduleProductByProduct);
router.post('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.createScheduleProduct);
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkSupplierOrAdminRole, controller.deleteScheduleProduct);


module.exports = router;