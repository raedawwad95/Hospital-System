var chai      = require('chai');
var expect    = chai.expect;
var request   = require('request'); 
var mongoose  = require('mongoose');
var Dept      = require('../server/resources/Departments/Departments');
var Doc       = require('../server/resources/Doctor/Doctor');
var Dep       = require('../server/resources/ItDepartment/ItDepartment');
var lRes      = require('../server/resources/LabsResult/LabsResult');
var lTech     = require('../server/resources/LabsTechncians/LabsTechncians')
var mRec      = require('../server/resources/MedicalRecorde/Medical')
var user      = require('../server/resources/User/Users')
//test for get data from Departments

describe('test the get request from Departments', function(){

    before('connect', function(){
        return mongoose.createConnection('mongodb://localhost/dept')
    })

    beforeEach(function(){
        return Dept.remove({})
    })

    beforeEach(function(){
        var newDept = new Dept();
            newDept.nameOfDept='dept1';
            newDept.idOfDept='1';
        return newDept.save();
    });

    it('should list all Departments', function(done){
        var url = 'http://localhost:3000/dept';
        request.get(url, (error, response, body) => {
            if (error) done(error)
            expect(response).to.be.an('Object');
            done();
        });
    });
});

//test for get data from Doctors
describe('test the get request from Doctors', function(){

    before('connect', function(){
        return mongoose.createConnection('mongodb://localhost/Doctor')
    })

    beforeEach(function(){
        return Doc.remove({})
    })

    beforeEach(function(){
        var newDoc = new Doc();
            newDoc.userName='monther'
            newDoc.password='1234'
            newDoc.fullName='Monther Amer'
            newDoc.imageOfDoctor='kjasjdkjask'
            newDoc.imageOfId='asdasd'
            newDoc.nationalId='123'
            newDoc.hospitalId='1234'
            newDoc.spicilityStatus='m'
            newDoc.hoursOfWork='8'
            newDoc.gender='Male'
            newDoc.doctorType='D'
            newDoc.department='1'
        return newDoc.save();
    });



    it('should list all Doctors', function(done){
        var url = 'http://localhost:3000/Doctor/retrieve';
        request.get(url, (error, response, body) => {
            if (error) done(error)
            expect(response).to.be.an('Object');
            done();
        });
    });
});

//test for get data from itDepartments

describe('test the get request from itDepartments', function(){

    before('connect', function(){
        return mongoose.createConnection('mongodb://localhost/itDep')
    })

    beforeEach(function(){
        return Dep.remove({})
    })

    beforeEach(function(){
        var newitDep = new Dep();
            newitDep.userName='monther'
            newitDep.password='1234'
        return newitDep.save();
    });



    it('should get the admin information', function(done){
        var url = 'http://localhost:3000/itDep/retrieve';
        request.get(url, (error, response, body) => {
            if (error) done(error)
            expect(response).to.be.an('Object');
            done();
        });
    });
});

//test for the lab results 
describe('test the get request from LabResult', function(){

    before('connect', function(){
        return mongoose.createConnection('mongodb://localhost/labRes')
    })

    beforeEach(function(){
        return lRes.remove({})
    })

    beforeEach(function(){
        var newlRes = new lRes();
            newlRes.patientId='5af85bb90493504275b2fb9f'
            newlRes.labTechnicianId='5af85bb90443504275b2fb9f'
            newlRes.description='asddsfasd'
        return newlRes.save();
    });



    it('should get the LabsResult', function(done){
        var url = 'http://localhost:3000/itDep/retrieve';
        request.get(url, (error, response, body) => {
            if (error) done(error)
            expect(response).to.be.an('Object');
            done();
        });
    });
});


// test for retrive data from labs technitions


describe('test the get request from  labs technitions', function(){

    before('connect', function(){
        return mongoose.createConnection('mongodb://localhost/labTech')
    })

    beforeEach(function(){
        return lTech.remove({})
    })

    beforeEach(function(){
        var newlTech = new lTech();
            newlTech.userName='monther'
            newlTech.password='1234'
            newlTech.fullName='Monther Amer'
            newlTech.id='1'
            newlTech.imageOfId='asdasd'
            newlTech.workHour='8'
            newlTech.techncianType='T'
            newlTech.gender='Male'
            newlTech.personalImgUrl='asdasd'
        return newlTech.save();
    });



    it('should list all Doctors', function(done){
        var url = 'http://localhost:3000/labTech/retrieve';
        request.get(url, (error, response, body) => {
            if (error) done(error)
            expect(response).to.be.an('Object');
            done();
        });
    });
});



// test for get from medical 

// describe('test the get request from medical records ', function(){

//     before('connect', function(){
//         return mongoose.createConnection('mongodb://localhost/api/medical')
//     })

//     beforeEach(function(){
//         return mRec.remove({})
//     })

//     beforeEach(function(){
//         var newmRec = new mRec();
//             newmRec.patientId='5af85bb90443504275b2fb9f'
//             newmRec.doctorId='5af85bb90443503275b2fb9f'
//             newmRec.description='asdcrjaksd'
//             newmRec.image='asdasd'
//         return newmRec.save();
//     });



//     it('should list all medical records', function(done){
//         var url = 'http://localhost:3000/labTech/retrieve';
//         request.get(url, (error, response, body) => {
//             if (error) done(error)
//             expect(response).to.be.an('Object');
//             done();
//         });
//     });
// });

//test for get user

describe('test the get request from  user', function(){

    before('connect', function(){
        return mongoose.createConnection('mongodb://localhost/api/userController')
    })

    beforeEach(function(){
        return user.remove({})
    })

    beforeEach(function(){
        var newuser = new user();
            newuser.username='monther'
            newuser.password='1234'
            newuser.FullName='Monther Amer'
            newuser.idCardNumber='123423423'
            newuser.idCardImageUrl='asdasd'
            newuser.phone='80654215512'
            newuser.email='kasjdkasdjk'
            newuser.personalImgUrl='asdasd'
            newuser.userType='P'
            newuser.gender='Male'
            // newuser.medicalRecords=''
            // newuser.labResults
        return newuser.save();
    });



    it('should list all Doctors', function(done){
        var url = 'http://localhost:3000/api/userController/test';
        request.get(url, (error, response, body) => {
            if (error) done(error)
            expect(response).to.be.an('Object');
            done();
        });
    });
});

