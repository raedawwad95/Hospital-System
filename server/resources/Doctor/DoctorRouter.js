var doctorRouter =require('express').Router();
var DoctorController = require('./DoctorController.js');

doctorRouter.route('/')
//retrieve doctors data
.get(function(req,res){
	DoctorController.retrieve(req,res);
})
//save Doctor to a database
.post(function(req,res){
	DoctorController.create(req,res);
})
//update doctor
.put(function(req,res){
	DoctorController.update(req,res);
})

module.exports = doctorRouter;