var userRouter = require('express').Router();
var userController = require('./UserController');

userRouter.route('/')
	.get(function (req, res) {
		res.json("Not Allowed To Enter Here");
	})

userRouter.route('/test')
	.post(function (req, res) {
		userController.test(req, res);
	})


module.exports = userRouter;
