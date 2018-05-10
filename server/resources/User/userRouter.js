var userRouter = require('express').Router();
var userController = require('./UserController');

// to logout user
userRouter.route('/')
	.delete(function (req, res) {
		userController.logout(req, res);
	})

// for login
userRouter.route('/login')	
	.post(function (req, res) {
		userController.login(req, res);
	})

// for create new user accout
userRouter.route('/create')
	.post(function (req, res) {
		userController.create(req, res);
	})

// test session work
userRouter.route('/test')
	.get(function(req, res) {
		var ses = req.session
		res.json(ses);
	})

module.exports = userRouter;
