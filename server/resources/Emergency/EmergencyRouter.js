var EmergencyRouter = require('express').Router();
var EmergencyController = require('./EmergencyController');

// create emergency call 
EmergencyRouter.route('/')
	.delete(function (req, res) {
		EmergencyController.create(req, res);
	})

module.exports = EmergencyRouter;
