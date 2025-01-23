import React from 'react'
import { Link } from 'react-router-dom'
function WorkLog() {
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1' >
        <h3 className='tbl-caption text-light'>Work-Log List
        <Link className="btn btn-primary btn-sm"  to="/worklogfrom" role="button" aria-controls="offcanvasExample">
        + Work Log Added</Link>
        </h3>
        </div>
        <div className="mt-3">
            <table className="w-100">
                <tr className="p-1 bg-light">
                    <th className="p-1">
                    
                   
                    </th>
                    <th className="p-1">Module</th>
                    <th className="p-1">Action Types</th>
                    <th className="p-1">From Date</th>
                    <th className="p-1">To Date</th>
                    <th className="p-1">Status</th>
                    <th className="p-1">Status</th>
                   
                </tr>
                <tr className="border p-1">
      
        <td className="p-1">
           
        </td>
    <td className='p-1'>Dharani</td>
    <td className='p-1'>Abaris.com@gmail</td>
    <td className='p-1'>11/11/2024</td>
    <td className='p-1'>11:00</td>
    <td className='p-1'>Abaris.gmail.com</td>
    
   
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
    
  )
}

export default WorkLog
