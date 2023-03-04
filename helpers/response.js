
const formatResponse = (res, statusCode, message, data) =>
    res.status(statusCode).json({
        message,
        data,
    });

exports.success = (res, data, message) => formatResponse(res, 200, message, data);
exports.created = (res, data, message) => formatResponse(res, 201, message, data);
exports.noContent = (res) => res.status(204).send();
