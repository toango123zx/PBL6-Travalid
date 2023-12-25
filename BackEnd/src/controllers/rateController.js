import * as rateService from '../services/rateService';
import * as envApp from '../config/envApp';
const { rateCreateValidate} = require('../validation/rateValidation');

export const getAllRate = async (req, res, next) => {
    try {
        const id_product = parseInt(req.params.id);
        let page = parseInt(req.query.page, 10);
        if (page < 0 || !!page == false) page = 1; // set default page
        const limit = envApp.LimitGetRateTraveller;
        let start = (page - 1) * limit;
        let allRatePage = await rateService.getAllRates(id_product, start, limit);
        let allRate = await rateService.getAllRates(id_product);
        if (!allRate) {
            return res.status(404).json({
                position: "getAllRate",
                msg: "Rate not found"
            });
        }
        const totalStars = allRate.reduce((acc, curr) => acc + curr.star, 0) || 0;
        let avgRate = (totalStars / allRate.length).toFixed(1);
        avgRate = isNaN((avgRate)) ? 0 : avgRate;
        return res.status(200).json({
            status: 'success',
            msg: 'You have successfully.',
            data: allRatePage,
            avg_rate: avgRate,
        });

    } catch (err) {
        res.status(500).json({
            msg: 'Get internal server error in get all rate',
        });
    }
}

export const createRate = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        const id_product = parseInt(req.params.id);
        const { comment, star } = req.body;
        let data = {
            id_user: id_user,
            id_product: id_product,
            comment: comment,
            star: star
        }
        const { error } = rateCreateValidate(data);
        if (error) {
            return res.status(422).json({
                msg: error.details[0].message
            })
        }
        const quantityComplete = await rateService.getComplete(id_user, id_product);
        const quantityRate = await rateService.getQuantityRate(id_user, id_product);
        if (quantityRate >= quantityComplete.length) {
            return res.status(403).json({
                position: 'Unfinished product',
                msg: 'You have not completed the product yet'
            })
        }
        const createRate = await rateService.createRate(data);
        if (!createRate) {
            return res.status(400).json({
                position: 'id product',
                msg: "create rate erorr"
            })
        }
        return res.sendStatus(200)
    } catch (err) {
        res.status(500).json({
            msg: 'Get internal server error in get all rate',
        });
    }
}

export const deleteRate = async (req, res, next) => {
    try {
        let id_rate = parseInt(req.params.id);
        const rate = await rateService.getRateById(id_rate);
        console.log(rate);
        if (!rate) {
            return res.status(404).json({
                position: 'id rate',
                msg: "Rate not found"
            })
        }
        const deleteRate = await rateService.deleteRate(id_rate);
        if (!deleteRate) {
            return res.status(400).json({
                position: 'id rate',
                msg: "delete rate erorr"
            })
        }
        return res.sendStatus(200)
    } catch (err) {
        res.status(500).json({
            msg: 'Delete rate erorr',
        });
    }
}


