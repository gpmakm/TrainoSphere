"use server"

import { NextResponse } from 'next/server';
export async function POST(request) {
    const res = await request.json();
    console.log(res);
    const {orgname, email, contact, licenseNum, doe} = res;
    // Here, you would typically add code to save the organization data to a database.
    // For demonstration purposes, we'll just return a success message.
    return NextResponse.json({ message: 'Organization registered successfully', organization: { orgname, email, contact, licenseNum, doe } }, {
        status: 200,
    });
}