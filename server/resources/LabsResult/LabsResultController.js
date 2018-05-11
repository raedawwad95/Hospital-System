var LabsResult = require('./LabsResult');

exports.Create = function (req, res) {

	var newLabRes= new LabsResult(req.body);
	newLabRes.save(function(err,data){
		if (err){
			return console.error(err);
		}
		res.json(data)
	});
};

 exports.Retrive=function(req,res){
 	LabsResult.find()
 	.populate('labTechnicianId')
 	.populate('patientId')
 	.exec(function(err,data){
 		if(err){
 			console.error(err);
 		}
 		if(!data){
 			res.json("there is no data")
 		}else{
 			res.json(data)
 		}
 	});


 };















 