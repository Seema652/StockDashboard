import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RulesPop from './RulesPop'
import PropertingForm from './PropertingForm'

function NewRules() {
    const [show, setShow] = useState (false)
  return (
    <div>
         <div style={{justifyContent:'end', display : "flex" , marginTop: "2px"}}>
 <Link className="btn btn-primary btn-sm"
    role="button" aria-controls="offcanvasExample" onClick={()=>setShow(true)} >+ New Rules</Link></div>
    <div >
    {show && <RulesPop show={show} setShow={setShow}/>}
    </div>
    <div >
       <div style={{color : "black"}}> <PropertingForm/></div>
      </div>
    </div>
  )
}

export default NewRules
