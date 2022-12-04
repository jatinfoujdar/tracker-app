const User = require("../model/userSchema")

exports.home = (req,res)=>{
    res.send("hello world")
}
exports.createUser = async(req,res) => {
    try {
        const {name ,email} = req.body;
        if(!name && !email){
        throw new Error("name and email both are req")  
        }
        const userExits = await User.findOne({email});
        if (userExits) {
            throw new Error("already in system")
        }
        const user  = await User.create({name,email})
        res.status(201).json({
            success:true,
            message:"user create successfully",
            user
        })
    } 
    catch (error) {
        console.log(error);
    }
}


exports.getUser = async(req,res)=>{
    try {
        const users = await User.find();
        res.send(200).json({
            success:true,
            users,
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}