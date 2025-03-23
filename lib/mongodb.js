import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  const options = {
    useNewUrlParser: true,
    
  };

  try {
    await mongoose.connect(uri, options);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }

  return mongoose.connection;
}

export default connectDB;