var labRouter = require('express').Router();
var labController = require('./LabsResultController');

labRouter.route('/')
	.get(function (req, res) {
		labController.Retrive(req,res);
	})

	.post(function (req, res) {
		labController.createResutl(req, res);
	})


module.exports = labRouter;




