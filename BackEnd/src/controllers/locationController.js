import * as userService from '../services/userService';
import * as locationService from '../services/locationService';

export const getLocations = async (req, res) => {
    const _locations = await Promise.all([
        locationService.getLocations()
    ]);
    return res.status(200).json({
        data: _locations
    });
};

export const getLocationByID = async (req, res) => {
    const __id_location = Number(req.params.id);
    const _locations = await Promise.all([
        locationService.getLocationByID(__id_location)
    ]);
    return res.status(200).json({
        data: _locations
    });
};