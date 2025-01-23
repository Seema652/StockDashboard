import React from 'react'
import { Link } from 'react-router-dom'
function ExternalForm() {
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h2 className='tbl-caption text-light'>New External</h2>
            </div>
            <h6 className='border-bottom p-2'>General</h6>
            <from>
            <div className='row mx-auto'>
                    <div className='col-6'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name"
                        />
                    </div>
                    <div className='col-6'>
                        <input
                            type="textarea"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Description"
                            aria-label="Name"
                        />
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value=""disabled>Module</option>
                            <option>Account</option>
                            <option>Account Type</option>
                            <option>Agent</option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value=""disabled>Module</option>
                            <option>Account</option>
                            <option>Account Type</option>
                            <option>Agent</option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="URL"
                            aria-label="Name"
                        />
                    </div>
                    <div className='col-6 mt-2'>
                        <select className='form-control' name='name'aria-label='name'>
                            <option value="">Webhook</option>
                            <option></option>
                            <option> </option>
                            <option></option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Parameter 2"
                            aria-label="Name"
                        />
                    </div>
                    <div className='col-6 mt-2'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Parameter 1"
                            aria-label="Name"
                        />
                    </div>
                </div>
                <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
            </from>
        </div>
    )
}

export default ExternalForm
