const express = require("express");
const { home, createUser, getUser, searchUser, deleteUser } = require("../controllers/userControllers");
const { create } = require("../model/userSchema");
const router = express.Router();


router.get("/hh",(req,res)=> {
    res.send("hello jatin foujdar")
})

router.get("/",home)

router.post("/createUser", createUser)

router.get("/getUser",getUser)
router.get("/searchUser/:id", searchUser)
router.delete("/deleteUser/:id",deleteUser)
module.exports = router;