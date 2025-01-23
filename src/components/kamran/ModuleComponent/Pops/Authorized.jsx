import React from 'react'
import PropertingForm from './PropertingForm'

function Authorized() {
  return (
    <div className=''>
      <input type='text' className='form-control' placeholder='Name'></input>
     <div className='text-black'> <PropertingForm/></div>
      <div style={{margin: "10px 0px"}}> 
     <button type="button" class="btn btn-lg btn-primary" >Save</button>
     <button type="button" class="btn btn-secondary btn-lg" >Cancel</button>
     </div>
    </div>
  )
}

export default Authorized
