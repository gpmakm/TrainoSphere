"use server"
import mongodb from 'mongodb'
import { NextResponse } from "next/server";
import usermodel from '../UserSchema/user-schema'
export async function POST(request) {
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
    await user.save().NextResponse.json({ message: 'User registered successfully', user: { username, email, contact, aadharNum, dob } }, {
        status: 200,
    }).catch((e)=>{NextResponse.json({message:'Error'+e,status:500})})
}
