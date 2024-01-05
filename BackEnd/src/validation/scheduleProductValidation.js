const Joi = require('joi');

export const scheduleCreateValidate = data => {
    const currentTime = new Date();
    const scheduleSchema = Joi.object({
        price: Joi.number().strict().required(),
        id_product: Joi.number().strict(),
        start_time: Joi.date().min(currentTime).required(), 
        end_time: Joi.date().min(Joi.ref('start_time')).required(),
    });
    return scheduleSchema.validate(data);
}