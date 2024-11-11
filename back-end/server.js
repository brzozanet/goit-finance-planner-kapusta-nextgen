import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, { dbName: "db-kapusta-01" });
    console.log("Succesfully connected to MongoDB!!!");
    console.log("Server running. Use our API on port: ", PORT);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
