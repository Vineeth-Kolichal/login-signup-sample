import UserModel from "../models/user_model.js"
import bcrypt from 'bcrypt';
import mongoose from "mongoose";

const db=mongoose.connection;

export const signup = async (req, res) => {
    try {
        const { name, age, email, phone, password } = req.body
         bcrypt.hash(password, 10).then(async(password) => {
            const userModel = new UserModel({
                name,
                age,
                email,
                phone,
                password
            });
            const userdata = await userModel.save();
            res.status(201).json({ message: "signup successfully", data: userdata });
        });
    } catch (error) {
        res.status(400).json({ message: "Error while sign up", error: error });
    }
}

export const login = async(req, res) => {

    try {
        const result=await db.collection('usermodels').findOne({email:req.body.email});
        if(result){
            bcrypt.compare(req.body.password,result.password).then((status)=>{
                if(status){
                    req.session.loggedIn=true;
                    req.session.user=result;
                    res.status(200).json({message:"Successfully loggedin"});
                }else{
                    res.status(200).json({message:"login failed",error:"username and password does not match"});
                }
            });
          
        }else{
            res.status(404).json({message:"User not found"});
        }
        
    } catch (error) {
        res.status(500).json({message:"something error",error:error});  
    }

}

export const dashboard = (req, res) => {
    res.status(200).json({ message: "welcome: "+req.session.user.name });
}