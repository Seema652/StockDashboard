import React from 'react'
import { Button } from 'react-bootstrap'
function Heading() {
  return (
   <div className='bg-light 100 'style={{textAlign: "center", display: "flex", justifyContent : "space-evenly" }}>
    <button type="button" class="btn btn-lg btn-primary" disabled>Save</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Cancel</button>
    <h5 className='h'style={{textAlign: "right", marginLeft : "auto"}}>| Mandatory</h5>
    
   </div>
  )
}

export default Heading
