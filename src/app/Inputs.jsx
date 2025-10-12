import React from 'react'

const Inputs = (props) => {
  return (
    <div>
        <input type={props.typex} name={props.Newname} id={props.identification} className="field" value={props.val} placeholder={props.plcontent} onChange={props.Changefunction} />
    </div>
  )
}

export default Inputs