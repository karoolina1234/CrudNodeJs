const express = require('express');
const router = express.Router();

//pega o TaskController do controller pois la ocorre a criação da função create que recebe os dados da model
const TaskController = require("../controller/TaskController");
const TaskValidation = require('../middlewares/TaskMiddleware');
//pega o middleware 
const MacaddressValidation = require('../middlewares/MacaddressValidation')
router.post('/',TaskValidation, TaskController.create )
router.put('/:id',TaskValidation, TaskController.update)
router.get('/filter/all', MacaddressValidation, TaskController.all)
module.exports = router