"use client"

import React, { useState } from 'react'
import Form from '../Form'
import Link from 'next/link'
const page = () => {
    const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={email,password};
        console.log(data);
        fetch('/backend/login-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" name="email" id="email" className="field" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input type="password" name="password" id="password" className="field" placeholder='Enter the password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <button>Login</button>
          <Link style={{color:'blue'}} href="/user-register">New User? Register Here</Link>
        </form>
    </div>
  )
}

export default page