import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
    console.log("Mongodb connected || Host: ", connection.connection.host);
  } catch (error) {
    console.error("Mongodb connection failed! ",  error);
    process.exit(1);
  }
};

export default connectDB;