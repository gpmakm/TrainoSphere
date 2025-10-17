"use server"
import mongodb from 'mongodb'
import { NextResponse } from "next/server";
import usermodel from '../UserSchema/user-schema'
import mongoose from 'mongoose';
export async function POST(request) {
    mongoose.connect('mongodb+srv://aakarshm826:akm@cluster0.vqfy9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{console.log("Database connected successfully");
    }).catch((e)=>{console.log("Error in connecting to database "+e)});
    const res = await request.json();
    console.log(res);
    const {username, email, contact, aadharNum, dob} = res;
    const user=new usermodel({
        username:username,
        email:email,
        contact:contact,
        aadharNum:aadharNum,
        dob:dob
    })
    await user.save();
     return NextResponse.json({ message: 'User registered successfully', organization: { username, email, contact, aadharNum, dob } }, {
        status: 200,
    }).catch((e)=>{NextResponse.json({message:'Error'+e,status:500})})
}
