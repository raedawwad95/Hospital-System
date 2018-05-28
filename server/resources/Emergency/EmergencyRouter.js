var EmergencyRouter = require('express').Router();
var EmergencyController = require('./EmergencyController');

// create emergency call 
EmergencyRouter.route('/')
	.post(function (req, res) {
		EmergencyController.create(req, res);
	})
	.get(function (req, res) {
		EmergencyController.retrive(req, res);
	})
	.delete(function (req, res) {
		EmergencyController.delete(req, res);
	})

module.exports = EmergencyRouter;
