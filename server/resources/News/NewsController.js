var News =require ('./News')


// Create News
exports.create=function(req,res){
	var newNews=new News(req.body)
	
	newNews.save(function(err,data){
		if(err){
			console.log(err)
		}
		res.json(data)
	})
}

//Retrive All News sorted from the newest news
exports.Retrive=function(req,res){
	News.find({})
		.sort('-createdAt')
		.exec(function(err,data){
		if(err){
			console.log(err)
		}
		res.json(data)
	})

}
// Delet news based on id 
exports.Delete=function(req,res){
	var id=req.params.id;

	News.findByIdAndRemove({ _id: id }, function (err) {
		if (err) {
			console.log(err);
		}
	});
	res.json('Deleted');
};


