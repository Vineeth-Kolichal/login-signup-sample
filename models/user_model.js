import mongoose from "mongoose";
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestaps:true
});

export default mongoose.model("userModel",userSchema);