var labsTechnciansRouter = require('express').Router();
var LabsTechnciansController = require('./LabsTechnciansController');

labsTechnciansRouter.route('/')
	.get(function (req, res) {
		LabsTechnciansController.Retrive(req,res);
	})

	.post(function (req, res) {
		LabsTechnciansController.Create(req, res);
	})
	.put(function(req,res){
	LabsTechnciansController.addPatient(req,res);
})
	// techncian update 
	labsTechnciansRouter.route('/update')
	.put(function(req,res){
	 LabsTechnciansController.update(req,res);
	})

	//techncian login .
	labsTechnciansRouter.route('/login')
	.post(function(req,res){
		LabsTechnciansController.login(req,res)
	})

	// techncian logout
	labsTechnciansRouter.route('/logout')
	.delete(function (req, res) {
		LabsTechnciansController.logout(req, res);
	})

	labsTechnciansRouter.route('/isLogin')
		.get(function(req , res) {
			LabsTechnciansController.isLogin(req , res);
		})

	//get patient result by patintId
	labsTechnciansRouter.route('/:patintId')
	.get(function(req,res){
		LabsTechnciansController.PatientResult(req,res);
	})


module.exports = labsTechnciansRouter;