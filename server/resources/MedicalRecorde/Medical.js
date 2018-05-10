var mongoose = require('mongoose');

var MedicalSchema = mongoose.Schema({
	patientId : {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}, 
	doctorId : {type: mongoose.Schema.Types.ObjectId, ref: 'Doctors'},
	description: String,
	image: String
});

var Medical = mongoose.model('Medical', MedicalSchema);

module.exports = Medical;