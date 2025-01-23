import React from "react";
import { Link, Outlet } from "react-router-dom";
import FinalizeDayEnd from "./finalizedayend";
import CashCalculations from "./cashcalulation";
import DayEndOverview from "./datasummery";
const Header = () => (
  <div className="container mt-5">
   
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h4 className="mb-0">Day End Summary</h4>
      <p className="mb-0 text-center w-100">
        Date: <strong>2024-01-22</strong> | Invoice Range: <strong>7 - 330</strong>
      </p>
      <button className="btn btn-outline-secondary">Back</button>
    </div>

   
    <div className="bg-dark text-white p-3 shadow-sm mb-4">
      <div className="d-flex justify-content-between">
        <Link to="/datasummary" className="text-white text-decoration-none">
          Day End Overview
        </Link>
        <span>&gt;</span>
        <Link to="/datasummary/cash-calculations" className="text-white text-decoration-none">
          Cash Calculations
        </Link>
        <span>&gt;</span>
        <Link to="/datasummary/finalize-day-end" className="text-white text-decoration-none">
          Finalize Day-End
        </Link>
      </div>
    </div>

    
    <Outlet />
  </div>
);

export default Header;
