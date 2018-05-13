var db = require('../config');
var Dept = require('../models/Dept');

var Depts = new db.Collection();

Links.model = Dept;

module.exports = Depts;