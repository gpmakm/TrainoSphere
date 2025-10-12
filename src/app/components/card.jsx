import React from 'react'

const Card = (props) => {
  return (
    <div style={{border:'1px solid black', borderRadius:10, padding:10, margin:10, width:250, height:200, backgroundColor:'white', color:'black', textAlign:'center'}}>
        <div >
            <h3 className='cardTitle'> {props.CardTitle} </h3>
            <p className="cardDescription"> {props.CardDescription} </p>
        </div>
    </div>
  )
}

export default Card