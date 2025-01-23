import React from 'react'
import { Link } from 'react-router-dom'
function CurrentUser() {
  return (
    <div className='card'>
    <div className='table-responsive active-projects style-1'>
        <h2 className='tbl-caption text-light'> My Current User
        <Link className="btn btn-primary btn-sm"  to="/reminderlist" role="button" aria-controls="offcanvasExample">
        + Role Added</Link></h2>
 {/* <button type="button" className="btn btn-secondary btn-sm" > + Invite Employee
                                </button> */}
</div>
<div className="mt-3">
            <table className="w-100">
                <tr className="p-1 bg-light">
                    <th className="p-1">
                    
                   
                    </th>
                    <th className="p-1">User Name</th>
                    <th className="p-1">Login Name</th>
                    <th className="p-1">Login Date</th>
                    <th className="p-1">Login Time</th>
                    <th className="p-1">Email</th>
                    <th className="p-1">Machine Name</th>
                    <th className="p-1">Browser</th>
                    <th className="p-1">Paltform Name</th>
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
    <td className='p-1'>100003</td>
    <td className='p-1'>Chrome</td>
    <td className='p-1'>Window10</td>
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

export default CurrentUser
