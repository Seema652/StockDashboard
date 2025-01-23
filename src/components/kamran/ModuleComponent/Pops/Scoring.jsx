import React from 'react'

function Scoring() {
  return (
    <div className='card'>
      <div className='row'>
      <div className='col-6 mt-2'>
<input type='text' className='form-control' placeholder='Activity Peridos(In Days)'/>
            </div>
            <div className='col-6 mt-2'>
<input type='text' className='form-control' placeholder='Lead Stage to include'/>
            </div>
            <div className='col-6 mt-2'>
<input type='text' className='form-control' placeholder='Lead activities to include'/>
            </div>
      </div>
    </div>
  )
}

export default Scoring
