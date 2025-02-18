import React from "react";
import { FaSearch } from "react-icons/fa";

function Crons() {
  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-black text-white p-3 rounded mb-4 col-12 col-md-8 col-lg-8">
        <h3 className="fw-bold text-center text-md-start">Crons</h3>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <span className="input-group-text bg-white border-0">
              <FaSearch className="text-muted"  />
            </span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-lg col-12 col-md-8 col-lg-8">
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">Composer</h5>
          <div className="card-text mt-2 p-3 bg-light rounded">
            <code>* * * * * https://demo.stackposts.com/spre/post/cron</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crons;
