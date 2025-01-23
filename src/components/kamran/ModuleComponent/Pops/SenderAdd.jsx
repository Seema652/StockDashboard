import React, { useState } from 'react'
import PropertingForm from './PropertingForm'
import { Link } from 'react-router-dom'
import SenderPop from './SenderPops'

function SenderAdd() {
    const [show, setShow] = useState (false)
  return (
    <div>
     <div className='text-black'> <PropertingForm/></div>
      <div style={{justifyContent:'end', display : "flex" , marginTop: "2px"}}>
 <Link className="btn btn-primary btn-sm"
    role="button" aria-controls="offcanvasExample" onClick={()=>setShow(true)} 
    >+ New Restrict Email Sender</Link></div>
    <div >
    {show && <SenderPop show={show} setShow={setShow}/>}
    </div>
    </div>
  )
}

export default SenderAdd
