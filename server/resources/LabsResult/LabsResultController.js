var LabsResult = require('./LabsResult');

exports.Create = function (req, res) {

	var newLabRes= new LabsResult(req.body);
	newLabRes.save(function(err,data){
		if (err){
			return console.error(err);
		}
		res.json("lab result recived ")
	});
};

 exports.Retrive=function(req,res){
 	LabsResult.find(function(err,data){
			if(err){
			return console.error(err);
		}

		res.json(data)
 	});
 };















 