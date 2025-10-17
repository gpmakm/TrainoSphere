"use client"

import React, { useState } from 'react'
import Form from '../Form'
import Link from 'next/link';
const page = () => {
    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [aadhar, setAadhar]=useState("");
    const [dob, setDob]=useState("");
    const [contact, setContact]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={username,email,contact,aadharNum:aadhar,dob};
        const response=await fetch('/backend/register-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result=await response.json();
        alert(result.message);
    }
  return (
    <div>
        <Form formName="User Registration" Name="username" Name2="email" Name3="Contact" Name4="AadharNum" Name5="DOB" givenId="username"  givenValue={username} givenValue2={email} givenValue3={contact} givenValue4={aadhar} givenValue5={dob} placeholderContent="Enter your username" placeholderContent2="Enter your email" placeholderContent3="Enter your contact " placeholderContent4="Enter your aadhar number"  onchange_function={(e)=>{setUsername(e.target.value)}} onchange_function2={(e)=>{setEmail(e.target.value)}} onchange_function3={(e)=>{setContact(e.target.value)}} onchange_function4={(e)=>{setAadhar(e.target.value)}} onchange_function5={(e)=>{setDob(e.target.value)}}  handleSubmit={handleSubmit} />
        <Link style={{color:'white'}} href="/org-register">Not a user? Signup as Organization Here</Link>
    </div>
  )
}

export default page