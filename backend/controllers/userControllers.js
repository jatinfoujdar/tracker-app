exports.home = (req,res)=>{
    res.send("hello world")
}
exports.createUser = async(req,res) => {
    try {
        const {name ,email} = req.body;
        if(!name || !email){
        throw new Error("name and email both are req")  
        }
        const userExits = await user.findOne({email});
        if (userExits) {
            throw new Error("already in system")
        }
        const User  = await user.create({name,email})
        res.status(201).json({
            success:true,
            message:"user create successfully"
        })
    } 
    catch (error) {
        
    }
}
