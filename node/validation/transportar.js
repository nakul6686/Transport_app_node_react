const Joi = require("joi");



const validateTransportar = (body)=>{
    const bookSchema = Joi.object({
        name: Joi.string().required().min(7),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).max(1024),
        phone: Joi.number(),
        company_name: Joi.string().required(),
        number_of_busses: Joi.number().required()
    });

    return bookSchema.validate(body)
}

module.exports.validateTransportar = validateTransportar