const Joi = require('joi');

exports.getRestaurentSchema = {
    query: Joi.object().keys({
        search: Joi.string().trim().optional(),
        page: Joi.number().required(),
        items: Joi.number().required(),
        filter: Joi.optional(),
    }),
};

exports.postRestaurentSchema = {
    body: Joi.object().keys({
        restaurantName: Joi.string().allow(null).trim().required(),
        address: Joi.string().trim().required(),
        vegOnly: Joi.boolean().allow(null).required(),
        cost:Joi.string().allow(null).trim().required(),
        cuisineTypes: Joi.allow(null).required(),
        isOpen: Joi.boolean().allow(null).required(),
    }),
};
