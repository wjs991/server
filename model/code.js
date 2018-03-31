var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var codeSchema = mongoose.Schema({
    writer:{type:String,require:true},
    gameName:{type:String},
    code:{type:String},
    mode:{type:String}
})


var code = mongoose.model('code',codeSchema);
module.exports = code;