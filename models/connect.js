const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testdatabase").then(()=>{
    console.log("you are connected to your data");
}).catch((err)=>{
    console.log(err);
})