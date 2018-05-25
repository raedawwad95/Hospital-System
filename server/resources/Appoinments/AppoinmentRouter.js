AppoinmentRouter=require('express').Router();
AppoinmentController =require('./AppoinmentController');

AppoinmentRouter.route('/')
.post(function(req,res){
	AppoinmentController.add(req,res);
})
.get(function(req,res){
	AppoinmentController.retrive(req,res);
})

module.exports = AppoinmentRouter;