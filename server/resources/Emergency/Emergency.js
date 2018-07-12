var mongoose = require('mongoose');
//Emergency Schema 
var EmergencySchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
  longitude : {type: Number },
  latitude: {type: Number},
  createdAt:{ type:Date, default:Date.now }
});
var Emergency = mongoose.model('Emergency', EmergencySchema);

module.exports = Emergency;