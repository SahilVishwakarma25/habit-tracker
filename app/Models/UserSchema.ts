import { EmailAddress } from "@clerk/nextjs/server";
import { timeStamp } from "console";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
const userSchema=new mongoose.Schema(
    {
        clerkUserId:{type: 'string',unique:true,required:true},
        EmailAddress:{type: 'string',required:true},
    
    },
    {timestamps:true}

);
const User =mongoose.model.User||mongoose.model("User",userSchema)
export default User;

