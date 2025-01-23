import React from 'react'

function Properties() {
    
  return (
    <div className='card'>
        <form>
    <div className='row'>
    <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Audit Trail</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Copy From Parent</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Can not be Exported</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Can not be Imported</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Include in Create</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Not Availables for Reports</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Merge feild</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Mass updateable</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Spell Check</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Allow as Parameter</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Do not apply User Module Restricted Groups</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Do not Apply User Module Access Rights</label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Allow to scan Barcode </label>
           </div>
           <div className=' gap-1 col-6'>
             <input type='checkbox' className='form-check-input' aria-label='check'  />
             <label className='fw-normal'>Encrypt data at storage level</label>
           </div>
    </div>
    </form>
    </div>
  )
}

export default Properties
