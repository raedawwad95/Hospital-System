var ItDepartment = require('./ItDepartment/ItDepartment.js');
var Doctor = require('./Doctor/Doctor.js');
var LabsTechncians = require('./LabsTechncians/LabsTechncians');

//////////////////////////////////////////
///////// Admin //////////////////////////
// http://localhost:3000/itDep/create ///
// {
// 	"userName" : "ahmad",
// 	"password" : "1234"
// }
ITobj = {
	userName: "admin",
	password: 1234
};

//////////////////////////////////////////
/////////////Doctor///////////////////////
// http://localhost:3000/Doctor/create ///
// {
// 	"userName":"doctor1",
// 	"password":1234,
// 	"fullName":"Ahmad Alyaaqba",
// 	"imageOfDoctor":"https://scontent.famm2-2.fna.fbcdn.net/v/t1.0-9/12717183_10153898273919804_8316330020187629578_n.jpg?_nc_cat=0&_nc_eui2=AeEcDDglI_ysMF6UtZn-_-x7_n3QrmAZgoJcA0AgmkUZI5N0Apd8V7LUQfi-etnXo5BcsaYGW_kXEmPM3bh5urqnn-djsMIP_Y2c3-3K4pJDZA&oh=ec3b383fe066b1c853be36332ee626a5&oe=5B9A3F47",
//     "imageOfId":"http://image.shutterstock.com/z/stock-vector-empty-blank-id-card-vector-illustration-name-tag-with-place-for-photo-blank-template-of-badge-345423488.jpg",
// 	"nationalId":99911115555,
// 	"hospitalId":1,
// 	"spicilityStatus":"Moqeem",
// 	"hoursOfWork":8,
// 	"gender":"Male",
// 	"department":1
// }
var doctorObj = {
	"userName":"doctor1",
	"password":1234,
	"fullName":"Ahmad Alyaaqba",
	"imageOfDoctor":"https://scontent.famm2-2.fna.fbcdn.net/v/t1.0-9/12717183_10153898273919804_8316330020187629578_n.jpg?_nc_cat=0&_nc_eui2=AeEcDDglI_ysMF6UtZn-_-x7_n3QrmAZgoJcA0AgmkUZI5N0Apd8V7LUQfi-etnXo5BcsaYGW_kXEmPM3bh5urqnn-djsMIP_Y2c3-3K4pJDZA&oh=ec3b383fe066b1c853be36332ee626a5&oe=5B9A3F47",
    "imageOfId":"http://image.shutterstock.com/z/stock-vector-empty-blank-id-card-vector-illustration-name-tag-with-place-for-photo-blank-template-of-badge-345423488.jpg",
	"nationalId":99911115555,
	"hospitalId":1,
	"spicilityStatus":"Moqeem",
	"hoursOfWork":8,
	"gender":"Male"
}


//////////////////////////////////////////
/////////////ItTech///////////////////////
// http://localhost:3000/labTech /////////
// {
// 	"username":"lab1",
// 	"password":1234,
// 	"fullName":"Monther",
// 	"id":9998887777444,
// 	"imageOfId":"http://image.shutterstock.com/z/stock-vector-empty-blank-id-card-vector-illustration-name-tag-with-place-for-photo-blank-template-of-badge-345423488.jpg",
// 	"workHour":8,
// 	"personalImgUrl":"https://scontent.famm2-2.fna.fbcdn.net/v/t1.0-9/26239502_10215227096500673_4961225808177115743_n.jpg?_nc_cat=0&_nc_eui2=AeHK5jFBMGAyd7Wy885QVeUPdTPEluGA6ytnx9tex1d1grBDJ5GFv8Tv5hgccoVREJ79bdL7FUyvjr1Xi5yD6I5EuXT-7P6asPFdMibAjQrUjA&oh=1de4277b5c251fa7b0629716ef9b9b46&oe=5B7D681A",
// 	"gender":"Male"
// }
var labObj={
	"userName":"lab1",
	"password":1234,
	"fullName":"Monther",
	"id":9998887777444,
	"imageOfId":"http://image.shutterstock.com/z/stock-vector-empty-blank-id-card-vector-illustration-name-tag-with-place-for-photo-blank-template-of-badge-345423488.jpg",
	"workHour":8,
	"personalImgUrl":"https://scontent.famm2-2.fna.fbcdn.net/v/t1.0-9/26239502_10215227096500673_4961225808177115743_n.jpg?_nc_cat=0&_nc_eui2=AeHK5jFBMGAyd7Wy885QVeUPdTPEluGA6ytnx9tex1d1grBDJ5GFv8Tv5hgccoVREJ79bdL7FUyvjr1Xi5yD6I5EuXT-7P6asPFdMibAjQrUjA&oh=1de4277b5c251fa7b0629716ef9b9b46&oe=5B7D681A",
	"gender":"Male"
}


var test = function() {
	var newItDepartment = new ItDepartment(ITobj);
	newItDepartment.save();
	//
	var doctor = new Doctor(doctorObj);
	doctor.save();
	//
	var newLabTech= new LabsTechncians(labObj);
	newLabTech.save();
}
test();