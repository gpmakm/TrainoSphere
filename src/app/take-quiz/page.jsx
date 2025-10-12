"use client"

import React,{useState} from 'react';
import question from '../components/quiz1.json'
const page=()=>{
    const [answers,setAnswers]=useState([]);
    const [answer,setAnswer]=useState()
    const [email,setEmail]=useState()
    const SubmitForm=(e)=>{
        e.preventDefault();
    }
    return(
        <div>
            <form onSubmit={SubmitForm}>
                <input type="email" name="email" id="" className="field" placeholder='Enter your email' style={{border:'1px solid black', borderRadius:10, padding:10, backgroundColor:'white', color:'black',marginBottom:10}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {
                question.map((question,index)=>{
                    return(
                        <div className='questionSection' key={question.id} style={{border:'1px solid white', borderRadius:10, padding:10, margin:10, width:'auto', height:'auto', backgroundColor:'white', color:'black', textAlign:'center'}}>
                            <h4>{question.question}</h4>
                            <ul>
                                <li>{question.options[0]}</li>
                                <li>{question.options[1]}</li>
                                <li>{question.options[2]}</li>
                                <li>{question.options[3]}</li>
                                <li>{question.options[4]}</li>
                            </ul>
                            <input type="text" name={question.answerName} id="" className="field" placeholder='Write the answer here' onChange={(d)=>{setAnswer(e.target.value)
                            }} />
                        </div>
                    )
                })
            }
            <button>Submit</button>
            </form>
        </div>
    )
}
export default page;