var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/testdb';
mongoose.connect(mongoURI);

var db1 = mongoose.connection;
db1.on('error', console.error.bind(console, 'connection error:'));
db1.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db1;
