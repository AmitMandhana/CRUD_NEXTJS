import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://amitmandhana1:a8013255265@cluster0.mjuvo.mongodb.net');
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
