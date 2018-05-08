var labRouter = require('express').Router();
var labController = require('./LabsResultController');

labRouter.route('/')
	.get(function (req, res) {
		labController.Retrive(req,res);
	})

	.post(function (req, res) {
		labController.Create(req, res);
	})


module.exports = labRouter;




