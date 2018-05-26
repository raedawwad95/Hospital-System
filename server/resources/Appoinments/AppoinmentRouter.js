AppoinmentRouter=require('express').Router();
AppoinmentController =require('./AppoinmentController');

AppoinmentRouter.route('/')
.post(function(req,res){
	AppoinmentController.add(req,res);
})
.get(function(req,res){
	AppoinmentController.retrive(req,res);
})
.put(function(req,res){
	AppoinmentController.update(req,res);
})

module.exports = AppoinmentRouter;