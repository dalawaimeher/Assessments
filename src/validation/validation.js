

const Joi = require('joi');

module.exports = (() => {

    return {

        postMessage: {

            headers: Joi.object({
                'authorization': Joi.string().required()
            }).options({ allowUnknown: true }),
            payload: {
                name: Joi.string().required(),
                message: Joi.string().required(),
                date: Joi.date().required()
            }

        },
        getMessage: {
            headers: Joi.object({
                'authorization': Joi.string().required()
            }).options({ allowUnknown: true }),
            params:{
                uid:Joi.string()
            }
    }
}
})();
