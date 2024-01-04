import mongoose from "mongoose";

const connnection = {};

export const connectToDb = async () => {
  try {

    if (connnection.isConnected === 1) {
      console.log("Using existing connection");
      return;
    }

    await mongoose.connect(process.env.MONGO);
    connnection.isConnected = mongoose.connection.readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}


