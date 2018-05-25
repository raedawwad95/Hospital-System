AppoinmentRouter=require('express').Router();
AppoinmentController =require('./AppoinmentController');

AppoinmentRouter.route('/')
.post(function(req,res){
	AppoinmentController.add(req,res);
})
.get(function(req,res){
	AppoinmentController.retrive(req,res);
})
// AppoinmentRouter.route('/docapp')
// .get(function(req,res){
// 	console.log('appoinment router')
// 	AppoinmentController.retriveByDoctorId(req,res);
// })

module.exports = AppoinmentRouter;