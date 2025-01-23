import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModuleMappings = () => {
  const [activeTab, setActiveTab] = useState('mappingAction');
  const [modules, setModules] = useState([
    { module: "Contacts", pageLayout: "Standard Layout", listLayout1: "All Contacts", listLayout2: "", listLayout3: "", listLayout4: "", listLayout5: "" },
    { module: "Request", pageLayout: "CSS Page Layout", listLayout1: "All Requests", listLayout2: "", listLayout3: "", listLayout4: "", listLayout5: "" },
    { module: "Suggestions", pageLayout: "Standard Layout", listLayout1: "Standard Layout", listLayout2: "", listLayout3: "", listLayout4: "", listLayout5: "" }
  ]);

  return (
    <div className="container mt-4">
      {/* Tabs Section */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'mappingAction' ? 'active' : ''}`}
            onClick={() => setActiveTab('mappingAction')}
          >
            1. Mapping Action
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'mappingLayout' ? 'active' : ''}`}
            onClick={() => setActiveTab('mappingLayout')}
          >
            2. Mapping Layout
          </button>
        </li>
      </ul>
      
  
      {/* Conditional Rendering based on Active Tab */}
      {activeTab === 'mappingAction' ? (
        <div>
                   {/* Button aligned to the right */}
                   <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary">+ MODULE ADDED</button>
          </div>

          {/* Mapping Action Table */}
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Module</th>
                <th>Add</th>
                <th>Edit</th>
                <th>Print</th>
                <th>Export</th>
              </tr>
            </thead>
            <tbody>
              {['Contacts', 'Request', 'Suggestions'].map((module, index) => (
                <tr key={index}>
                  <td>
                    <select className="form-select">
                      <option>{module}</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td className="text-center">
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td className="text-center">
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td className="text-center">
                    <input type="checkbox" className="form-check-input" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" disabled>
              Previous
            </button>
            <div>
              <a className="btn btn-primary shadow btn-xs sharp me-1">
                <i className="fa fa-pencil"></i>
              </a>
              <a className="btn btn-danger shadow btn-xs sharp me-1">
                <i className="fa fa-trash"></i>
              </a>
              <button className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Mapping Layout Table */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="text-dark">Custom Module Added</h2>
            <button className="btn btn-primary">+ MODULE ADDED</button>
          </div>
          <table className="table table-striped table-bordered">
            <thead className="table">
              <tr>
                <th>Module</th>
                <th>Page Layout</th>
                <th>List Layout1</th>
                <th>List Layout2</th>
                <th>List Layout3</th>
                <th>List Layout4</th>
                <th>List Layout5</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr key={index}>
                  <td>{module.module}</td>
                  <td>{module.pageLayout}</td>
                  <td>{module.listLayout1}</td>
                  <td>{module.listLayout2}</td>
                  <td>{module.listLayout3}</td>
                  <td>{module.listLayout4}</td>
                  <td>{module.listLayout5}</td>
                  <td>
                  <a className="btn btn-primary shadow btn-xs sharp me-1">
                <i className="fa fa-pencil"></i>
              </a>
              <a className="btn btn-danger shadow btn-xs sharp me-1">
                <i className="fa fa-trash"></i>
              </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ModuleMappings;
