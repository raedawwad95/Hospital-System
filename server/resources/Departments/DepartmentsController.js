var Departments=require ('./Departments');
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

exports.addDoctor=function(req,res){
	var query={idOfDept:req.body.idOfDept};
	console.log(req.body.docId)
		Departments.update(query,{$push:{'doctorsId':req.body.docId}}).
		populate('doctorsId').
		exec(function(err,data){
			if(err){
				res.send(err)
			}
			res.json(data)
		})
	
}

