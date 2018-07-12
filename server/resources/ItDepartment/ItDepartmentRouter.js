var ItDepartmentRouter = require('express').Router();
var ItDepartmentController = require('./ItDepartmentController.js');
//retrieve data 
ItDepartmentRouter.route('/retrieve')
.get(function(req,res){
  ItDepartmentController.retrieve(req,res);
})
//create new ItDep
ItDepartmentRouter.route('/create')
.post(function(req,res){
  ItDepartmentController.create(req,res);
})
//login
ItDepartmentRouter.route('/login')
.post(function(req,res){
  ItDepartmentController.login(req,res);
})
//logout
ItDepartmentRouter.route('/logout')
.get(function(req,res){
  ItDepartmentController.logout(req,res);
})
//check if login is admin ?
ItDepartmentRouter.route('/isLogin')
.get(function (req, res) {
  ItDepartmentController.isLogin(req, res);
	})
module.exports = ItDepartmentRouter;