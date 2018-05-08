var mongoose = require('mongoose')

var doctorSchema = mongoose.Schema({
userName:{type:String, unique:true,required:true},
password:{type:String,required:true},
fullName:{type:String,required:true},
imageOfDoctor:{type:String,required:true},
imageOfId:{type:String,required:true},
nationalId:{type:Number,required:true},
hospitalId:{type:Number,required:true},
department:{type:Number,required:true}, //we need change 
spicilityStatus:{type:String,required:true},
hoursOfWork:{type:Number,required:true}

})

var Doctors = mongoose.model('Doctors',doctorSchema);

module.exports = Doctors;