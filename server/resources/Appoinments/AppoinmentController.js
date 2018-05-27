var Appoinment =require('./Appoinments');

// create an appointment 
exports.add=function(req,res){
	var Appoint=new Appoinment({
		date:req.body.date,
		hour:req.body.hour,
		doctorId:req.body.doctorId,
		userId:req.body.userId,
	});
	Appoint.save(function(err,data){
		if(err){
			return err
		}
		res.json(data);
	})
	
}
// retrive appointments 
exports.retrive=function(req,res){
	Appoinment.find({})
	.populate('doctorId')
	.populate('userId')
	.exec(function(err,data){
		if(err){
			console.log('there is an err')
		}
		if(!data){
			res.send('there is no data')
		}else{
		res.json(data)
		}
	});
}
//update the appointment 
exports.update=function(req,res){
	Appoinment.find({})
	.exce(function(err,appoinment){	
		if(err){
			console.error(err);
		}
		if(!appoinment){
			console.error("No appoinment found");
		} else {
			appoinment.read = true;
			appoinment.save();
			res.json("Updated");
		}
	})
}
// exports.retriveByDoctorId=function(req,res){
// 	//console.log('Appoinment Controller')
// 	//console.log("req.body",req.param)
// 	Appoinment.find({doctorId:"5b06c172f2b8881462db88ec"})//to be change
// 	.populate('doctorId')
// 	.populate('userId')
// 	.exec(function(err,data){
// 		if(err){
// 			console.log('there is an err')
// 		}
// 		if(!data){
// 			res.send('there is no data')
// 		}else{
// 		console.log('controller send the data')
// 		res.json(data)
// 		}
// 	});

// }