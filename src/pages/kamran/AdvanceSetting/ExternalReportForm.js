import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExternalReportsPop from '../../../components/kamran/AdvanceSetting/ExternalReportsPop'
function ExternalReportForm() {
  const [show, setShow] = useState(false);
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light'>New Report</h3>
      </div>
      <h6 className='border-bottom p-2'>Details</h6>
      <form>
        <div className='row'>
          <div className='col-6'>
            <input type='text' className='form-control' placeholder='Report Name' aria-label='name'/>
          </div>
          <div className='col-6'>
            <select className='form-control' aria-label='select'>
              <option value="">Report Types</option>
              <option value="focus reports">Focus Reprots</option>
              <option value="tally reports">Tally Reports</option>
            </select>
          </div>
          <div className='col-6 mt-2 '>
            <input type='text' className='form-control' placeholder='Name' aria-label='name'/>
          </div>
          <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
              <option value="">Report Folder</option>
              <option value="focus reports">Account Reprots</option>
              <option value="tally reports">Activity Reports</option>
            </select>
          </div>
          <div className='table-responsive active-projects style-1 mt-3'>
          <h6 className='tbl-caption text-light'>Parameter Reports
    <Link className="btn btn-primary btn-sm"
    role="button" aria-controls="offcanvasExample" onClick={()=>setShow(true)}>+ Report Added</Link></h6>
          </div>
          <div className="mt-3">
        <table className="w-100">
          <tr className="p-1 bg-light">
            <th className="p-1">
            </th>
            <th className="p-1">Module Caption</th>
            <th className="p-1">Singular Name</th>
            <th className="p-1">Description</th>
            <th className="p-1">Allow Audit Trail</th>
            <th className="p-1">Allow Web Template</th>
            <th className="p-1">Status</th>
          </tr>
          <tr className="border p-1">
            <td className="p-1">
            </td>
            <td className='p-1'>Delivey Note</td>
            <td className='p-1'>Notes</td>
            <td className='p-1'>Public</td>
            <td className='p-1'>Block-A</td>
            <td className='p-1'></td>
            <div>
              <a className="btn btn-primary shadow btn-xs sharp me-1">
                <i class="fa fa-pencil"> </i>
              </a>
              <a class="btn btn-danger shadow btn-xs sharp" >
                <i class="fa fa-trash">
                </i>
              </a>
            </div>
          </tr>
        </table>
      </div>
        </div>
      </form>
      <div>
        {show && <ExternalReportsPop show={show} setShow={setShow}/>}
      </div>
      <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
    </div>
  )
}

export default ExternalReportForm
