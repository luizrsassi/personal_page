import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectDatabase = () => {
    console.log("Wait connecting to the database");

    mongoose.connect(MONGODB_URI)
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error))

};

export default connectDatabase;