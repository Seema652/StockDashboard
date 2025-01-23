import React from 'react'
import { FaGoogleDrive } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function SelectImport() {
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h4 className='tbl-caption text-light'>Select File</h4>
            </div>
            <form>
                <div className='row'>
                    <div className='col-6 '>
                        <input type='text' className='form-control' aria-label='name' placeholder='Column
                    Name Start At Line No'/>
                    </div>
                    <div className='col-6 '>
                        <input type='text' className='form-control' aria-label='name'
                            placeholder='Start Of Body Line No' />
                    </div>
                    <div className='col-6 mt-2 '>
                        <input type='text' className='form-control' aria-label='name'
                            placeholder='End Of The Line Indicator' />
                    </div>
                    <div className='col-6 mt-2 '>
                        <input type='text' className='form-control' aria-label='name'
                            placeholder='Excel Sheet Index' />
                    </div>
                    <div className='d-flex align-items-center gap-1 mt-2 text-center '>
                        <div className=''>
                            <FaGoogleDrive size={30} />
                        </div>
                        <input type='file' className='border border-primary ' style={{ width: "170px" }} />
                        <p className=''>(Max:-20 MB)</p>
                    </div>
                    <h6 className='border-bottom p-2'>Import Action</h6>
                    <div className='col-4 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='day' />
                        <label className='fw-normal'>Ignore All Error</label>
                    </div>
                    <div className='col-4 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='day' />
                        <label className='fw-normal'>Import And Show Error</label>
                    </div>
                    <div className='col-4 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='day' />
                        <label className='fw-normal'>Stop All Import On Error</label>
                    </div>
                    <h6 className='border-bottom p-2'>Import Type</h6>
                    <div className='col-4 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='daily' />
                        <label className='fw-normal'>Header Only</label>
                    </div>
                    <div className='col-4 d-flex align-items-center gap-1'>
                        <input type='radio' className='form-input-check' aria-label='check' name='daily' />
                        <label className='fw-normal'>Header With Body Error</label>
                    </div>
                    <div className='mt-2'>
                        <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
                        <button
                            className="btn btn-primary me-1"
                            type="submit">
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SelectImport
