import React, { useState } from "react";
import CustomizeFieldsRules from "./customize-fields-rules"; // Assuming this component exists
import { Link } from "react-router-dom";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";
import { Dropdown, DropdownButton } from "react-bootstrap";

function CustomizeFields() {
  const [list, setList] = useState(0);

  const TabMarket = (num) => {
    setList(num);
  };

  return (
    <div className="col-8">
      {/* Tab Navigation */}
      <ul className="d-flex mt-1 gap-2">
        {["Fields", "Rules"].map((item, i) => (
          <li
            key={i}
            style={{ fontSize: "2rem" }}
            className={list === i ? "text-success" : "text-black"}
            onClick={() => TabMarket(i)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Rules Tab Content */}
      {list === 1 && (
        <div>
          <CustomizeFieldsRules />
        </div>
      )}

      {/* Fields Tab Content */}
      {list === 0 && (
        <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
          <div className="table-responsive active-projects style-1">
            <div
              className="tbl-caption text-light"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <h3 className="" style={{ color: "white" }}>
                Account Fields
                
              </h3>
              
                {/* Dropdown Button */}
                <DropdownButton id="dropdown-basic-button" title="Add Fields">
      <Dropdown.Item href="/field-properties"> Add Header Field</Dropdown.Item>
      <Dropdown.Item href="/field-properties">Add Body Field</Dropdown.Item>
      <Dropdown.Item href="/roll-ups-field">Add Roll-up Field</Dropdown.Item>
    </DropdownButton>
           

    </div>
            
         
          {/* Fields Table */}
          <div className="card">
            <div className="mt-3">
              <table className="w-100">
                <thead>
                  <tr className="p-1 bg-light">
                    <th className="p-1"></th>
                    <th className="p-1">Caption</th>
                    <th className="p-1">Variable</th>
                    <th className="p-1">Data Type</th>
                    <th className="p-1">Display Type</th>
                    <th className="p-1">Control Type</th>
                    <th className="p-1">Size</th>
                    <th className="p-1">Field Name</th>
                    <th className="p-1">API Name</th>
                    <th className="p-1">Rules</th>
                    <th className="p-1">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Repeatable rows */}
                  {[
                    {
                      caption: "Account Type",
                      variable: "MAF4",
                      dataType: "Number List",
                      displayType: "Mandatory",
                      controlType: "Combo Box",
                      size: 2,
                      fieldName: "iAccountType",
                      apiName: "AccountType",
                      rules: "New",
                    },
                    {
                      caption: "Alternate Mobile",
                      variable: "MAF2003",
                      dataType: "Text",
                      displayType: "None",
                      controlType: "Phone",
                      size: 60,
                      fieldName: "AlternateMobile",
                      apiName: "AlternateMobile",
                      rules: "New",
                    },
                    {
                      caption: "Annual Revenue",
                      variable: "MAF120",
                      dataType: "Fraction",
                      displayType: "None",
                      controlType: "Text Box",
                      size: 2,
                      fieldName: "fAnnualRevenue",
                      apiName: "AnnualRevenue",
                      rules: "New",
                    },
                    {
                      caption: "Billing Address",
                      variable: "MAF109",
                      dataType: "Text",
                      displayType: "None",
                      controlType: "Text Box",
                      size: 500,
                      fieldName: "sBillingAddress",
                      apiName: "BillingAddress",
                      rules: "New",
                    },
                    {
                      caption: "Billing City",
                      variable: "MAF110",
                      dataType: "Text",
                      displayType: "None",
                      controlType: "Text Box",
                      size: 100,
                      fieldName: "sBillingCity",
                      apiName: "BillingCity",
                      rules: "New",
                    },
                    {
                      caption: "Billing Country",
                      variable: "MAF113",
                      dataType: "Master",
                      displayType: "None",
                      controlType: "Combo Box",
                      size: 4,
                      fieldName: "BillingCountry",
                      apiName: "BillingCountry",
                      rules: "New",
                    },
                    // Add more rows as necessary...
                  ].map((field, idx) => (
                    <tr key={idx} className="border p-1">
                      <td className="p-1"></td>
                      <td className="p-1">{field.caption}</td>
                      <td className="p-1">{field.variable}</td>
                      <td className="p-1">{field.dataType}</td>
                      <td className="p-1">{field.displayType}</td>
                      <td className="p-1">{field.controlType}</td>
                      <td className="p-1">{field.size}</td>
                      <td className="p-1">{field.fieldName}</td>
                      <td className="p-1">{field.apiName}</td>
                      <td className="p-1">{field.rules}</td>
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
      )}
    </div>
  );
}

export default CustomizeFields;
