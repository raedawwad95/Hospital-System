var MedicalRouter = require('express').Router();
var MedicalController = require('./MedicalController');

//Create medical records
MedicalRouter.route('/')
	.post(function (req, res) {
		MedicalController.create(req, res);
	})
//search for the records 
MedicalRouter.route('/search')
	.post(function (req, res) {
		MedicalController.search(req, res);
	})
//add records 
MedicalRouter.route('/addRecorde')
	.post(function (req, res) {
		MedicalController.addRecord(req, res);
	})

module.exports = MedicalRouter;
