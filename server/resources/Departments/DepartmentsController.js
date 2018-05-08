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

exports.addDoctor=function(req,res){
	var query={idOfDept:req.body.idOfDept};
		Departments.update(query,{$push:{'doctorsId':req.body.docId}},function(err,data){
			if(err){
				res.send(err);
			}
			res.send(data)
		})

	
}