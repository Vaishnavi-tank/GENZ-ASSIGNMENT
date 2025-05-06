// const express = require('express')
// const dotenv = require('dotenv')
import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './Route/user.route.js';
import contactRoute from './Route/contact.route.js';
import cors from 'cors';
 const app = express();
 app.use(cors());
const PORT = process.env.PORT ||4000;
app.use(express.json());
dotenv.config();
try {
   //connection to mongo db

    mongoose.connect('mongodb://localhost:27017/orderAssignments');
    console.log("Connected to mongoDB")
} catch (error) {
    console.log("ERROR : ",error);
}

//Defining routes
app.use("/user",userRoute);
app.use("/contact",contactRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})