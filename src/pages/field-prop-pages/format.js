import React from 'react'

function Format() {
  return (
    <div className='card'>
                    <div className='row'>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value="">Character casting</option>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value="">Text Alignment</option>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
            <input type='number' className='form-control' placeholder='Row Span' aria-label='number'/>
          </div>
          <div className='col-6 mt-2'>
            <input type='number' className='form-control' placeholder='Col Span' aria-label='number'/>
          </div>
                    </div>
    </div>
  )
}

export default Format ; 