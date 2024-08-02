import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

const URL:string  = process.env.MONGO_URI || ""

const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(URL)
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB   