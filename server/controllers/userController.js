import User from "../models/User.js";

export const getUserDetails = async (req,res) => {
    const { userId } = req.params;
    try{
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({msg:"User not found"})
        }
        return res.status(201).json(user);

    }
    catch(error){
        console.log(error)
 return res.status(404).json({ msg: "User not found" });
    }
}