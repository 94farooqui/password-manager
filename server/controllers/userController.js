import User, { masterPasswordSchema } from "../models/User.js";
import { encrypt } from "../utils/securePassword.js";

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

export const setupMaster = async (req, res) => {
  const { password } = req.body;
  console.log(req.body)
  try {
    const encryptedMaster = encrypt(password);
    const user = await User.findById(req.user.id)

    if(!user){
        return res.status(404).send("User not found")
    }
    // //console.log("Encrypted",encryptedMaster)
    // const masterPassword = new masterPasswordSchema({
    //   password: encryptedMaster,
    // });
    // user.master = masterPassword;
    user.master = {password: encryptedMaster};
    await user.save()

    // const newPassword = await Password.create({
    //   userId: req.user.id,
    //   encryptedPassword,
    //   ...req.body,
    // });
    res.status(201).send("Creds added");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMaster = async (req,res) => {
  try{
    const user = await User.findById(req.user.id)

    if(user.master.password == process.env.ENCRYPTION_KEY){
      return res.status(201).json(user.master.password)
    }
    return res.status(200).json(user.master.password);
  }
  catch(error){
    return res.status(500).send("Something went wrong on server")
  }
}