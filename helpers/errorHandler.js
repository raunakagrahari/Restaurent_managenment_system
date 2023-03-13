const { ErrorResponse } = require('../helpers/errorResponse');
const { logger } = require('../utilities');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    if (err.code === 500 || (!err.code && !err.type)) logger.error(err);

    if (err.type === 'TypeError') {
        const message = `TypeError ${err.value}`;
        error = new ErrorResponse(message, 400);
    }

    if (err.name === 'CastError') {
        const message = `Resource not found with ID of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        error: {
            code: error.statusCode || 500,
            type: error.type || 'Internal Server Error',
            message: error.message || 'Something went wrong. Please try again later.',
            data: error.err || {},
        },
    });
};

module.exports = errorHandler;
