const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
    name:{
        type:String,
        required:[true, "name is required"],
        trim:true,
        maxLength: [25 , "name must be less than 20 character"],
    },
    email:{
        type:String,
        required:[true , "email is compalsery"],
        unique:true,
    },
  
});

module.exports = module.model("user",userSchema )