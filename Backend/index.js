const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv');
const authRoute = require('./routes/auth')

//database
const connectDB=async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URL);
      console.log("Database is connected Successfully");
  } catch (error) {
    console.log(error);
  }
}
//Middlewares
app.use(express.json());
dotenv.config();
app.use("/api",authRoute);


app.listen(process.env.PORT,()=>{
  connectDB();
  console.log(`server is running on Port ${process.env.PORT}`);
})