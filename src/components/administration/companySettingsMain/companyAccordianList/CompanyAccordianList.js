import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaCalendarAlt, FaMoneyBillWave, FaExchangeAlt, FaClipboardList, FaEdit } from 'react-icons/fa'; // Example icons

export const CompanyAccordianList = () => {
  return (
    <div className="container mt-4">
      <h5 className="bg-black d-block px-4 py-2 mb-4 fs-4 text-light">Company Settings</h5>
      <div className="card shadow-sm">
        <div className="card-body">
          <ul className="list-unstyled">
            <li className="mb-3 ">
              <Link to="/company-information" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaCog className="me-2" /> Company Information
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/fiscal-year" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaCalendarAlt className="me-2" /> Fiscal Year
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/currencies" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaMoneyBillWave className="me-2" /> Currencies
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/rename-modules" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaEdit className="me-2" /> Rename Modules
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/rename-view-groups" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaClipboardList className="me-2" /> Rename View Groups
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/calendar-list" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaCalendarAlt className="me-2" /> Calendar
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/manage-currencies" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaExchangeAlt className="me-2" /> Manage Currencies
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/currency-exchange" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaExchangeAlt className="me-2" /> Currency Exchange Rate
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/rename-applications" className="fs-5 text-dark text-decoration-none d-flex align-items-center">
                <FaEdit className="me-2" /> Rename Applications
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyAccordianList;
