const { PreconditionException } = require('./../helpers/errorResponse');

const options = {
    basic: {
        abortEarly: false,
        convert: true,
    },
    array: {
        abortEarly: false,
        convert: true,
    },
};

module.exports = (schema) => (req, res, next) => {
    Object.keys(schema).forEach((key) => {
        const { error } = schema[key].validate(req[key], options);
        if (error) {
            const message = error.details[0].message || 'Invalid inputs';
            const response = error.details[0];
            throw new PreconditionException(message, response);
        }
    });

    next();
};
