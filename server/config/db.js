import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI

const connectDB = async () => {
    try{
        await mongoose.connect(mongo_uri)
        console.log("Database Connected")
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB