var mongoose = require('mongoose');
//Medical Records schema 
var MedicalSchema = mongoose.Schema({
	patientId : {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}, 
	doctorId : {type: mongoose.Schema.Types.ObjectId, ref: 'Doctors'},
	description: String,
	image: String,
	createdAt:{ type:Date, default:Date.now }
});
var Medical = mongoose.model('Medical', MedicalSchema);

module.exports = Medical;