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
	Appoinment.find({"doctorId":req.body.docId},function(err,appoinments){
		appoinments.forEach(function(appoinment){
			appoinment.read=true;
			appoinment.save();
		});
	});

}
