var EmergencyRouter = require('express').Router();
var EmergencyController = require('./EmergencyController');

// create emergency call 
EmergencyRouter.route('/')
	.post(function (req, res) {
		EmergencyController.create(req, res);
	})

module.exports = EmergencyRouter;
