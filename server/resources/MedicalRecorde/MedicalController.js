var Medical = require('./Medical');
var Users = require('../User/Users');
// creat medical records 
exports.create = function (req, res) {
var mid = new Medical(req.body);
mid.save(function (err, user) {

  if (err) {
    return console.error(err);	
  } 

  res.json('Record saved');
});
};
// search by patientId
exports.search = function (req, res) {
Medical.findOne({patientId: req.body.patientId}).exec(function (err, data) {

  if (err) {
    console.error(err);
  } else if (!data) {
    res.json("No mdeical recorde found, check patient id");
  } else {
    res.json(data);
  }

});
};
//add medical record for the patint 
exports.addRecord = function (req, res) {
Users.findOne({username: req.body.username})
.exec(function (err, user) {

  if (err) {
	console.error(err);
  } else if (!user) {
	console.error("No user found, please check username");
  } else {
	var obj = {
	  description: req.body.description,
	  image: req.body.image,
	  patientId: user._id,
	  doctorId: req.session.ID
	}  
    var mid = new Medical(obj);
	  mid.save();
	  user.medicalRecords.push(mid._id);
	  user.save(function(err) {

  if (err) {
	console.error(err)
  }

  })
  res.json("Record been saved in database");
}
});
}