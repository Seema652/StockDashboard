import React from 'react'
import { Link } from 'react-router-dom'
function NewPayment() {
    return (
        <div>
            <div className='card mt-2'>
                <div className='table-responsive active-projects style-1'>
                    <h3 className='bg-dark text-light tbl-caption tbl-caption-2'>New Payment Config</h3>
                </div>
                <form className="tbl-captionn">
                    <div className="row">

                        <div className="col-xl-6 mb-3">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder=" Name"
                                aria-label=" Name"
                            />
                        </div>
                        <div className='col-xl-6 mb-3'>
                            <select className='form-select'
                                aria-label='name' name='name'>
                                <option value="" disabled select>Select</option>
                                <option>Online</option>
                                <option>Cash</option>
                                <option>Checked</option>
                            </select>
                        </div>
                        <div className='col-xl-6 mb-3'>
                            <select className='form-select'
                                aria-label='name' name='name'>
                                <option value="" disabled select>Select</option>
                                <option>Account</option>
                                <option>Account Types</option>
                                <option>Account Ledger</option>
                            </select>
                        </div>
                        <div className="col-xl-6 mb-3">
                            <input
                                type="textarea"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder=" Description"
                                aria-label=" Name"
                            />
                        </div>
                             
                        <div>
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

        </div>
    )
}

export default NewPayment
