import React from 'react'
import { Link } from 'react-router-dom'

function OptionImportForm() {
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h4 className='tbl-caption text-light'>Option</h4>
      </div>
      <h6 className='border-bottom p-2'>Account Info</h6>
      <form>
        <div className=''>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="">Assign To</option>
                <option className='fw-normal' value="">Dharani</option>
            </select>
        </div>
        <h6 className='border-bottom p-2'>Parent and Group Field Details</h6>
        <div className='row'>
            <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="">Is Group Field</option>
                <option className='fw-normal' value="">Dharani</option>
            </select>
            </div>
            <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="">Parent Group Field</option>
                <option className='fw-normal' value="">Dharani</option>
            </select>
            </div>
            <h6 className='border-bottom p-2'>Action on duplicate record</h6>
            <div className='col-2 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='daily' />
                        <label className='fw-normal'>None</label>
                    </div>
                    <div className='col-2 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='daily' />
                        <label className='fw-normal'>Update</label>
                    </div>
                    <div className='col-2 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='daily' />
                        <label className='fw-normal'>Skip</label>
                    </div>
                    <div className='col-2 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='daily' />
                        <label className='fw-normal'>Clone</label>
                    </div>
                    <h6 className='border-bottom p-2'>New Action Record</h6>
                    <div className='col-2 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='daily' />
                        <label className='fw-normal'>Insert</label>
                         </div>
                         <div className='col-2 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='daily' />
                        <label className='fw-normal'>Skip</label>
                    </div>
                    <h6 className='border-bottom p-2'>Advance Option</h6>
                    <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="">Character encoding</option>
                <option className='fw-normal' value="">Unicode(UFT-8)</option>
                <option className='fw-normal' value="">Unicode(UFT-16)</option>
                <option className='fw-normal' value="">ISO</option>
            </select>
            </div>
            <h6 className='border-bottom p-2'>Date and Time Setting</h6>
            <div className='col-6 mt-2 '>
                <input type='date' className='form-control' name='date' id='date'
                value=""></input>
            </div>
            <div className='col-6 mt-2 '>
                <input type='time' className='form-control' name='time' id='time'
                value=""></input>
            </div>
            <h6 className='border-bottom p-2'>Currency Setting</h6>
            <div className='col-6 mt-2'>
                <select className='form-control' aria-label='select'>
                    <option className='fw-normal' value="">Currency ()</option>
                    <option className='fw-normal' value="">Indian ()</option>
                    <option className='fw-normal' value="">USA ()</option>
                    <option className='fw-normal' value="">Suadi Arab ()</option>
                </select>
            </div>
            <div className='col-6 mt-2 '>
                <input type='text' className='form-control' name='text' id='text'
                placeholder='Currency Significant Digit'></input>
            </div>
            <div className='col-6 mt-2 '>
                <input type='text' className='form-control' name='text' id='text'
                placeholder='1000s Separator'></input>
            </div>
            <div className='col-6 mt-2 '>
                <input type='text' className='form-control' name='text' id='text'
                placeholder='Decimal Symbol'></input>
            </div>
        </div>
        <div className='mt-2'>
                        <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
                        <button
                            className="btn btn-primary me-1"
                            type="submit">
                            Next
                        </button>
                    </div>
      </form>
    </div>
  )
}

export default OptionImportForm
