import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlphabeticFilter from "../../../rems-status/AlphabeticFilter";

const EmailTemplates = () => {
  // Sample data for fiscal years (mock data)
  const [calendarList, setCalendarList] = useState([
    {
      id: 1,
      templateName: "Template 1",
      moduleName: "Module A",
      description: "This is a description for Template 1.",
      owner: "John Doe",
      lastUpdatedOn: "January",
      isActive: true, 
    },
    {
      id: 2,
      templateName: "Template 2",
      moduleName: "Module B",
      description: "This is a description for Template 2.",
      owner: "Jane Smith",
      lastUpdatedOn: "February",
      isActive: false,
    },
    {
      id: 3,
      templateName: "Template 3",
      moduleName: "Module C",
      description: "This is a description for Template 3.",
      owner: "Alice Johnson",
      lastUpdatedOn: "March",
      isActive: true,
    },
  ]);

  // Toggle active status function
  const handleCheckboxChange = (id) => {
    setCalendarList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="bg-black rounded d-flex justify-content-between align-items-center text-light py-2 px-4">
            <div className="d-flex align-items-center">
              <h4 className="fs-4">
              Email Templates List</h4>
            </div>
            <Link to="/new-email-template">
              <button type="button" className="btn btn-primary fs-6">
                New Email Templates
              </button>
            </Link>
          </div>

          {/* Alphabetical Filter */}
          <div className="mt-3">
            <AlphabeticFilter />
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      aria-label="Select all"
                    />
                  </th>
                  <th scope="col" className="fs-5">
                    Active
                  </th>
                  <th scope="col" className="fs-5">
                    Template Name
                  </th>
                  <th scope="col" className="fs-5">
                    Module Name
                  </th>
                  <th scope="col" className="fs-5">
                    Description
                  </th>
                  <th scope="col" className="fs-5">
                    Owner
                  </th>
                  <th scope="col" className="fs-5">
                    Last Updated On
                  </th>
                  <th scope="col" className="fs-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {calendarList.map((elem) => (
                  <tr key={elem.id}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        aria-label="Select row"
                      />
                    </th>
                    <td className="fs-5">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={elem.isActive}
                        onChange={() => handleCheckboxChange(elem.id)}
                      />
                    </td>
                    <td className="fs-5">{elem.templateName}</td>
                    <td className="fs-5">{elem.moduleName}</td>
                    <td className="fs-5">{elem.description}</td>
                    <td className="fs-5">{elem.owner}</td>
                    <td className="fs-5">{elem.lastUpdatedOn}</td>
                    <td className="fs-5">
                      <div className="d-flex align-items-center gap-3">
                        <Link to={`/edit-email-templates/${elem.id}`}>
                          <i className="fa-solid fa-pen-to-square text-success"></i>
                        </Link>
                        <i className="fa-solid fa-trash text-danger"></i>
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
};

export default EmailTemplates;
