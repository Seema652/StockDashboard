import React from 'react'
import { Link } from 'react-router-dom'

function MappingForm() {
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h4 className='tbl-caption text-light'>Mapping Details</h4>
        </div>
        <form>
        <div className="mt-3">
        <table className="w-100">
          <tr className="p-1 bg-light">
            <th className="p-1">
            </th>
            <th className="p-1">Abaris Field</th>
            <th className="p-1">Import Field</th>
            <th className="p-1">Default Value</th>
          </tr>
          </table>
      </div>
      <div className='row'>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Code</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder='AC-104'/>
        </div>
      </div>
      <h6 className='border-bottom p-2'>Account Information</h6>
      <div className="mt-3">
        <table className="w-100">
          <tr className="p-1 bg-light">
            <th className="p-1">
            </th>
            <th className="p-1">Abaris Field</th>
            <th className="p-1">Import Field</th>
            <th className="p-1">Default Value</th>
          </tr>
          </table>
      </div>
      <div className='row'>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Name</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Owner</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Type</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code"></option>
                <option className='fw-normal' value="Sno">Cash </option>
                <option className='fw-normal' value="email">Income</option>
                <option className='fw-normal' value="rollno">Assets</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Phone</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Fax</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Websites</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Industry</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Credit Days</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder='0'/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Credit Limit</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder='00.00'/>
        </div>
      </div>
      <h6 className='border-bottom p-2'>Address Information</h6>
      <div className="mt-3">
        <table className="w-100">
          <tr className="p-1 bg-light">
            <th className="p-1">
            </th>
            <th className="p-1">Abaris Field</th>
            <th className="p-1">Import Field</th>
            <th className="p-1">Default Value</th>
          </tr>
          </table>
      </div>
      <div className='row'>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Billing info Address</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Billing info City</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Billing info state</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Billing info County</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Billing info Zip Code</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Shipping info Address</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Shipping info City </option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder=''/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Shipping info State</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder='0'/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Shipping info Country</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder='00.00'/>
        </div>
        <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Shipping info Zip Code</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder='00.00'/>
        </div>
      </div>
      <h6 className='border-bottom p-2'>Discription</h6>
           <div className="mt-3">
        <table className="w-100">
          <tr className="p-1 bg-light">
            <th className="p-1">
            </th>
            <th className="p-1">Abaris Field</th>
            <th className="p-1">Import Field</th>
            <th className="p-1">Default Value</th>
          </tr>
          </table>
      </div>
      
     <div className='row'>
     <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Discription</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder='00.00'/>
        </div>
     </div>
     <h6 className='border-bottom p-2'>General</h6>
     <div className="mt-3">
        <table className="w-100">
          <tr className="p-1 bg-light">
            <th className="p-1">
            </th>
            <th className="p-1">Abaris Field</th>
            <th className="p-1">Import Field</th>
            <th className="p-1">Default Value</th>
          </tr>
          </table>
      </div>
     <div className='row'>
     <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="Code">Pic</option>
                <option className='fw-normal' value="Sno">S.NO </option>
                <option className='fw-normal' value="email">Email</option>
                <option className='fw-normal' value="rollno">Roll No</option>
            </select>
        </div>
        <div className='col-6 mt-2'>
<input type='text' className='form-control' aria-label='name' placeholder='00.00'/>
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

export default MappingForm
