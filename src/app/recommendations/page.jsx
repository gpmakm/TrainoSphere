import React from 'react'
import recommendation from '../Recommendations.json'
const page = () => {
    const earthquake=recommendation.filter(person=>person.specaility==='Earthquake management')
    const flood=recommendation.filter(person=>person.specaility==='Flood management')
    const tsunami=recommendation.filter(person=>person.specaility==='Tsunami management')
  return (
    <div className='recCardContainer'>
        <h2 style={{color:'white'}}>Recommendations for disaster managements</h2>
       <div className='recCard'>
         
        <h3>Earthquake specialists</h3>
        {
            

            earthquake.map((content,index)=>{
                return(
                    <li key={index}>{content.email}</li>
                )
            })
        }
       </div>
<div className="recCard">
    
        <h3>Flood specialists</h3>
        {
            

            flood.map((content,index)=>{
                return(
                    <li key={index}>{content.email}</li>
                )
            })
        }
</div>
<div className="recCard">
   
        <h3>Tsunami specialists</h3>
        {
            

            tsunami.map((content,index)=>{
                return(
                    <li key={index}>{content.email}</li>
                )
            })
        }
</div>
    </div>
    
  )
}

export default page