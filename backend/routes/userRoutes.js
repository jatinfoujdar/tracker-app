const express = require("express");
const { home } = require("../controllers/userControllers")
const router = express.Router();


router.get("/hh",(req,res)=> {
    res.send("hello jatin foujdar")
})

router.get("/",home)




module.exports = router;