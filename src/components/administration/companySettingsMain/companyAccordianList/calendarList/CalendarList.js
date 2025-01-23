import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlphabeticFilter from "../../../../rems-status/AlphabeticFilter";


const CalendarList = () => {
  // Sample data for fiscal years
  const [
    calendarList, setCalendarList] = useState([
    {
      id: 1,
      calendarName: "2023",
      weekStartFrom: "01",
      lastUpdatedOn: "January",
      createdModified: "2023-10-01",
    },
    {
      id: 2,
      calendarName: "2023",
      weekStartFrom: "01",
      lastUpdatedOn: "January",
      createdModified: "2023-10-01",
    },
    {
      id: 3,
      calendarName: "2023",
      weekStartFrom: "01",
      lastUpdatedOn: "January",
      createdModified: "2023-10-01",
    },
  ]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="bg-black d-flex justify-content-between align-items-center text-light py-2 px-4">
            <div className="d-flex align-items-center">
              <h4 className="fs-4">
              Calendar List</h4>
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
                    Calendar Name
                  </th>
                  <th scope="col" className="fs-5">
                    Week Start From
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
                {calendarList?.map((elem) => (
                  <tr key={elem.id}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        aria-label="Select row"
                      />
                    </th>
                    <td className="fs-5">{elem.calendarName}</td>
                    <td className="fs-5">{elem.weekStartFrom}</td>
                    <td className="fs-5">{elem.lastUpdatedOn}</td>
                    <td className="fs-5">{elem.createdModified}</td>
                    <td className="fs-5">
                      <div className="d-flex align-items-center gap-3">
                        <Link to="/edit-calendar">
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

export default CalendarList;
