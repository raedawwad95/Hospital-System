var mongoose = require('mongoose');


//News Schema 
var NewsSchema=mongoose.Schema({
	newsSubject:{type:String},
	newsText:{type:String},
	Image:{type:String},
	createdAt:{
		type:Date,
		default:Date.now
	}
})
var News=mongoose.model('News',NewsSchema)
module.exports=News