var mongoose = require('mongoose');

var MedicalSchema = mongoose.Schema({
	patientId : Number, // will be changed later
	doctorId : Number,	// will be changed later
	created_at: { type: Date, default: Date.now },
	description: String
});

var Medical = mongoose.model('Medical', MedicalSchema);

module.exports = Medical;