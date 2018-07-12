var NewsRouter=require('express').Router();
var NewsController=require('./NewsController');
//for create new News
NewsRouter.route('/')
.post(function(req,res){
  NewsController.create(req,res);
})
//retrive all news 
.get(function(req,res){
  NewsController.Retrive(req,res)
})
// delete news by id 
NewsRouter.route('/:id')
.delete(function(req,res){
  NewsController.Delete(req,res)
})
module.exports=NewsRouter;