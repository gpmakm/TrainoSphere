"use client"

import React,{useState} from 'react'
import Form from '../Form'

const page = () => {
    const [orgname, setOrgname]=useState("");
        const [email, setEmail]=useState("");
        const [license, setLicense]=useState("");
        const [doe, setDoe]=useState("");
        const [contact, setContact]=useState("");

const handleSubmit=async(e)=>{
    e.preventDefault();
    const data={orgname,email,contact,licenseNum:license,doe};
    const response=await fetch('/backend/org-registration', {
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
 <Form formName="Organization Registration" Name="orgname" Name2="email" Name3="Contact" Name4="AadharNum" Name5="DOB" givenId="username"  givenValue={orgname} givenValue2={email} givenValue3={contact} givenValue4={license} givenValue5={doe} placeholderContent="Enter your organization name" placeholderContent2="Enter your email" placeholderContent3="Enter your contact " placeholderContent4="Enter your license  number" onchange_function={(e)=>{setOrgname(e.target.value)}} onchange_function2={(e)=>{setEmail(e.target.value)}} onchange_function3={(e)=>{setContact(e.target.value)}} onchange_function4={(e)=>{setLicense(e.target.value)}} onchange_function5={(e)=>{setDoe(e.target.value)}}   />
    </div>
  )
}

export default page