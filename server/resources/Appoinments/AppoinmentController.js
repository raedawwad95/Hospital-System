var Appoinment =require('./Appoinments');


exports.add=function(req,res){
console.log('req body ',req.body)
	var Appoint=new Appoinment({
		date:req.body.date,
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
	console.log('git appointment controller')
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
		console.log('yyyyyyyyyyyyys',data)

		}
	});
}

// exports.retrive=function(req,res){

// 	Appoinment.find({})
// }