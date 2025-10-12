import React from 'react'
import training from '../components/quiz1-answers.json'
import Card from '../components/card'
const page = () => {
  return (
    <div style={{color:'white',padding:8,cursor:'pointer'}}>
      <h1>{training.programTitle}</h1>
      <h3><span> <u>Objective</u> </span>: <br />
      {training.objective}
      </h3> <div>
        <p>Duration: {training.duration} </p>
      </div>
        {
          training.modules.map((content,index)=>{
            return(
              <div key={index} style={{border:'1px solid white',margin:'10px',padding:'10px'}}>
                <h4 style={{padding:5}}><u>{content.title}</u></h4>
                <p>{content.topics.join(", ")}</p>
                <div> <p><b>Precautions</b>:</p>
                  <p style={{border:'1px solid white',padding:7}}>{content.precautions}  </p>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default page