import React from 'react'
import { Link } from 'react-router-dom'
function EmailFooter() {
  return (
    <div>
        <div className='card'style={{marginTop: "10px", marginLeft: "4px", marginRight: "4px"}}>
    <div className='table-responsive active-projects style-1' >
        <h3 className='tbl-caption text-light'>E-Mail Footer
        <Link className="btn btn-primary btn-sm" to="/footerform"
         role="button" aria-controls="offcanvasExample">+ New E-Mail Footer Added</Link></h3>
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

    </div>
  )
}

export default EmailFooter
