import React from 'react'
import dm from '../components/Trainings.json'
const page = () => {
  return (
    <div className='container'>
      <div id='Welcome' style={{display:'flex',flexDirection:'column', width:'auto',height:'auto', padding:8,margin:8}}>
        <div><p>Welcome to</p></div>
        <div><h1>ApdaMitra</h1></div>
        <div>the training platform to teach you managing disasters</div>
      </div>
    </div>
  )
}

export default page
