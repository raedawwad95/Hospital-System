var chai      = require('chai');
var expect    = chai.expect;
var request   = require('request'); 
var mongoose  = require('mongoose');
var Dept      = require('../server/resources/Departments/Departments');
var Doc       = require('../server/resources/Doctor/Doctor');

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


