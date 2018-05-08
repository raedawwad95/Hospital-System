var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
	
});

var Users = mongoose.model('Users', UsersSchema);

module.exports = Users;