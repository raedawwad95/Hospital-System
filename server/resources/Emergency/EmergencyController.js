var Emergency = require('./Emergency');

//Creat function to creat emergency call  
exports.create = function (req, res) {
	var ER = new Emergency(req.body);
	ER.save(function(err, emergency) {
		if (err) {
			console.error(err);
		}
		res.json(emergency);
	})
};
