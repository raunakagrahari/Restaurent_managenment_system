const express = require('express');
const restaurentController = require('./restaurent.controller');

const router = express.Router();

router.post('/', authMiddleware([user]), validationMiddleware(postConfigSchema), configController.createConfig);


module.exports = router;
