import mongoose from "mongoose";

const db=mongoose.connection;
export const emailcheckSignUp=async(req,res,next)=>{
    try {
        if(!req.body.email){
            res.status(400).json({message:"some required fields are missing"});
        }
        const result=await db.collection('usermodels').findOne({email:req.body.email});
        if(result){
            res.status(409).json({message:"email already exist"});
        }else{
            next();
        }
    } catch (error) {
        res.status(500).json({message:"something error",error:error});
        
    }
}

