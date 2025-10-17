"use server"
import mongodb from 'mongodb'
import orgmodel from '../organizationSchema/org-schema';
import { NextResponse } from 'next/server';
export async function POST(request) {
    mongodb.connect(process.env.MONGODB_URI).then(()=>{console.log('Connected to MongoDB')}).catch((e)=>{console.log('Error connecting to MongoDB'+e)})
    const res = await request.json();
    console.log(res);
    const {orgname, email, contact, licenseNum, doe} = res;
    const organization=new orgmodel({
        orgname:orgname,
        email:email,
        contact:contact,
        licenseNum:licenseNum,
        doe:doe
    })
    // Here, you would typically add code to save the organization data to a database.
    // For demonstration purposes, we'll just return a success message.
    await organization.save();
    return NextResponse.json({ message: 'Organization registered successfully', organization: { orgname, email, contact, licenseNum, doe } }, {
        status: 200,
    }).catch((e)=>{NextResponse.json({message:'Error'+e,status:500})})
}