var Departments=require ('./Departments');
exports.createDept=function(req,res){
	var Dept=new Departments({
		nameOfDept:req.body.nameOfDept,
		idOfDept:req.body.idOfDept,
		doctorsId:req.body.doctorsId
	})

	Dept.save(function(err){
		if(err){
			return handleError(err)
		}
		res.json(Dept)
	})

}

exports.retriveDepts=function(req,res){
	Departments.find(function(err,data){
		if(err){
			return handleError(err)
		}
		res.send(data)
	})
}