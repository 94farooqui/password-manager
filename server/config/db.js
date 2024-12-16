import mongoose from "mongoose";



const connectDB = async () => {
    const mongo_uri = process.env.MONGO_URI
    try{
        await mongoose.connect(mongo_uri)
        console.log("Database Connected")
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB