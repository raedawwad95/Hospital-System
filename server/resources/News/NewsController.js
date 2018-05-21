var News =require ('./News')



exports.Creat=function(req,res){
	var newNews=new News(req.body)
	console.log("my name is TAl",req.body)
	newNews.save(function(err,data){
		if(err){
			console.log(err)
		}
		res.json(data)
	})
}


exports.Retrive=function(req,res){

}

exports.Delete=function(req,res){

}