import React from 'react'
import { Link } from 'react-router-dom'
function DataPolicy() {
  return (
    <div className='card'>
    <div className='table-responsive active-projects style-1'>
        <h2 className='tbl-caption text-light'> Data Policy
        <Link className="btn btn-primary btn-sm"  to="/reminderlist" role="button" aria-controls="offcanvasExample">
        + Data Added</Link></h2>
 {/* <button type="button" className="btn btn-secondary btn-sm" > + Invite Employee
                                </button> */}
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
  )
}

export default DataPolicy
