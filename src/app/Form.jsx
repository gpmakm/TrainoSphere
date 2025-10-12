import React from 'react'
import Inputs from './Inputs'

const Form = (props) => {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <h1 style={{color:'white'}}>{props.formName}</h1>
            <Inputs val={props.givenValue} plcontent={props.placeholderContent} identification={props.givenId} Newname={props.Name} typex="text" Changefunction={props.onchange_function} />
            <Inputs val={props.givenValue2} plcontent={props.placeholderContent2} identification={props.givenId2} Newname={props.Name2} typex="text" Changefunction={props.onchange_function2} />
            <Inputs val={props.givenValue3} plcontent={props.placeholderContent3} identification={props.givenId3} Newname={props.Name3} typex="text" Changefunction={props.onchange_function3} />
            <Inputs val={props.givenValue4} plcontent={props.placeholderContent4} identification={props.givenId4} Newname={props.Name4} typex="number" Changefunction={props.onchange_function4} /> {/*Aadhar number and license number*/}
            <Inputs val={props.givenValue5} plcontent={props.placeholderContent5} identification={props.givenId5} Newname={props.Name5} typex="date" Changefunction={props.onchange_function5} />{/*registration date and DOB*/}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form