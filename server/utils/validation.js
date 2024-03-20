const Joi = require('joi')

const singUpSchema = Joi.object({
    fullname : Joi.string().required(),
    profilename : Joi.string().required(),
    password : Joi.string().required().min(6),
    email : Joi.string().required().email(),
    profilePic : Joi.string().default(''),
    gender : Joi.string().required().valid('male','female')

}).required()

module.exports = singUpSchema