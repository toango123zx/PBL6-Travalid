import * as locationService from '../services/locationService';
import * as locationHelper from '../helpers/locationHelper';

export const getLoactions = async (req, res) => {
    let __loactions = await locationService.getLoactions();
    if (__loactions === false) {
        return res.status(500).json({
            position: "error: Query location in Prisma",
            msg: "The error from server"
        });
    };
    __loactions = locationHelper.formatLocationFormDb(__loactions);
    
    return res.status(200).json({
        data: __loactions
    });
};