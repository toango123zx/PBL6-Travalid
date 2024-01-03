const express = require('express');
const locationRouter = express.Router();

import * as authMiddleware from '../middlewares/authMiddleware';
import * as locationController from '../controllers/locationController';

locationRouter.get('/', locationController.getLocations);
locationRouter.get('/:id', locationController.getLocationByID);


module.exports = locationRouter;