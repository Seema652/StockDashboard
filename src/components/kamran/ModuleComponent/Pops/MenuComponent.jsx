import React, { useState } from 'react';
import { BiSolidFileJson } from 'react-icons/bi';
import { FaFileExcel } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import MenuPops from './MenuPops';

function MenuComponent() {
  const [allow, setAllow] = useState(false); // State for controlling the modal

  return (
    <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <div className="table-responsive active-projects style-1">
        <div
          className="tbl-caption text-light"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <h3 style={{ color: 'white' }}>Campaigns Page Layout List</h3>
          <div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setAllow(true)}
            >
              + New Rules
            </button>
          </div>
          <div>
            <Link
              className="btn btn-primary btn-sm"
              to="/import/pdf"
              role="button"
              aria-label="Import PDF"
              style={{ marginLeft: '8px' }}
            >
              <FaFilePdf /> PDF
            </Link>
            <Link
              className="btn btn-primary btn-sm"
              to="/import/json"
              role="button"
              aria-label="Import JSON"
              style={{ marginLeft: '8px' }}
            >
              <BiSolidFileJson /> JSON
            </Link>
            <Link
              className="btn btn-primary btn-sm"
              to="/import/excel"
              role="button"
              aria-label="Import Excel"
              style={{ marginLeft: '8px' }}
            >
              <FaFileExcel /> Excel
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <table className="table w-100">
          <thead>
            <tr className="p-1 bg-light">
              <th className="p-1"></th>
              <th className="p-1">S.No</th>
              <th className="p-1">Module Caption</th>
              <th className="p-1">Singular Name</th>
              <th className="p-1">Description</th>
              <th className="p-1">Allow Audit Trail</th>
              <th className="p-1">Allow Web Template</th>
              <th className="p-1">Status</th>
              <th className="p-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border p-1">
              <td className="p-1"></td>
              <td className="p-1">1.</td>
              <td className="p-1">Delivery Note</td>
              <td className="p-1">Notes</td>
              <td className="p-1">Public</td>
              <td className="p-1">Block-A</td>
              <td className="p-1">Yes</td>
              <td className="p-1">Active</td>
              <td className="p-1">
                <div>
                  <button className="btn btn-primary shadow btn-xs sharp me-1">
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button className="btn btn-danger shadow btn-xs sharp">
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Conditional Modal Rendering */}
      {allow && <MenuPops allow={allow} setAllow={setAllow} />}
    </div>
  );
}

export default MenuComponent;
