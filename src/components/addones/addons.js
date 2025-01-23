import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Addons() {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Menu Addons</h3>
      </div>
      <div
        className="card mx-auto mt-5"
        style={{ width: "1200px", minHeight: "500px", backgroundColor: "#fff" }}
      >
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          <h2 className="m-0">Add Add-ons</h2>
          <div>
            <i
              className="bi bi-pencil-square me-3"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-pin-angle me-3"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-arrow-clockwise me-3"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-arrows-angle-contract me-3"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-arrows-fullscreen me-3"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-x-lg"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            ></i>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="category-name" className="form-label">
                  Add-ons Name *
                </label>
                <input
                  type="text"
                  id="category-name"
                  name="category-name"
                  className="form-control"
                  placeholder="Add-ons Name"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select id="status" name="status" className="form-select">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="reset" className="btn btn-danger me-2">
                Reset
              </button>
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="price" className="form-label">
                Price *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                placeholder="Enter price"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addons;
