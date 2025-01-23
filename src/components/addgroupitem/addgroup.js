import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddGroup() {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Item Food</h3>
      </div>
      <div
        className="card mx-auto mt-5"
        style={{ width: "1200px", backgroundColor: "#fff" }}
      >
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          <h2 className="m-0">Add Group Item</h2>
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="form-control form-control-sm me-2"
              placeholder="Search"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="d-flex justify-content-between">
              <div>
                <div className="mb-2">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select form-select-sm"
                    style={{ width: "300px" }}
                  >
                    <option value="">Select option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label htmlFor="food-name" className="form-label">
                    Food Name *
                  </label>
                  <input
                    type="text"
                    id="food-name"
                    name="food-name"
                    className="form-control form-control-sm"
                    placeholder="Food name"
                    required
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="component" className="form-label">
                    Component
                  </label>
                  <input
                    type="text"
                    id="component"
                    name="component"
                    className="form-control form-control-sm"
                    placeholder="Component"
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="notes" className="form-label">
                    Notes
                  </label>
                  <input
                    type="text"
                    id="notes"
                    name="notes"
                    className="form-control form-control-sm"
                    placeholder="Notes"
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    className="form-control form-control-sm"
                    placeholder="Description"
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="form-control form-control-sm"
                    style={{ width: "300px" }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <label htmlFor="vat" className="form-label">
                    Vat
                  </label>
                  <input
                    type="text"
                    id="vat"
                    name="vat"
                    className="form-control form-control-sm"
                    placeholder="0%"
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="cooking-time" className="form-label">
                    Cooking Time
                  </label>
                  <input
                    type="time"
                    id="cooking-time"
                    name="cooking-time"
                    className="form-control form-control-sm"
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Menu Type</label>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="party"
                        name="menu-type"
                        value="party"
                      />
                      <label className="form-check-label" htmlFor="party">
                        Party
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="coffee"
                        name="menu-type"
                        value="coffee"
                      />
                      <label className="form-check-label" htmlFor="coffee">
                        Coffee
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="dinner"
                        name="menu-type"
                        value="dinner"
                      />
                      <label className="form-check-label" htmlFor="dinner">
                        Dinner
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="lunch"
                        name="menu-type"
                        value="lunch"
                      />
                      <label className="form-check-label" htmlFor="lunch">
                        Lunch
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="breakfast"
                        name="menu-type"
                        value="breakfast"
                      />
                      <label className="form-check-label" htmlFor="breakfast">
                        Breakfast
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="form-select form-select-sm"
                    style={{ width: "300px" }}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button type="reset" className="btn btn-danger me-2">
                    Reset
                  </button>
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                </div>
              </div>
              <div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Variant Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Price"
                  style={{ width: "300px", margin: "0 auto" }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddGroup;
