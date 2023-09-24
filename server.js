import express from "express";
import userroute from "./routes/user.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import morgan from "morgan";

dotenv.config();

const app=express();

mongoose.connect(process.env.DATABASE_URL);

const db=mongoose.connection;

db.on('error',(error)=>console.log(error));

db.once('open',()=>console.log('database connected'));

app.use(express.json());
app.use(morgan('dev'));

app.use(session({secret:"key",cookie:{maxAge:60000}}))

app.use('/user',userroute);

app.listen(3000,()=>console.log("Server started"));