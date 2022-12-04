const express = require("express");
const { home, createUser } = require("../controllers/userControllers");
const { create } = require("../model/userSchema");
const router = express.Router();


router.get("/hh",(req,res)=> {
    res.send("hello jatin foujdar")
})

router.get("/",home)

router.get("/createUser", createUser)



module.exports = router;