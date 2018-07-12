var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
// Lab Techncians Schema 
var LabsTechnciansSchema = mongoose.Schema({
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
  id:{
	type:Number

  },
  imageOfId:{
	type:String,
	required:true
  },
	
  workHour:{
	type:Number,
	required:true
  },
  techncianType:{
	type:String,
	default:"T"

  },
  gender: {
	type: String, 
	required: true
  },
  personalImgUrl : {
	type: String 
  }
	
});
// make the below changes befor saving.
LabsTechnciansSchema.pre("save",function(next){
// defualt link for defualts users image profiles
var maleImg = "https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png";
var femaleImg = "https://cdn2.iconfinder.com/data/icons/avatar-profile/429/contact_profile_user_default_avatar_female_suit-512.png";

if(!this.personalImgUrl){
 if(this.gender==="Male"){
	this.personalImgUrl=maleImg;
  }else{
    this.personalImgUrl=femaleImag;
  }
}
//if there is a change in the password
if(!this.isModified('password')){
  return next();
}
  var techncian=this;
bcrypt.hash(techncian.password,10,function(err,hash){
  if(err){
	return next(err)
  }
		
  techncian.password =hash;
	next();
});
});
// method to check if password correct or not
LabsTechnciansSchema.methods.comparePassword =function(password,fun){
  bcrypt.compare(password,this.password,function(err,isMatch){
    if(err){
	  fun(err)
	}	
	fun(null,isMatch)
  });
}
var LabsTechncians = mongoose.model('LabsTechncians', LabsTechnciansSchema);

module.exports = LabsTechncians;