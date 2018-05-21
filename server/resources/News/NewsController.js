var News =require ('./News')



exports.create=function(req,res){
	var newNews=new News(req.body)
	
	newNews.save(function(err,data){
		if(err){
			console.log(err)
		}
		res.json(data)
	})
}


exports.Retrive=function(req,res){
	News.find(function(err,data){
		if(err){
			console.log(err)
		}
		res.json(data)
	})

}

exports.Delete=function(req,res){
	

}