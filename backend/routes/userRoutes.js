const express = require("express");
const { home, createUser, getUser, searchUser, deleteUser, updateUser } = require("../controllers/userControllers");
const { create } = require("../model/userSchema");
const router = express.Router();


router.get("/hh",(req,res)=> {
    res.send("hello jatin foujdar")
})

router.get("/",home)

router.post("/createUser", createUser)
router.post("/updateUser", updateUser)
router.get("/getUser",getUser)
router.get("/searchUser/:id", searchUser)
router.delete("/deleteUser/:id",deleteUser)
module.exports = router;