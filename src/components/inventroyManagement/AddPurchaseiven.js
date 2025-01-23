import React from "react";

function AddPurchaseiven() {
  return (
    <div className="container mt-4">
      <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3 rounded-top">
        <h4 className="text-light">Add Purchase</h4>
        <button className="btn btn-primary">Back</button>
      </div>
      <hr />

      <form className="bg-white">
        <div className="mb-4">
          <label className="form-label fw-bold">From</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fromOptions"
                id="supplier"
                value="Supplier"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="supplier">
                Supplier
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fromOptions"
                id="restaurant"
                value="Restaurant"
              />
              <label className="form-check-label" htmlFor="restaurant">
                Restaurant
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="fromOptions"
                id="kitchen"
                value="Kitchen"
              />
              <label className="form-check-label" htmlFor="kitchen">
                Kitchen
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="supplierSelect" className="form-label">
            Supplier
          </label>
          <select className="form-select w-50" id="supplierSelect">
            <option value="">Select Supplier</option>
            <option value="Dhiraj Sons">Dhiraj Sons</option>
          </select>
        </div>

        <div className="border p-3 rounded mb-4 text-light">
          <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3 rounded-top">
            <h4 className="text-light">Invoice Details</h4>
          </div>

          <div className="row mb-3 align-items-center">
            <div className="col-md-6 d-flex">
              <label htmlFor="invoiceDate" className="form-label me-3">
                Invoice Date
              </label>
              <input
                type="date"
                className="form-control w-50"
                id="invoiceDate"
              />
            </div>
            <div className="col-md-6 d-flex">
              <label htmlFor="invoiceNumber" className="form-label me-3">
                Invoice Number
              </label>
              <input
                type="text"
                className="form-control w-50"
                id="invoiceNumber"
                placeholder="Enter Invoice Number"
              />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <div className="col-md-4 d-flex">
              <label htmlFor="cgst" className="form-label me-3">
                CGST (%)
              </label>
              <input
                type="number"
                className="form-control w-50"
                id="cgst"
                placeholder="Enter CGST"
              />
            </div>
            <div className="col-md-4 d-flex">
              <label htmlFor="sgst" className="form-label me-3">
                SGST (%)
              </label>
              <input
                type="number"
                className="form-control w-50"
                id="sgst"
                placeholder="Enter SGST"
              />
            </div>
            <div className="col-md-4 d-flex">
              <label htmlFor="igst" className="form-label me-3">
                IGST (%)
              </label>
              <input
                type="number"
                className="form-control w-50"
                id="igst"
                placeholder="Enter IGST"
              />
            </div>
          </div>

          <div className="row mb-3 align-items-center">
            <div className="col-md-6 d-flex">
              <label htmlFor="discountType" className="form-label me-3">
                Discount Type
              </label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="discountType"
                    id="fixedDiscount"
                    value="Fixed"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="fixedDiscount">
                    Fixed
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="discountType"
                    id="percentageDiscount"
                    value="Percentage"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="percentageDiscount"
                  >
                    Percentage
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <label htmlFor="discount" className="form-label me-3">
                Total Discount
              </label>
              <input
                type="number"
                className="form-control w-50"
                id="discount"
                placeholder="Enter Discount"
              />
            </div>
          </div>

          <div className="row mb-3 align-items-center">
            <div className="col-md-6 d-flex">
              <label htmlFor="totalDiscount" className="form-label me-3">
                Discount (%)
              </label>
              <input
                type="text"
                className="form-control w-50"
                id="totalDiscount"
                placeholder="Included in Invoice"
              />
            </div>
            <div className="col-md-6 d-flex">
              <label className="form-label me-3">Payment Type</label>
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentType"
                  id="unpaid"
                  value="Unpaid"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="unpaid">
                  Unpaid
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentType"
                  id="paid"
                  value="Paid"
                />
                <label className="form-check-label" htmlFor="paid">
                  Paid
                </label>
              </div>
            </div>
          </div>

          <div className="mb-3 d-flex">
            <label htmlFor="updateInventory" className="form-label me-3">
              Update Inventory Stock
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="updateInventory"
              defaultChecked
            />
          </div>
        </div>

        <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3 rounded-top">
          <h4 className="text-white">Raw Material Details</h4>
          <div>
            <button className="btn btn-primary me-2">Add New</button>
            <button className="btn btn-primary me-2">Clear All</button>
            <button className="btn btn-primary me-2">Set as Favourite</button>
            <button className="btn btn-primary">Remove from Favourite</button>
          </div>
        </div>

        <div className="border p-3 rounded mb-4">
          <div className="row mb-3 text-white">
            <div className="col-md-2">
              <label className="form-label">Name</label>
            </div>
            <div className="col-md-1">
              <label className="form-label">Quantity</label>
            </div>
            <div className="col-md-1">
              <label className="form-label">Unit</label>
            </div>
            <div className="col-md-2">
              <label className="form-label">Price</label>
            </div>
            <div className="col-md-2">
              <label className="form-label">Amount</label>
            </div>
            <div className="col-md-2">
              <label className="form-label">Tax</label>
            </div>
            <div className="col-md-2">
              <label className="form-label">Description</label>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <select className="form-select">
                <option>Select/Add Raw Material</option>
              </select>
            </div>
            <div className="col-md-1">
              <input type="number" className="form-control" placeholder="Qty" />
            </div>
            <div className="col-md-1">
              <input type="text" className="form-control" placeholder="Unit" />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
              />
            </div>
            <div className="col-md-2">
              <input type="number" className="form-control" placeholder="Tax" />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-between">
                <label className="form-label">Total Discount</label>
                <span className="fw-bold">₹ 0.00</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-between">
                <label className="form-label">Delivery Charges</label>
                <span className="fw-bold">₹ 0.00</span>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button type="button" className="btn btn-danger me-2">
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddPurchaseiven;
