const express = require('express');
const restaurentRoutes  = require('./../module/restaurent/restaurent.route');
const { version } = require('./../package.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`API Endpoint is working. Version - ${version}`);
});

// Main Routes
router.use('/restaurent', restaurentRoutes);

module.exports = router;
