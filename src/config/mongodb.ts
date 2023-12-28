import mongoose from "mongoose";

const connectMongoDB = async function (uri: string) {
  try {
    await mongoose.connect(uri);
    console.log("✅ Database connection is successfull");
  } catch (err) {
    console.log("Error connecting to the database", err);
  }
};

export default connectMongoDB;
