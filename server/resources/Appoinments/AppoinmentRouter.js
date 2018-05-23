AppoinmentRouter=require('express').Router();
AppoinmentController =require('./AppoinmentController');

AppoinmentRouter.route('/')
.post(function(req,res){
	console.log("router AppoinmentRouter")
	AppoinmentController.add(req,res);
})
.get(function(req,res){
	console.log('get router appoinment')
	AppoinmentController.retrive(req,res);
})

module.exports = AppoinmentRouter;