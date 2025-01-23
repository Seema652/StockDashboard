import React, { useState } from "react";

const RenameApplications = () => {
  // Sample data for applications
  const [renameApplications, setRenameApplications] = useState([
    { id: 1, standardLabel: "Dashboard", displayLabel: "User Dashboard" },
    { id: 2, standardLabel: "Settings", displayLabel: "User Settings" },
    { id: 3, standardLabel: "Analytics", displayLabel: "Admin Analytics" },
    { id: 4, standardLabel: "Shop", displayLabel: "Customer Shop" },
  ]);

  // Handle save action
  const handleSave = () => {
    console.log("Saving data...");
    alert("Data saved successfully!");
  };

  // Handle cancel action
  const handleCancel = () => {
    console.log("Canceling...");
    alert("Changes have been discarded.");
  };

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div>
              <h4 className="bg-dark py-2 px-4 text-light fs-3">
                Rename Applications
              </h4>
            </div>

            <div className="row pt-3 px-2">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="language" className="form-label fs-5">
                    Language
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Language</option>
                    <option value="1">English</option>
                    <option value="2">French</option>
                    <option value="3">German</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="table-responsive mt-4">
              <table className="table table-striped">
                <thead className="bg-light">
                  <tr>
                    <th className="fs-5">Standard Label</th>
                    <th className="fs-5">Display Label</th>
                    <th className="fs-5">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {renameApplications.map((app, index) => (
                    <tr key={app.id}>
                      <td>{app.standardLabel}</td>
                      <td>{app.displayLabel}</td>
                      <td>
                        <button className="btn btn-info btn-sm">Rename</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Save and Cancel Buttons */}
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-primary fs-5"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger fs-5"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RenameApplications;
