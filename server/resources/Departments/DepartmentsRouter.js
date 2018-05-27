var DepartmentRouter=require('express').Router();
var DepartmentController=require('./DepartmentsController');
//retrive departments 
DepartmentRouter.route('/')
.get(function(req,res){
	DepartmentController.retriveDepts(req,res);
})
//create a department 
.post(function(req,res){
	DepartmentController.createDept(req,res);
})
//add a doctor to the department 
.put(function(req,res){
	DepartmentController.addDoctor(req,res);
})
//delete a doctor from a department 
.delete(function(req,res){
	DepartmentController.DeleteDocFromDep(req,res);
})
// retrive one departement 
DepartmentRouter.route('/:nameOfDep')
.get(function(req, res) {
	DepartmentController.retriveOneDept(req, res);
	})

module.exports=DepartmentRouter;