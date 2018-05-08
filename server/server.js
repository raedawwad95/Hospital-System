var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path');

var userRouter = require('./resources/User/userRouter');

var mdeicalRouter = require('./resources/MedicalRecorde/MedicalRouter');
var DepartmentsRouter = require('./resources/Departments/DepartmentsRouter');
var DoctorRouter = require('./resources/Doctor/DoctorRouter');
var labRouter=require('./resources/LabsResult/labRouter')
var labsTechnciansRouter=require('./resources/LabsTechncians/labsTechnciansRouter')

var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var app = express();
app.use(session({
  secret: 'OurAppSessionSecrets',
  resave: false,
  saveUninitialized: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../react-client/dist'));
app.use('/dept',DepartmentsRouter);
//app.use('/',userRouter);

app.use('/api/medical',mdeicalRouter);
app.use('/Doctor',DoctorRouter);
app.use('/res',labRouter);
app.use('/tech',labsTechnciansRouter)

app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, '../react-client/dist', 'index.html'));
})


module.exports = app;
