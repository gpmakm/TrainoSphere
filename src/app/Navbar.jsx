import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
           <span style={{float:'right'}}> TrainoSphere</span>
            <ul style={{display:'flex', flexDirection:'row', float:'left'}}>

                <li> <a href="/">Home</a> </li>
                <li> <a href="/about">About us</a> </li>
                 <li> <a href="/launch-training">Launch training</a> </li>
                <li><a href="/take-quiz">Give Quiz</a></li>
                <li><a href="/login">Login/Register</a></li>

               

            </ul>
        </nav>
    </div>
  )
}

export default Navbar