const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    img:String,
    name:String,
    email:String,
    contact:Number,

})
 module.exports=mongoose.model("test",userSchema);