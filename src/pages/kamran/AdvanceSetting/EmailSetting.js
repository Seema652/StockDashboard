import React from 'react'
import { Link } from 'react-router-dom'
function EmailSetting() {
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h3 className='ext-light tbl-caption tbl-caption-2'>Email Setting</h3>
      </div>
      <h6 className='border-bottom p-2'>Incoming Server</h6>
      <form>
        <div className='row mx-auto'>
            <div className='col-6 mt-2'>
                <select className='form-control' aria-label='name'>
                    <option value="">Server Type</option>
                    <option>POP3</option>
                    <option>IMAP</option>
                    <option>Exchange/Office365</option>
                </select>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Incoming Address'></input>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Incoming Port No'></input>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Checking Inc. Mails Every'></input>
            </div>
            <h6 className='border-bottom p-2'>  Use Secure Connection</h6>
            <div className='d-flex align-items-center gap-1 col-6'>
                <input type='radio' className='form-check-input'name='day'/>
                <label className="form-check-label" htmlFor="daily">Never</label>
            </div>
            <div className='d-flex align-items-center gap-1 col-6'>
                <input type='radio' className='form-check-input'name='day'/>
                <label className="form-check-label" htmlFor="daily">TLS</label>
            </div>
            <div className='d-flex align-items-center gap-1 col-6'>
                <input type='radio' className='form-check-input'name='day'/>
                <label className="form-check-label" htmlFor="daily">SSl</label>
            </div>
            <div className='col mt-2'>
                <input type='text' className='form-control' aria-label='name'
                disabled placeholder='SSL Socket Port'/>
            </div>
            <h6 className='border-bottom p-2'>Outgoning Server</h6>
            <div className='col-6 mt-2'>
                <select className='form-control' aria-label='name'>
                    <option value="">Authentication Type</option>
                    <option>Binary</option>
                    <option>Plain</option>
                    <option>Exchange/Office365</option>
                </select>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Outgoing Address'></input>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Outgoing Part No '></input>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Display Label'></input>
            </div>
            <div className='col-6 mt-2 d-flex gap-1'>
                <input type='checkbox' className='form-check-input'name='day'/>
                <label className="fw-normal" htmlFor="daily">
                Req. Secure Password Authentication
                </label>
            </div>
            <div className='col-6 mt-2 d-flex gap-1'>
                <input type='checkbox' className='form-check-input'name='day'/>
                <label className="fw-normal" htmlFor="daily">
                Login with full E-Mail id
                </label>
            </div>
                 <div className='col-6 mt-2 d-flex gap-1'>
                <input type='checkbox' className='form-check-input'name='day'/>
                <label className="fw-normal" htmlFor="daily">
                Is Default
                </label>
            </div>  
            <h6 className='border-bottom p-2'>  Use Secure Connection</h6>
            <div className='d-flex align-items-center gap-1 col-6'>
                <input type='radio' className='form-check-input'name='yad'/>
                <label className="form-check-label fw-normal" htmlFor="daily">Never</label>
            </div>
            <div className='d-flex align-items-center gap-1 col-6'>
                <input type='radio' className='form-check-input'name='yad'/>
                <label className="form-check-label fw-normal" htmlFor="daily">TLS</label>
            </div>
            <div className='d-flex align-items-center gap-1 col-6'>
                <input type='radio' className='form-check-input'name='yad'/>
                <label className="form-check-label fw-normal" htmlFor="daily">SSl</label>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                disabled placeholder='SSL Socket Port'/>
            </div>
            <h6 className='border-bottom p-2'></h6>
            <div className='col-4 mt-2 d-flex gap-1'>
                <input type='checkbox' className='form-check-input'name='day'/>
                <label className="fw-normal" htmlFor="daily">
                Mail Server Requires Authentication
                </label>
            </div> 
            <div className='d-flex align-items-center gap-1 col-4'>
                <input type='radio' className='form-check-input'name='yad' disabled/>
                <label className="form-check-label" htmlFor="daily">
                Use same as incoming mail Server
                </label>
            </div>
            <div className='d-flex align-items-center gap-1 col-4'>
                <input type='radio' className='form-check-input'name='yad' disabled/>
                <label className="form-check-label" htmlFor="daily">
                Log on Using
                </label>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Email Id   '></input>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Password'></input>
            </div>
            <div className='mt-4'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default EmailSetting
