var EmergencyRouter = require('express').Router();
var EmergencyController = require('./EmergencyController');

// to logout user
userRouter.route('/')
	.delete(function (req, res) {
		userController.logout(req, res);
	})



module.exports = EmergencyRouter;
