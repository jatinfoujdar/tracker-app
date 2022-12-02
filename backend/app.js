require("dotenv").config()
const express = require('express')
const app = express()
const userRoutes = require("./routes/userRoutes")

app.use('/', userRoutes)



module.exports = app