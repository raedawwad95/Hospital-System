var NewsRouter=require('express').Router();
var NewsController=require('./NewsController');



NewsRouter.route('/')
.post(function(req,res){
	NewsController.create(req,res);
})
.get(function(req,res){
	NewsController.Retrive(req,res)
})
.delete(function(req,res){
	NewsController.Delete(req,res)
})

module.exports=NewsRouter;