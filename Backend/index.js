const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

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
app.use(cors({
  origin: 'http://localhost:5173', // Specify your frontend origin
  credentials: true, // Allow credentials (cookies, headers, etc.)
}));
app.use("/api",authRoute);
app.use("/api",postRoute);



app.listen(process.env.PORT,()=>{
  connectDB();
  console.log(`server is running on Port ${process.env.PORT}`);
})