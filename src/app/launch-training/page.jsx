import React from 'react'
import training from '../components/quiz1-answers.json'
// import em from '.../public/em.jpeg'
import WorkshopCard from '../components/WorshopCard'
const page = () => {
  return (
    <div style={{color:'white',padding:8,cursor:'pointer'}}>
      <h1>{training.programTitle}</h1>
      <h3><span> <u>Objective</u> </span>: <br />
      {training.objective}
      </h3> <div>
        <p>Duration: {training.duration} </p>
      </div>
      <div>
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
        <div className="workshops">
  <WorkshopCard
    source="/flood.jpg"
    CardTitle="Flood Management Workshop"
    CardDescription="Learn flood preparedness, rescue techniques, and resource management."
  />
  <WorkshopCard
    source="/earthquake.jpg"
    CardTitle="Earthquake Response Training"
    CardDescription="Understand seismic safety, evacuation plans, and post-disaster relief coordination."
  />
  <WorkshopCard
    source="/fire.jpg"
    CardTitle="Fire Safety & Evacuation Drill"
    CardDescription="Hands-on training on firefighting, alarm response, and emergency exit protocols."
  />
  <WorkshopCard
    source="/cyclone.jpg"
    CardTitle="Cyclone and Storm Preparedness"
    CardDescription="Training on early-warning systems, shelter setup, and community communication."
  />
  <WorkshopCard
    source="/chemical.jpg"
    CardTitle="Chemical & Industrial Disaster Management"
    CardDescription="Managing chemical spills, toxic leaks, and ensuring workplace safety."
  />
  <WorkshopCard
    source="/health.jpg"
    CardTitle="Health & Pandemic Response"
    CardDescription="Learn outbreak control, PPE handling, and public health awareness methods."
  />
</div>

       
    </div>
  )
}

export default page