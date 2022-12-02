const mongoose = require("mongoose")
const ConnectToDB = ()=>{
    mongoose.connect(process.env.crud).then().catch()
}