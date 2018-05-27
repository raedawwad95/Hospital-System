AppoinmentRouter=require('express').Router();
AppoinmentController =require('./AppoinmentController');
//Add an appointment 
AppoinmentRouter.route('/')
.post(function(req,res){
	AppoinmentController.add(req,res);
})
//retrive the appointments 
.get(function(req,res){
	AppoinmentController.retrive(req,res);
})
//update appointments
.put(function(req,res){
	AppoinmentController.update(req,res);
})

module.exports = AppoinmentRouter;