import React, { useState } from "react";
import CustomizeFieldsRules from "./customize-fields-rules"; // Assuming this component exists
import { Link } from "react-router-dom";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";
import { Dropdown, DropdownButton } from "react-bootstrap";

function ExternalModules() {
  return (
    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">
          External Modules
          <div>
            {" "}
            <Link
              className="btn btn-primary btn-sm"
              to="/new-external-modules"
              role="button"
              style={{ marginRight: "1px", alignItems: "center" }} // 1px margin-right for small gap
            >
              New External Modules
            </Link>
          </div>
        </h2>
        <div className="card">
          <div className="mt-3">
            <table className="w-100">
              <thead>
                <tr className="p-1 bg-light">
                  <th className="p-1">Definition Name</th>
                  <th className="p-1">Active</th>
                  <th className="p-1">Action Type</th>
                  <th className="p-1">Display Type</th>
                  <th className="p-1">Save Type</th>
                  <th className="p-1">Source Type </th>
                  <th className="p-1">Position</th>
                  <th className="p-1">Creadited / Modified By</th>
                  <th className="p-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Repeatable rows */}
                {[
                  {
                    definitionName: "test",
                    active: "MAF4",
                    actionType: "Button",
                    displayType: "Dialog Box",
                    saveType: "",
                    sourceType: "External report",
                    position: "Related View",
                    creaditedModifiedBy: "Dharani",
                  },
                  {
                    definitionName: "test",
                    active: "MAF4",
                    actionType: "Button",
                    displayType: "Dialog Box",
                    saveType: "",
                    sourceType: "External report",
                    position: "Related View",
                    creaditedModifiedBy: "Dharani",
                  },
                  {
                    definitionName: "test",
                    active: "MAF4",
                    actionType: "Button",
                    displayType: "Dialog Box",
                    saveType: "",
                    sourceType: "External report",
                    position: "Related View",
                    creaditedModifiedBy: "Dharani",
                  },

                  // Add more rows as necessary...
                ].map((field, idx) => (
                  <tr key={idx} className="border p-1">
                    <td className="p-1">{field.definitionName}</td>
                    <td className="p-1">{field.active}</td>
                    <td className="p-1">{field.actionType}</td>
                    <td className="p-1">{field.displayType}</td>
                    <td className="p-1">{field.saveType}</td>
                    <td className="p-1">{field.sourceType}</td>
                    <td className="p-1">{field.position}</td>
                    <td className="p-1">{field.creaditedModifiedBy}</td>
                    <td className="p-1">
                      <div>
                        <a className="btn btn-primary shadow btn-xs sharp me-1">
                          <i className="fa fa-pencil"></i>
                        </a>
                        <a className="btn btn-danger shadow btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExternalModules;
