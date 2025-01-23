import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa6";
import { BiSolidFileJson } from "react-icons/bi";
import { FaFileExcel } from "react-icons/fa";

function Import() {
  return (
    <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <div className="table-responsive active-projects style-1">
        <div className='tbl-caption text-light' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <h3 className="" style={{ color: 'white' }}>Import</h3>
         <div>
            <Link className="btn btn-primary btn-sm" to="/importform" role="button" aria-controls="offcanvasExample">
              + Import Added
            </Link>
            <Link className="btn btn-primary btn-sm" to="/import/pdf" role="button" aria-controls="offcanvasExample" aria-label="Import PDF" style={{ marginLeft: '8px' }}>
              <FaFilePdf /> PDF
            </Link>
            <Link className="btn btn-primary btn-sm" to="/import/json" role="button" aria-controls="offcanvasExample" aria-label="Import JSON" style={{ marginLeft: '8px' }}>
              <BiSolidFileJson /> JSON
            </Link>
            <Link className="btn btn-primary btn-sm" to="/import/excel" role="button" aria-controls="offcanvasExample" aria-label="Import Excel" style={{ marginLeft: '8px' }}>
              <FaFileExcel /> Excel
            </Link>
          </div>
        </div>
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
  );
}

export default Import;
