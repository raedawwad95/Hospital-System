var MedicalRouter = require('express').Router();
var MedicalController = require('./MedicalController');

MedicalRouter.route('/')
	.post(function (req, res) {
		MedicalController.create(req, res);
	})

MedicalRouter.route('/search')
	.post(function (req, res) {
		MedicalController.search(req, res);
	})

module.exports = MedicalRouter;
