"use server"

import { NextResponse } from "next/server";
import userModel from '../UserSchema/user-schema'
export async function POST(request) {
    const res = await request.json();
    console.log(res);
    const {username, email, contact, aadharNum, dob} = res;
    const model=userModel.usermodel;
    
    // Here, you would typically add code to save the user data to a database.
    // For demonstration purposes, we'll just return a success message.
    return NextResponse.json({ message: 'User registered successfully', user: { username, email, contact, aadharNum, dob } }, {
        status: 200,
    });
}
