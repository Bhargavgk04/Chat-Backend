import e from "express";
import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("MongoDB Connected");
    }).catch((e) => {
        console.log(e);
    })
};
export default connectDB;