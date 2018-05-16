var Department = require('../server/resources/Departments/Departments');
var Doctors = require('../server/resources/Doctor/Doctor');
var ItDepartment = require('../server/resources/ItDepartment/ItDepartment');
var LabsResult = require('../server/resources/LabsResult/LabsResult');
var LabsTechncians = require('../server/resources/LabsTechncians/LabsTechncians')
var Medical = require('../server/resources/MedicalRecorde/Medical')
var mongoose = require('mongoose');



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


//test for ItDepartment Model

describe('ItDepartment Model', function(){
    it('should a mongoose model', function(){
        expect(new ItDepartment()).to.be.instanceOf(mongoose.Model)
    });
    it('should have a schema', function(){
        expect(ItDepartment.schema).to.exist;
    });
    it('should have a `userName` property', function(){
        expect(ItDepartment.schema.paths.userName).to.exist;
    });
    it('should have a `userName` property that is a string', function(){
        expect(ItDepartment.schema.paths.userName.options.type.name).to.equal('String');
    });
    it('should have a `userName` property that is a unique', function(){
        expect(ItDepartment.schema.paths.userName.options.unique).to.be.true;
    });
    it('should have a `password` property', function(){

        expect(ItDepartment.schema.paths.password).to.exist;
    });
    it('should have a `password` property that is a string', function(){
        expect(ItDepartment.schema.paths.password.options.type.name).to.equal('String');
    });
    
});


//test for LabsResult Model

describe('LabsResult Model', function(){
    it('should a mongoose Model', function(){
        expect(new LabsResult()).to.be.instanceOf(mongoose.Model);
    });
    it('should have a Schema', function(){
        expect(LabsResult.schema).to.exist;
    });
    it('should have a `patientId` property', function(){
        expect(LabsResult.schema.paths.patientId).to.exist;
    });
    it('should have a `patientId` property that is a objectid', function(){
        expect(LabsResult.schema.paths.patientId.options.type.name).to.equal('ObjectId');
    });
     it('should have a `labTechnicianId` property', function(){
        expect(LabsResult.schema.paths.labTechnicianId).to.exist;
    });
    it('should have a `labTechnicianId` property that is a ObjectId', function(){
        expect(LabsResult.schema.paths.labTechnicianId.options.type.name).to.equal('ObjectId');
    });
    it('should have a `medicalExaminationTime` property', function(){
        expect(LabsResult.schema.paths.medicalExaminationTime).to.exist;
    });
    it('should have a `medicalExaminationTime` property that is a date', function(){
        expect(LabsResult.schema.paths.medicalExaminationTime.options.type.name).to.equal('Date');
    });
     it('should have a `resultEntryTime` property', function(){
        expect(LabsResult.schema.paths.resultEntryTime).to.exist;
    });
    it('should have a `resultEntryTime` property that is a date', function(){
        expect(LabsResult.schema.paths.resultEntryTime.options.type.name).to.equal('Date');
    });
    it('should have a `imageOfResult` property', function(){
        expect(LabsResult.schema.paths.imageOfResult).to.exist;
    });
    it('should have a `imageOfResult` property that is a string', function(){
        expect(LabsResult.schema.paths.imageOfResult.options.type.name).to.equal('String');
    });


});



//test for LabsTechncians Model
    
describe('LabsTechncians Model', function(){
    it('should a mongoose Model', function(){
        expect(new LabsTechncians()).to.be.instanceOf(mongoose.Model);
    });
    it('should have a schema', function(){
        expect(LabsTechncians.schema).to.exist;
    });
    it('should have a `userName` property', function(){
        expect(LabsTechncians.schema.paths.userName).to.exist;
    });
    it('should have a `userName` property that is a string', function(){
        expect(LabsTechncians.schema.paths.userName.options.type.name).to.equal('String');
    });
    it('should have a `userName` property that is a unique', function(){
        expect(LabsTechncians.schema.paths.userName.options.unique).to.true;
    });
    it('should have a `password` property', function(){
        expect(LabsTechncians.schema.paths.password).to.exist;
    });
    it('should have a `password` property that is a string', function(){
        expect(LabsTechncians.schema.paths.password.options.type.name).to.equal('String');
    });
    it('should have a `fullName` property', function(){
        expect(LabsTechncians.schema.paths.fullName).to.exist;
    });
    it('should have a `fullName` property that is a string', function(){
        expect(LabsTechncians.schema.paths.fullName.options.type.name).to.equal('String');
    });
    it('should have a `id` property', function(){
        expect(LabsTechncians.schema.paths.id).to.exist;
    });
    it('should have a `id` property that is a number', function(){
        expect(LabsTechncians.schema.paths.id.options.type.name).to.equal('Number');
    });
    it('should have a `imageOfId` property', function(){
        expect(LabsTechncians.schema.paths.imageOfId).to.exist;
    });
    it('should have a `imageOfId` property that is a string', function(){
        expect(LabsTechncians.schema.paths.imageOfId.options.type.name).to.equal('String');
    });
    
    it('should have a `workHour` property', function(){
        expect(LabsTechncians.schema.paths.workHour).to.exist;
    });
    it('should have a `workHour` property that is a number', function(){
        expect(LabsTechncians.schema.paths.workHour.options.type.name).to.equal('Number');
    });

});


//test for Medical Model

describe('Medical Model', function(){
    it('should a mongoose Model', function(){
        expect(new Medical()).to.be.instanceOf(mongoose.Model);
    });
    it('should have a schema', function(){
        expect(Medical.schema).to.exist;
    });
    it('should have a `patientId` property', function(){
        expect(Medical.schema.paths.patientId).to.exist;
    });
    it('should have a `patientId` property that is a objectid', function(){
        expect(Medical.schema.paths.patientId.options.type.name).to.equal('ObjectId');
    });
    it('should have a `doctorId` property', function(){
        expect(Medical.schema.paths.doctorId).to.exist;
    });
    it('should have a `doctorId` property that is a objectid', function(){
        expect(Medical.schema.paths.doctorId.options.type.name).to.equal('ObjectId');
    });
    
    it('should have a `description` property', function(){
        expect(Medical.schema.paths.description).to.exist;
    });
    it('should have a `description` property that is a string', function(){
        expect(Medical.schema.paths.description.options.type.name).to.equal('String');
    });
});