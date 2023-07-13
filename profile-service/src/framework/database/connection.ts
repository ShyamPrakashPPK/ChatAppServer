import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        // mongodb connection string
        mongoose.set("strictQuery", false);
        const con = await mongoose.connect('mongodb://127.0.0.1:27017/chatApp');

        console.log(`MongoDB connected to chatApp`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}