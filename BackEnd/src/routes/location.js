const express = require('express');
const locationRouter = express.Router();

import * as locationController from '../controllers/locationController';

locationRouter.get('/', locationController.getLoactions);

module.exports = locationRouter;