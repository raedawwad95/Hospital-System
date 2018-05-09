var Departments=require ('./Departments');
exports.createDept=function(req,res){
	var Dept=new Departments({
		nameOfDept:req.body.nameOfDept,
		idOfDept:req.body.idOfDept,
		doctorsId:req.body.doctorsId
	})

	Dept.save(function(err,data){
		if(err){
			return err;
		}
		Departments.find({})
		.populate('doctorsId')
		.exec(function(err,dep){
			res.json(dep)
		})
	})

}

exports.retriveDepts=function(req,res){
	Departments.find(function(err,data){
		if(err){
			return err;
		}
		res.json(data)
	})
	// Departments.find({}).populate('doctorsId')
	// 	.exec(function(err,dep){
	// 		res.json(dep)
	// 	})
}

exports.addDoctor=function(req,res){
	var query={idOfDept:req.body.idOfDept};
	console.log(req.body.docId)
		Departments.update(query,{$push:{'doctorsId':req.body.docId}},function(err,data){

			if(err){
				console.log('asaas',data)
				res.send(err);
			}
			res.json(data)
		})

	
}