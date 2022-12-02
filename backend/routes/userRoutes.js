const express = require("express");
const router = express.Router();


router.get("/",(req,res)=> {
    res.send("hello jatin foujdar")
})

module.exports = router;