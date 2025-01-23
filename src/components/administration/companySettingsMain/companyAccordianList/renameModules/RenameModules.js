import React, { useState } from "react";

const RenameModules = () => {
  // Sample data for modules
  const [modules, setModules] = useState([
    {
      id: 1,
      icon: "⚙️", // Example icon
      standardLabel: "Dashboard",
      displayLabel: "Dashboard (User)",
      singularLabel: "Dashboard",
    },
    {
      id: 2,
      icon: "📈",
      standardLabel: "Analytics",
      displayLabel: "Analytics (Admin)",
      singularLabel: "Analytics",
    },
    {
      id: 3,
      icon: "⚙️",
      standardLabel: "Settings",
      displayLabel: "Settings (User)",
      singularLabel: "Setting",
    },
    {
      id: 4,
      icon: "🛒",
      standardLabel: "Shop",
      displayLabel: "Shop (Customer)",
      singularLabel: "Shop",
    },
  ]);

  const handleSave = () => {
    console.log("Saving data...");
    alert("Data saved successfully!");
  };

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
                Rename Modules
              </h4>
            </div>

            <div className="row pt-3 px-2">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="application" className="form-label fs-5">
                    Application
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Application</option>
                    <option value="1">App 1</option>
                    <option value="2">App 2</option>
                    <option value="3">App 3</option>
                  </select>
                </div>
              </div>

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

            <div className="table-responsive mt-4">
              <table className="table table-striped">
                <thead className="bg-light">
                  <tr>
                    <th className="fs-5">Icon</th>
                    <th className="fs-5">Standard Label</th>
                    <th className="fs-5">Display Label</th>
                    <th className="fs-5">Singular Label</th>
                    <th className="fs-5">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {modules.map((module, index) => (
                    <tr key={module.id}>
                      <td>{module.icon}</td>
                      <td>{module.standardLabel}</td>
                      <td>{module.displayLabel}</td>
                      <td>{module.singularLabel}</td>
                      <td>
                        <button className="btn btn-info btn-sm" disabled>
                          Rename
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
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

export default RenameModules;
