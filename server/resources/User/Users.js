var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UsersSchema = mongoose.Schema({
	username: {type: String, index: {unique: true} , required : true},
	password: {type: String , required : true},
	FullName : {type: String , required : true},
	idCardNumber: {type: Number, required: true},
	idCardImageUrl: {type: String, required: true},
	phone: {type:Number},
	email : {type: String, index: {unique: true} },
	personalImgUrl : {type: String },
	userType: {type: String, default: "P"},
	gender: {type: String, required: true},
	medicalRecords: [{type: mongoose.Schema.Types.ObjectId, ref: 'Medical'}],
	labResults: [{type: mongoose.Schema.Types.ObjectId, ref: 'LabsResult'}]
}, { usePushEach: true });

// before save make these changes
UsersSchema.pre('save', function (next) {
	// defualt link for defualts users image profiles
	var maleImg = "https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png";
	var femaleImg = "https://cdn2.iconfinder.com/data/icons/avatar-profile/429/contact_profile_user_default_avatar_female_suit-512.png";
	
	// if user didnt upload img, set defualt image depend on gender
	if (!this.personalImgUrl) {
		if (this.gender ==="Male") {
			this.personalImgUrl = maleImg;
		} else {
			this.personalImgUrl = femaleImg;
		}
	}

	//in case there changing and password didnt effect, do nothing after this
    if (!this.isModified('password')) {
    	return next();
    } 
    var user = this
    bcrypt.hash(user.password,10,function(err,hash){
		if(err){
			return next(err)
		}
		user.password =hash;
		next();
	});
});

// method to check if password correct or not
UsersSchema.methods.comparePassword =function(password,fun){
	bcrypt.compare(password,this.password,function(err,isMatch){
		if(err){
			fun(err)
		}
		fun(null,isMatch)
	});
}

var Users = mongoose.model('Users', UsersSchema);

module.exports = Users;