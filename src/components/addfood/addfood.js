import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddFoodForm() {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Order List</h3>
      </div>
      <div
        className="card mx-auto mt-5"
        style={{ width: "1200px", backgroundColor: "#fff" }}
      >
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          <h2 className="m-0">Add Food</h2>
          <div>
            <button
              className="btn btn-primary me-3"
              style={{ fontSize: "1.2rem" }}
              onClick={() => alert("Bulk upload initiated!")}
            >
              Bulk Upload
            </button>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select id="category" name="category" className="form-select">
                  <option value="">Select option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="kitchen" className="form-label">
                  Select Kitchen
                </label>
                <select id="kitchen" name="kitchen" className="form-select">
                  <option value="">Select option</option>
                  <option value="1">Kitchen 1</option>
                  <option value="2">Kitchen 2</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="food-name" className="form-label">
                  Food Name *
                </label>
                <input
                  type="text"
                  id="food-name"
                  name="food-name"
                  className="form-control"
                  placeholder="Food name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="component" className="form-label">
                  Component
                </label>
                <input
                  type="text"
                  id="component"
                  name="component"
                  className="form-control"
                  placeholder="Component"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="notes" className="form-label">
                  Notes
                </label>
                <input
                  type="text"
                  id="notes"
                  name="notes"
                  className="form-control"
                  placeholder="Notes"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="form-control"
                  placeholder="Description"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="form-control"
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="vat" className="form-label">
                  VAT
                </label>
                <input
                  type="text"
                  id="vat"
                  name="vat"
                  className="form-control"
                  placeholder="0%"
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="cooking-time" className="form-label">
                  Cooking Time
                </label>
                <input
                  type="time"
                  id="cooking-time"
                  name="cooking-time"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <label className="form-label">Menu Type</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      type="checkbox"
                      id="party"
                      className="form-check-input"
                    />
                    <label htmlFor="party" className="form-check-label">
                      Party
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      type="checkbox"
                      id="coffee"
                      className="form-check-input"
                    />
                    <label htmlFor="coffee" className="form-check-label">
                      Coffee
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      type="checkbox"
                      id="dinner"
                      className="form-check-input"
                    />
                    <label htmlFor="dinner" className="form-check-label">
                      Dinner
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      type="checkbox"
                      id="lunch"
                      className="form-check-input"
                    />
                    <label htmlFor="lunch" className="form-check-label">
                      Lunch
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="breakfast"
                      className="form-check-input"
                    />
                    <label htmlFor="breakfast" className="form-check-label">
                      Breakfast
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFoodForm;
