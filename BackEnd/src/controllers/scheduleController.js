import * as envApp from '../config/envApp';
import { prisma } from '../config/prismaDatabase';
import * as scheduleHelper from '../helpers/scheduleHelper';
import * as productService from '../services/productService';
import * as scheduleProductService from '../services/scheduleProductService';
const { scheduleCreateValidate } = require('../validation/scheduleProductValidation');

export const getAllScheduleProduct = async (req, res, next) => {
    try {
        let page = parseInt(req.query.page, 10);
        if (page < 0 || !!page == false) page = 1; // set default page
        const limit = envApp.LimitProductService;
        let start = (page - 1) * limit;
        const id_user = req.user.id_user;
        const schedules = await scheduleProductService.getSchedulesProduct(undefined, id_user, 'travel_supplier', start, limit)
        if (!schedules) {
            return res.status(403).json({
                position: "getAllScheduleProduct",
                msg: "The user does not have permission to access this resource"
            });
        }
        let schedule = scheduleHelper.formatScheduleFormDb(schedules);
        return res.status(200).send({
            data: {
                schedule
            }
        })
    } catch (err) {
        return res.status(400).send({
            error: err,
        })
    }
}

export const createScheduleProduct = async (req, res, next) => {
    try {
        const id_product = parseInt(req.params.id);
        const { price, start_time, end_time } = req.body;
        let scheduleProduct = {
            id_product: Number(id_product),
            start_time: new Date(start_time),
            end_time: new Date(end_time),
            price: Number(price),
        }
        const { error } = scheduleCreateValidate(scheduleProduct);
        if (error) {
            return res.status(400).json({
                msg: error.details[0].message
            })
        }
        const schedule = await scheduleProductService.createScheduleProduct(scheduleProduct);
        if (!schedule) {
            return res.json({
                msg: 'Schedule not created'
            });
        }
        return res.sendStatus(200)
    } catch (error) {
        res.status(500).json({
            msg: 'Create schedule error',
        });
    }
}

export const deleteScheduleProduct = async (req, res, next) => {
    try {
        const id_user = req.user.id_user;
        let id_schedule_product = parseInt(req.params.id);
        if(!(await scheduleProductService.getIdScheduleProductbyId(id_schedule_product))){
            return res.status(404).json({
                position : 'Id Schedule Product',
                msg : "Id Schedule Product not found"
            })}
        else {
            let id_schedule_product_array = [id_schedule_product];
            let id_bills = await productService.getIdBillsByIdScheduleProduct(id_schedule_product_array);
            const id_bill_cancel = id_bills.map(item => item.id_bill);
            let cancel_bills = await productService.cancelBillsByBillId(id_bill_cancel);
            const inactiveSchedule = await scheduleProductService.deleteScheduleProduct(id_schedule_product)
            return res.sendStatus(200)
        }
    }
    catch (err) {
        res.status(500).json({
            msg: 'Delete Schedule error',
        });
    }
};