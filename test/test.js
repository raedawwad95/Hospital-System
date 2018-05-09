var Department = require('../server/resources/Departments/Departments');
var Doctors = require('../server/resources/Doctor/Doctor');

var mongoose = require('mongoose');
var expect = require('chai').expect;

//test for Department Model

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
  
});

//test for Doctors Model


describe('Doctors Model',function(){
	it ('should be a mongoose model',function(){
		expect(new Doctors()).to.be.instanceOf(mongoose.Model);
	})

	it('should have a schema', function () {
    expect(Doctors.schema).to.exist;
    });

    it('should have a `userName` property', function () {
    expect(Doctors.schema.paths.userName).to.exist;
    });
   
    it('should have a `password` property', function () {
    expect(Doctors.schema.paths.password).to.exist;
    });

    it('should have a `fullName` property', function () {
    expect(Doctors.schema.paths.fullName).to.exist;
    });

    it('should have a `imageOfDoctor` property', function () {
    expect(Doctors.schema.paths.imageOfDoctor).to.exist;
    });

    it('should have a `imageOfId` property', function () {
    expect(Doctors.schema.paths.imageOfId).to.exist;
    });

    it('should have a `nationalId` property', function () {
    expect(Doctors.schema.paths.nationalId).to.exist;
    });

    it('should have a `hospitalId` property', function () {
    expect(Doctors.schema.paths.hospitalId).to.exist;
    });

    it('should have a `department` property', function () {
    expect(Doctors.schema.paths.department).to.exist;
    });

    it('should have a `spicilityStatus` property', function () {
    expect(Doctors.schema.paths.spicilityStatus).to.exist;
    });


    it('should have a `hoursOfWork` property', function () {
    expect(Doctors.schema.paths.hoursOfWork).to.exist;
    });        

    it('should have a `userName` property that is a string', function () {
    expect(Doctors.schema.paths.userName.options.type.name).to.equal('String');
    });

    it('should have a `password` property that is a string', function () {
    expect(Doctors.schema.paths.password.options.type.name).to.equal('String');
    });

    it('should have a `fullName` property that is a string', function () {
    expect(Doctors.schema.paths.fullName.options.type.name).to.equal('String');
    });

    it('should have a `imageOfDoctor` property that is a string', function () {
    expect(Doctors.schema.paths.imageOfDoctor.options.type.name).to.equal('String');
    });

    it('should have a `imageOfId` property that is a string', function () {
    expect(Doctors.schema.paths.imageOfId.options.type.name).to.equal('String');
    });

    it('should have a `nationalId` property that is a string', function () {
    expect(Doctors.schema.paths.nationalId.options.type.name).to.equal('Number');
    });

    it('should have a `hospitalId` property that is a string', function () {
    expect(Doctors.schema.paths.hospitalId.options.type.name).to.equal('Number');
    });

    it('should have a `department` property that is a string', function () {
    expect(Doctors.schema.paths.department.options.type.name).to.equal('Number');
    });

    it('should have a `spicilityStatus` property that is a string', function () {
    expect(Doctors.schema.paths.spicilityStatus.options.type.name).to.equal('String');
    });

    it('should have a `hoursOfWork` property that is a string', function () {
    expect(Doctors.schema.paths.hoursOfWork.options.type.name).to.equal('Number');
    });
})