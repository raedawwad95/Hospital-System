var DepartmentRouter=require('express').Router();
var DepartmentController=require('./DepartmentsController');

DepartmentRouter.route('/')
.get(function(req,res){
	DepartmentController.retriveDepts(req,res);
})
.post(function(req,res){
	DepartmentController.createDept(req,res);
})
.put(function(req,res){
	DepartmentController.addDoctor(req,res);
})
.delete(function(req,res){
	DepartmentController.DeleteDocFromDep(req,res);
})
DepartmentRouter.route('/:nameOfDep')
.get(function(req, res) {
	DepartmentController.retriveOneDept(req, res);
	})

module.exports=DepartmentRouter;