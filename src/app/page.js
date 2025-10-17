"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Card from "./components/card";
import Card frpm

export default function Home() {
  const [name, setname] = useState();
  const handleChange=(e)=>{
  
    setname(e.target.value)
  }
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    fetch('/submit',{method:"POST",body:JSON.stringify(name)}).then((res)=>{
      res.json();
    }).catch((e)=>{console.log(`Error is ${e}`);}
    )

  }
  return (
   
   <>
 <div className='container'>
      <div id='Welcome' style={{display:'flex',flexDirection:'column', width:'auto',height:'auto', padding:8,margin:8, color:'white', textAlign:'center'}}>
        <div><p>Welcome to</p></div>
        <div><h1 id="title">TrainoSphere</h1></div>
        <div>the training platform to teach you managing disasters</div>
      </div>
     
      <div id='cardContainer' style={{display:'flex',flexDirection:'row', width:'auto',height:'auto', padding:8,margin:8,marginTop:25}}>
         <Card CardTitle="Register" CardDescription="Register as a user to access training modules and resources."/>
        <Card CardTitle="Get Trained" CardDescription="Register your organization to manage and coordinate disaster response efforts."/>
        <Card CardTitle="Know your speciality and get recommendation" CardDescription="Login to access your account and manage your training modules or organization details."/>
        </div>
        <a href="/recommendations" style={{width:'auto', height:'auto',padding:8, backgroundColor:'darkred',color:'white',border:'2px solid darkred',margin:15}}>Get recommendations</a>
    </div>
   </>
  );
}
