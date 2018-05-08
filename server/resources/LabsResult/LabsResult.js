var mongoose = require('mongoose');

var LabsResultSchema = mongoose.Schema({
	patientId:{
		type:Number
	},
	labTechnicianId:{
		type:Number
	},
	medicalExaminationTime:{
		type:Date
	},
	resultEntryTime:{
		type:Date,
		default: Date.now
	},
	imageOfResult:{
		type:String
	}


	
});

var LabsResult = mongoose.model('LabsResult', LabsResultSchema);

module.exports = LabsResult;