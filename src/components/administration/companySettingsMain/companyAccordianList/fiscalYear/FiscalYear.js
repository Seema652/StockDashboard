import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlphabeticFilter from "../../../../rems-status/AlphabeticFilter";

const FiscalYear = () => {
  // Sample data for fiscal years
  const [fiscalYears, setFiscalYears] = useState([
    {
      id: 1,
      yearName: "2023",
      startDay: "01",
      startMonth: "January",
      remarks: "New Year",
      createdBy: "Mark",
      lastUpdated: "2023-10-01",
    },
    {
      id: 2,
      yearName: "2024",
      startDay: "01",
      startMonth: "February",
      remarks: "Planning",
      createdBy: "Jacob",
      lastUpdated: "2023-10-02",
    },
    {
      id: 3,
      yearName: "2025",
      startDay: "01",
      startMonth: "March",
      remarks: "Future Planning",
      createdBy: "Larry",
      lastUpdated: "2023-10-03",
    },
  ]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="bg-black d-flex justify-content-between align-items-center text-light py-2 px-4">
            <div className="d-flex align-items-center">
              <h4 className="fs-4">Fiscal Year List |</h4>
              <Link to="#" className="ps-2 fs-5 text-light">
                Back
              </Link>
            </div>
            <Link to="/new-fiscal-year">
              <button type="button" className="btn btn-primary fs-5">
                New Fiscal Year
              </button>
            </Link>
          </div>

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
                    Year Name
                  </th>
                  <th scope="col" className="fs-5">
                    Start Day
                  </th>
                  <th scope="col" className="fs-5">
                    Start Month
                  </th>
                  <th scope="col" className="fs-5">
                    Remarks
                  </th>
                  <th scope="col" className="fs-5">
                    Created / Modified By
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
                {fiscalYears.map((year) => (
                  <tr key={year.id}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        aria-label="Select row"
                      />
                    </th>
                    <td className="fs-5">{year.yearName}</td>
                    <td className="fs-5">{year.startDay}</td>
                    <td className="fs-5">{year.startMonth}</td>
                    <td className="fs-5">{year.remarks}</td>
                    <td className="fs-5">{year.createdBy}</td>
                    <td className="fs-5">{year.lastUpdated}</td>
                    <td className="fs-5">
                      <div className="d-flex align-items-center gap-3">
                        <Link to="/edit-fiscal-year">
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

export default FiscalYear;
