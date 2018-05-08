var labsTechnciansRouter = require('express').Router();
var LabsTechnciansController = require('./LabsTechnciansController');

labsTechnciansRouter.route('/')
	.get(function (req, res) {
		LabsTechnciansController.Retrive(req,res);
	})

	.post(function (req, res) {
		LabsTechnciansController.Create(req, res);
	})


module.exports = labsTechnciansRouter;