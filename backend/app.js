require("dotenv").config()
const ConnectToDB = require("./config/db")
const express = require('express')
const app = express()
const userRoutes = require("./routes/userRoutes")

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//connext to db
ConnectToDB();



app.use('/', userRoutes)



module.exports = app