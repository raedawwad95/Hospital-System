var doctorRouter =require('express').Router();
var DoctorController = require('./DoctorController.js');
//retrieve doctors data
doctorRouter.route('/retrieve')
.get(function(req,res){
	DoctorController.retrieve(req,res);
})
//save Doctor to a database
doctorRouter.route('/create')
.post(function(req,res){
	DoctorController.create(req,res);
})
//update doctor
doctorRouter.route('/update')
.put(function(req,res){
	DoctorController.update(req,res);
})

doctorRouter.route('/login')
//login Doctor
.post(function(req,res){
	DoctorController.login(req,res);
})
//logout 
doctorRouter.route('/')
.delete(function (req, res) {
		userController.logout(req, res);
	})

module.exports = doctorRouter;