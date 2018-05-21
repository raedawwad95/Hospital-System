var NewsRouter=require('express').Router();
var NewsController=require('./NewsController');



NewsRouter.route('/')
.post(function(req,res){
	NewsController.create(req,res);
})
.get(function(req,res){
	NewsController.Retrive(req,res)
})

module.exports=NewsRouter;