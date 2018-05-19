var Appoinment =require('./Appoinments');


exports.add=function(req,res){
console.log("appoinment controller")
	var Appoint=new Appoinment({
		day:req.body.day,
		month:req.body.month,
		hour:req.body.hour,
		doctorId:req.body.doctorId,
		userId:req.body.userId,
	});
	Appoint.save(function(err,data){
		if(err){
			console.log('errrrrrrrrrrrrrrrrrrrrrrror')
			return err
		}
		res.json(data);
	})
	
}

exports.retrive=function(req,res){
	Appoinment.find({})
	.populate('doctorId')
	.populate('userId')
	.exec(function(err,data){
		if(err){
			res.json(err)
		}
		res.json(data)
	})
}

// exports.retrive=function(req,res){

// 	Appoinment.find({})
// }