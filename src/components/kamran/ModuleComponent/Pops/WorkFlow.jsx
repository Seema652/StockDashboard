import React, { useState } from 'react'
import PropertingForm from './PropertingForm'
import { Link } from 'react-router-dom'
import WorkFlowPop from './WorkFlowPop'

function WorkFlow() {
    const [show, setShow] = useState (false)
  return (
    <div>
    <div className='text-black'> <PropertingForm/></div>
    <div style={{justifyContent:'end', display : "flex" , marginTop: "2px"}}>
 <Link className="btn btn-primary btn-sm"
    role="button" aria-controls="offcanvasExample" onClick={()=>setShow(true)} >+Work Flow</Link></div>
    <div >
    {show && <WorkFlowPop show={show} setShow={setShow}/>}
    </div>
    </div>
  )
}

export default WorkFlow
