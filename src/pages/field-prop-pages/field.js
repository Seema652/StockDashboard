import React from 'react'

function Fields() {
  return (
    <form>
                <div className='card'>
                    <div className='row'>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value="">Group Name</option>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value="">Data Type</option>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value="">Control Type</option>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value="">Display Type</option>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value="">Behavior</option>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Caption' aria-label='name'/>
          </div>
            <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Name' aria-label='name'/>
          </div>
          <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Min.Size' aria-label='name'/>
          </div>
          <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Max.Size' aria-label='name'/>
          </div>
          <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Default Value' aria-label='name'/>
          </div>
          <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Tool-Tips Text ' aria-label='name'/>
          </div>
          <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Banner Text' aria-label='name'/>
          </div>
          <h6 className='border-bottom p-2'>Validation</h6>
          <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Regular Expression' aria-label='name'/>
          </div>
          <div className='col-6 mt-2'>
            <input type='text' className='form-control' placeholder='Error Message' aria-label='name'/>
          </div>
                    </div>
                </div>
            </form>
  )
}

export default Fields ;