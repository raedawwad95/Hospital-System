var DepartmentRouter=require('express').Router();
var DepartmentController=require('./DepartmentsController');

DepartmentRouter.route('/')
.get(function(req,res){
	res.json('departments')
})
.post(function(req,res){
	DepartmentController.createDept(req,res)
})


module.exports=DepartmentRouter;