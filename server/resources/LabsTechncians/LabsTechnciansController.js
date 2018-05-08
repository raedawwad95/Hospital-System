var LabsTechncians = require('./LabsTechncians');

exports.Create = function (req, res) {
 
	var newLabTech= new LabsTechncians(req.body);
	newLabTech.save(function(err,data){
		if (err){
			return console.error(err);
		}
		res.json("lab Techncians recived ")
	});
};

 exports.Retrive=function(req,res){
 	LabsTechncians.find(function(err,data){
			if(err){
			return console.error(err);
		}

		res.json(data)
 	});
 };

