var labRouter = require('express').Router();
var labController = require('./LabsResultController');
//retrive lab result 
labRouter.route('/')
	.get(function (req, res) {
		labController.Retrive(req,res);
	})
	//create lab result 
	.post(function (req, res) {
		labController.createResutl(req, res);
	})


module.exports = labRouter;




