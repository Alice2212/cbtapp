var mongoose = require("mongoose");

var adminSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    username:String,
    password:String,
    confirm_password:String,
    email:String
});

module.exports = mongoose.model("Admin", adminSchema);