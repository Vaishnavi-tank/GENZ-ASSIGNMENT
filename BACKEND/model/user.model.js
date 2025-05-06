import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    assignment:{
        type:String,
        required:true
    },
    word:{
        type:Number,
        required:true,
    },
    deadline:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    comment:{
type:String
    }
   
})
const User=mongoose.model("User",userSchema);
export default User;