var labsTechnciansRouter = require('express').Router();
var LabsTechnciansController = require('./LabsTechnciansController');

labsTechnciansRouter.route('/')
	.get(function (req, res) {
		LabsTechnciansController.Retrive(req,res);
	})

	.post(function (req, res) {
		LabsTechnciansController.Create(req, res);
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


module.exports = labsTechnciansRouter;