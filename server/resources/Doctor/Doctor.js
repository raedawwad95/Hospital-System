var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//Schema for doctors
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
		type:String
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
	},
	gender: {
		type: String,
		required:true
	}

});
//before save in DataBase
doctorSchema.pre('save',function(next){
	//url for image
	var maleDoctorImage = "https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png";
	var femaleDoctorImage = "https://cdn2.iconfinder.com/data/icons/avatar-profile/429/contact_profile_user_default_avatar_female_suit-512.png";
	//upload defualt image if the doctor not set image
	if(!this.imageOfDoctor){
		if(this.gender==="Male"){
		this.imageOfDoctor = maleDoctorImage;
	}else{
		this.imageOfDoctor=femaleDoctorImage;
	}
	}


	//if change anything and didnt change the password dont do anything for password 
	 if (!this.isModified('password')) {
    	return next();
    } 

	var doctorUser=this;
	//hash password
	bcrypt.hash(doctorUser.password,10,function(err,hash){
		if(err){
			return next(err)
		}
		doctorUser.password =hash;
		next();
	});
});

//compare password
doctorSchema.methods.comparePassword =function(password,fun){
	bcrypt.compare(password,this.password,function(err,isMatch){
		if(err){
			fun(err)
		}
		fun(null,isMatch)
	});
}

// model Doctors DataBase
var Doctors = mongoose.model('Doctors',doctorSchema);

module.exports = Doctors;