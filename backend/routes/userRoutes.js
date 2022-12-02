const express = require("express");
const { home } = require("../controllers/userControllers")
const router = express.Router();


// router.get("/",(req,res)=> {
//     res.send("hello jatin foujdar")
// })

router.get("/",home)




module.exports = router;