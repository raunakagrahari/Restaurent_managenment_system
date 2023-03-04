const express = require('express');
const router = express.Router();
const restaurentController = require('./restaurent.controller');
const { validationMiddleware } = require('./../../middlewares');
const { getRestaurentSchema, postRestaurentSchema } = require('./restaurent.validation');


router.post('/create',validationMiddleware(postRestaurentSchema), restaurentController.createRestaurent );
router.get('/getAll', restaurentController.getAllRestaurent );
router.patch('/update/:id', restaurentController.updateRestaurent);
router.delete('/delete/:id', restaurentController.deleteRestaurent);


module.exports = router;
