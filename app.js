const express = require('express');
const bodyParser = require('body-parser');
const restaurentRouter = require('./routes/index');
const { errorHandler } = require('./helpers');
const app = express();

app.use(bodyParser.json());

app.use(errorHandler);

process.on('uncaughtException', function (err) {
    logger.error(err);
});

// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', function (reason, p) {
    logger.error(reason);
});

app.use("/v1", restaurentRouter );

module.exports = app;