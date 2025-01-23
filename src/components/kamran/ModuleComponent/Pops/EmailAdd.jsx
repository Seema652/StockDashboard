import React, { useState } from 'react'
import PropertingForm from './PropertingForm'
import { Link } from 'react-router-dom'
import BlockedAdd from './BlockedAdd'

function EmailAdd() {
    const [show, setShow] = useState (false)
  return (
    <div>
     <div style={{color:"black"}}> <PropertingForm/></div>
     <div style={{justifyContent:'end', display : "flex" , marginTop: "2px"}}>
 <Link className="btn btn-primary btn-sm"
    role="button" aria-controls="offcanvasExample" onClick={()=>setShow(true)} >+ New Blocked Email Address</Link></div>
    <div >
    {show && <BlockedAdd show={show} setShow={setShow}/>}
    </div>
    </div>
  )
}

export default EmailAdd
