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
// login for mobile users
userRouter.route('/loginMobile')
.post(function (req, res) {
  userController.loginNative(req, res);
})
// check if online or not when user open page
userRouter.route('/isLogin')
.get(function (req, res) {
  userController.isLogin(req, res);
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
//retrive all users
userRouter.route('/retrive/allPatient')
.get(function(req, res) {
  userController.retriveAllPatient(req, res);
})
// Logout
userRouter.route('/Logout')
.get(function (req, res) {
  userController.logout(req, res);
})
// get the data of login user
userRouter.route('/getLogin')
.get(function (req, res) {
  userController.getLoginData(req , res);
})
// retrive one user by its username
userRouter.route('/:username')
.get(function(req, res) {
  userController.retrive(req, res);
})
//retrive one User by session (Login)
userRouter.route('/retrive/user')
.get(function(req, res) {
  userController.retriveUser(req, res);
})
module.exports = userRouter;
