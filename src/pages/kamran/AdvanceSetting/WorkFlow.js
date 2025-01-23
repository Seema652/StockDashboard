    import React from 'react'
    import { Link } from 'react-router-dom'
    
    function WorkFlow() {
      return (
        <div className='card'>
        <div className='table-responsive active-projects style-1' >
        <h3 className='tbl-caption text-light'>Work-Flow List
        <Link className="btn btn-primary btn-sm"  to="/workform" role="button" aria-controls="offcanvasExample">
        + Work Flow Added</Link>
        </h3>
        </div>
        <div className="mt-3">
            <table className="w-100">
                <tr className="p-1 bg-light">
                    <th className="p-1">
                    
                   
                    </th>
                    <th className="p-1">Work Flow Name</th>
                    <th className="p-1">Excute NO</th>
                    <th className="p-1">Evalaute No</th>
                    <th className="p-1">Active Time</th>
                    <th className="p-1">Prioty</th>
                    <th className="p-1">Created Name</th>
                    <th className="p-1">Last Updates On</th>
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
    
    export default WorkFlow
    