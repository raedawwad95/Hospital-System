var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var doctorSchema = mongoose.Schema({
	userName:{
		type:String, 
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	fullName:{
		type:String,
		required:true
	},
	imageOfDoctor:{
		type:String,
		required:true
	},
	imageOfId:{
		type:String,
		required:true
	},
	nationalId:{
		type:Number,
		required:true
	},
	hospitalId:{
		type:Number,
		required:true
	},
	department:{
	type:Number,
	required:true
	}, //we need change 
	spicilityStatus:{
		type:String,
		required:true
	},
	hoursOfWork:{
		type:Number,
		required:true
	}

});
doctorSchema.pre('save',function(next){
	var doctorUser=this;
	bcrypt.hash(doctorUser.password,10,function(err,hash){
		if(err){
			return next(err)
		}
		doctorUser.password =hash;
		next();
	});
});

doctorSchema.methods.comparePassword =function(password,fun){
	bcrypt.compare(password,this.password,function(err,isMatch){
		if(err){
			fun(err)
		}
		fun(null,isMatch)
	});
}

var Doctors = mongoose.model('Doctors',doctorSchema);

module.exports = Doctors;