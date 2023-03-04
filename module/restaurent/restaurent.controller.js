const restaurentService = require('./services');
const { response } = require('../../helpers');
const { logger } = require('../../utilities');

exports.createRestaurent = async (req, res, next) => {
    try {
        const responsePayload = await restaurentService.createRestaurent(req.body );
        return response.success(res, responsePayload, 'success');
    } catch (error) {
        logger.error('Exception Occurred');
        logger.error(error.message);
        logger.error('createRestaurent-Controller ended with exception');
        next(error);
    }
};

exports.getAllRestaurent = async (req, res, next) => {
    try {
        const params = req.query;
        const responsePayload = await restaurentService.getAllRestaurent(params);
        return response.success(res, responsePayload, 'success');
    } catch (error) {
        logger.error('Exception Occurred');
        logger.error(error.message);
        logger.error('getAllRestaurent ended with exception');
        next(error);
    }
};


exports.updateRestaurent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const responsePayload = await restaurentService.updateRestaurent(id, req.body);
        return response.success(res, responsePayload, 'success');
    } catch (error) {
        logger.error('Exception Occurred');
        logger.error(error.message);
        logger.error('updateRestaurent-Controller ended with exception');
        next(error);
    }
};

exports.deleteRestaurent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const responsePayload = await restaurentService.deleteRestaurent(id );
        return response.success(res, responsePayload, 'success');
    } catch (error) {
        logger.error('Exception Occurred');
        logger.error(error.message);
        logger.error('deleteRestaurent-Controller ended with exception');
        next(error);
    }
};


