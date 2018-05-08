var Department = require('../server/resources/Departments/Departments');
var mongoose = require('mongoose');
var expect = require('chai').expect;

describe('Department Model', function () {

	it('should be a Mongoose model', function () {
    expect(new Department()).to.be.instanceOf(mongoose.Model);
  });

	it('should have a schema', function () {
    expect(Department.schema).to.exist;
  });

	it('should have a `nameOfDept` property', function () {
    expect(Department.schema.paths.nameOfDept).to.exist;
  });

  it('should have a `nameOfDept` property that is a string', function () {
    expect(Department.schema.paths.nameOfDept.options.type.name).to.equal('String');
  });



  it('should have a `idOfDept` property', function () {
    expect(Department.schema.paths.idOfDept).to.exist;
  });

  it('should have a `idOfDept` property that is a number', function () {
    expect(Department.schema.paths.idOfDept.options.type.name).to.equal('Number');
  });

 
  it('should have a `doctorsId` property', function () {
    expect(Department.schema.paths.doctorsId).to.exist;
  });

 
  
})