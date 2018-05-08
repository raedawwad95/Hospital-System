var ItDepartmentRouter = require('express').Router();
var ItDepartmentController = require('./ItDepartmentController.js');

ItDepartmentRouter.route('/')
.get(function(req,res){
	ItDepartmentController.retrieve(req,res);
})
.post(function(req,res){
	ItDepartmentController.create(req,res);
})

module.exports = ItDepartmentRouter;