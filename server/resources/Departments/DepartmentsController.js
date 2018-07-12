var Departments=require ('./Departments');
var Doctor = require ('../Doctor/Doctor');
//Create departemnts 
exports.createDept=function(req,res){
  var Dept=new Departments({
	nameOfDept:req.body.nameOfDept,
	idOfDept:req.body.idOfDept
	})
  Dept.save(function(err,data){
	if(err){
		return err;
	}

	res.json("Department added");
	})
}
//retrive departments 
exports.retriveDepts=function(req,res){
  Departments.find({}).
  populate('doctorsId').
  exec(function(err,data){ 
	if(err){
		res.json('error')
	}

	res.json(data)
	})
	
}
// add a doctor to the department 
exports.addDoctor=function(req,res){
  var query={idOfDept:req.body.idOfDept};
  Doctor.findOne({userName: req.body.docName})
  .exec(function (err, doctor) {
	if (err) {
		console.error(err);
	}
	if (!doctor) {
		console.error("no doctor with this username");
	} else {
	  Departments.update(query,{$push:{'doctorsId':doctor._id}})
		.exec(function(err,data){
		  if(err){
			  console.error(err)
			}
			res.json(data)
		  })
	}
	})
}
//retrive One Department 
exports.retriveOneDept = function (req, res) {
  Departments.find({nameOfDept:req.params.nameOfDep})
	.populate('doctorsId')
	.exec(function (err, doctor) {
	  if (err) {
	  console.error(err);
	  }
	  if (!doctor) {
		res.json('no doctor');
	  } else {
		res.json(doctor);
	  }
	})
}
//to be continued ....
exports.DeleteDocFromDep=function(req,res){
  var query={idOfDept:req.body.idOfDept};
  Doctor.findOne({userName: req.body.docName}).exec(function (err, doctor) {
	if (err) {
	  console.error(err);
	}
	if (!doctor) {
	  console.error("no doctor with this username");
	} else {
	  Departments.update(query,{$pull:{'doctorsId':doctor._id}})
	  // .populate('doctorsId')
	  .exec(function(err,data){
		if(err){
		  console.error(err)
		}
		  res.json(data)
		})
	  }
		
  })
}

