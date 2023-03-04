const express = require('express');
const bodyParser = require('body-parser');
const restaurentRouter = require('./routes/index')
const app = express();

app.use(bodyParser.json());

app.use("/v1", restaurentRouter );

module.exports = app;