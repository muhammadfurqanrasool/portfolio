import mongoose from "mongoose";

export default async function ConnectToDB(){
    const MONGO_URI = process.env.MONGO_URI;
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to Database!")
    }catch(e){
        console.error(e);
    }
}