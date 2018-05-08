var doctorRouter =require('express').Router();
var DoctorController = require('./DoctorController.js');

doctorRouter.route('/')
.get(function(req,res){
	DoctorController.retrieve(req,res);
})
.post(function(req,res){
	DoctorController.create(req,res);
})

module.exports = doctorRouter;