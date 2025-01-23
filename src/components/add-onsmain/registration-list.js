import React from "react";
import { Link } from "react-router-dom";
import CustomInputField from "../../common/CustomInputField";

function Registration () {
    return (
        <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h2 className='tbl-caption text-light'>App Registration List
            <Link className="btn btn-primary btn-sm"  to="/registration-list/new-app-registration" role="button" aria-controls="offcanvasExample">
            + New App Registration</Link></h2>
     {/* <button type="button" className="btn btn-secondary btn-sm" > + Invite Employee
                                    </button> */}
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
    <td className='p-1'>---</td>
    <td className='p-1'>----</td>
    <td className='p-1'>---</td>
    <td className='p-1'>---</td>
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





    );
}

export default Registration;