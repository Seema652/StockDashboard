import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RowMaterialManagement() {
  return (
    <div className="container-fluid mt-4 px-2 px-md-4">
      <div className="bg-black p-2 d-flex flex-wrap justify-content-between align-items-center mb-3 rounded">
        <h4 className="text-light mb-0">Raw Material Management</h4>
        <div className="d-flex justify-content-end align-items-center mt-2 mt-sm-0">
          <button className="btn btn-light btn-sm btn-md-lg me-1">
            Help Center
          </button>
          <button className="btn btn-primary btn-sm btn-md-lg me-1">
            Back
          </button>
        </div>
      </div>

      <div className="shadow p-2 p-md-3 rounded bg-white">
        <div className="d-flex flex-wrap justify-content-end gap-2 mb-3">
          <button className="btn btn-danger btn-sm btn-md-lg">
            + Add New Raw Material
          </button>
          <button className="btn btn-secondary btn-sm btn-md-lg">Action</button>
          <button className="btn btn-secondary btn-sm btn-md-lg">Import</button>
          <button className="btn btn-secondary btn-sm btn-md-lg">Export</button>
        </div>

        <div className="container-fluid px-0">
          <div className="row g-3 mb-4 align-items-end">
            <div className="col-12 col-sm-6 col-md-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="nameInput"
                className="form-control"
                placeholder="Name"
              />
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <label htmlFor="selectOption" className="form-label">
                Category
              </label>
              <select id="selectOption" className="form-select">
                <option value="all">All</option>
              </select>
            </div>

            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary btn-sm btn-md-lg">
                  Search
                </button>
                <button className="btn btn-info btn-sm btn-md-lg">
                  Show All
                </button>
                <button className="btn btn-success btn-sm btn-md-lg">
                  Save Raw Material
                </button>
                <button className="btn btn-warning btn-sm btn-md-lg">
                  Copy Raw Material
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th scope="col" className="text-nowrap">
                  <input type="checkbox" />
                </th>
                <th scope="col" className="text-nowrap">
                  Name
                </th>
                <th scope="col" className="text-nowrap">
                  Category
                </th>
                <th scope="col" className="text-nowrap">
                  Favorite
                </th>
                <th scope="col" className="text-nowrap">
                  Available
                </th>
                <th scope="col" className="text-nowrap">
                  Created
                </th>
                <th scope="col" className="text-nowrap">
                  Created By
                </th>
                <th scope="col" className="text-nowrap">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Coriander Chutney</td>
                <td>
                  <select className="form-select">
                    <option value="">Select/Add Category</option>
                  </select>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" checked readOnly />
                </td>
                <td>25 Jan 2024 16:05:28</td>
                <td>L&D-DelhiNTrivedi-Demo</td>
                <td>
                  <button className="btn btn-danger btn-sm mx-1">
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button className="btn btn-primary btn-sm mx-1">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="btn btn-secondary btn-sm mx-1">
                    <i className="fas fa-file-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Peanuts</td>
                <td>
                  <select className="form-select">
                    <option value="">Select/Add Category</option>
                  </select>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" checked readOnly />
                </td>
                <td>25 Jan 2024 10:02:57</td>
                <td>L&D-DelhiNTrivedi-Demo</td>
                <td>
                  <button className="btn btn-danger btn-sm mx-1">
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button className="btn btn-primary btn-sm mx-1">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="btn btn-secondary btn-sm mx-1">
                    <i className="fas fa-file-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RowMaterialManagement;
