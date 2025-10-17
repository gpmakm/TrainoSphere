import React from 'react'
import Image from 'next/image'
const WorkShopCard = (props) => {
  return (
    <div style={{border:'1px solid black', borderRadius:10, padding:10, margin:10, width:250, height:200, backgroundColor:'white', color:'black', textAlign:'center',padding:15}}>
        <div >
          <Image width={250} height={150} alt={props.workshopName} src={props.source}/>
            <h3 className='cardTitle'> {props.CardTitle} </h3>
            <p className="cardDescription"> {props.CardDescription} </p>
            <p style={{color:'green'}}>Coming soon</p>
        </div>
    </div>
  )
}

export default WorkShopCard