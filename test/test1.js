var chai      = require('chai');
var expect    = chai.expect;
var request   = require('request'); 
var mongoose  = require('mongoose');
var Dept      = require('../server/resources/Departments/Departments');


describe('Testing the routes', function(){

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
