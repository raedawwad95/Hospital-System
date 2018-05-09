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
 	.exec(function(err,data){
 		if(err){
 			return handleError(err);
 		}
 		res.json(data)
 	})


 	// LabsResult.find(function(err,data){
		// 	if(err){
		// 	return console.error(err);
		// }

		// res.json(data)
 	// });
 };















 