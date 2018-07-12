var labsTechnciansRouter = require('express').Router();
var LabsTechnciansController = require('./LabsTechnciansController');
//retrive labs Techncian
labsTechnciansRouter.route('/')
.get(function (req, res) {
  LabsTechnciansController.Retrive(req,res);
})
//create  labs Techncian
.post(function (req, res) {
  LabsTechnciansController.Create(req, res);
})
//add Patient
.put(function(req,res){
  LabsTechnciansController.addPatient(req,res);
})
// techncian update 
labsTechnciansRouter.route('/update')
.put(function(req,res){
  LabsTechnciansController.update(req,res);
})
//techncian login .
labsTechnciansRouter.route('/login')
.post(function(req,res){
  LabsTechnciansController.login(req,res)
})
// techncian logout
labsTechnciansRouter.route('/logout')
.get(function (req, res) {
  LabsTechnciansController.logout(req, res);
})
labsTechnciansRouter.route('/isLogin')
.get(function(req , res) {
  LabsTechnciansController.isLogin(req , res);
  })
//ge t patient result by patintId
labsTechnciansRouter.route('/:patintId')
.get(function(req,res){
  LabsTechnciansController.PatientResult(req,res);
})
//delete labs Techncians
labsTechnciansRouter.route('/:userNameLabTech')
.delete(function(req,res){
  LabsTechnciansController.deleteOne(req,res)
})
//retrive one lab techncian 
labsTechnciansRouter.route('/getOne/tech')
.get(function (req, res) {
  LabsTechnciansController.retrieveOne(req, res);
})
module.exports = labsTechnciansRouter;