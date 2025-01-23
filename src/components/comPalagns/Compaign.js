import React from "react";

function ComPalagns() {
  return (
    <div>
     
      <div className="row g-3 mt-3">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="schedule" className="form-label">
            Schedule From
          </label>
          <input type="text" placeholder="Schedule From" className="form-control" />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="schedule to" className="form-label">
            Schedule To
          </label>
          <input type="date" className="form-control" />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="compaign type" className="form-label">
            Campaign Type
          </label>
          <select id="downline" className="form-select">
            <option selected>All</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="channel" className="form-label">
            Channel
          </label>
          <select id="downline" className="form-select">
            <option selected>All</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="channel" className="form-label">
            Selected Status
          </label>
          <select id="selected" className="form-select">
            <option selected>All</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-end">
          <button className="btn btn-primary me-2">Search</button>
          <button className="btn btn-secondary">Show All</button>
        </div>
      </div>
      <div className="mt-4">
        <table className="table table-bordered">
          <thead>
        
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="text-center">
                No records available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComPalagns;
