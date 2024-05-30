import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://mongodb/apolonia_dental");
    console.log("[+] DB connected");
  } catch (error) {
    console.log(error);
  }
};
