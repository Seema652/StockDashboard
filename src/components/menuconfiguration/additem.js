import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddItem = () => {
  return (
    <div className="container mt-3">
   <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3 rounded-top">
 
  <h4 className="text-light">Add Item</h4>

  <div className="d-flex gap-2">
    <button className="btn btn-danger">Back</button>
  </div>
</div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <form>
              
                <div className="mb-3 row">
                  <label htmlFor="name" className="col-sm-3 col-form-label text-end">
                    Name <span className="text-danger">*</span>
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                    <small className="form-text text-muted">Note: Name will be shown in the bill.</small>
                  </div>
                </div>

                <div className="mb-3 row">
                  <label htmlFor="shortCode" className="col-sm-3 col-form-label text-end">
                    Short Code <span className="text-danger">*</span>
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="shortCode" placeholder="Enter short code" />
                  </div>
                </div>

        
                <div className="mb-3 row">
                  <label htmlFor="shortCode2" className="col-sm-3 col-form-label text-end">
                    Short Code 2
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="shortCode2" placeholder="Enter short code 2" />
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label text-end">Order Type</label>
                  <div className="col-sm-8">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="delivery" />
                      <label className="form-check-label" htmlFor="delivery">Delivery</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="pickup" />
                      <label className="form-check-label" htmlFor="pickup">Pick Up</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="dineIn" />
                      <label className="form-check-label" htmlFor="dineIn">Dine In</label>
                    </div>
                  </div>
                </div>

             
                <div className="mb-3 row">
                  <label htmlFor="price" className="col-sm-3 col-form-label text-end">
                    Price (₹) <span className="text-danger">*</span>
                  </label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" id="price" placeholder="Enter price" />
                  </div>
                </div>

                {/* HSN Code */}
                <div className="mb-3 row">
                  <label htmlFor="hsnCode" className="col-sm-3 col-form-label text-end">
                    HSN Code
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="hsnCode" placeholder="Enter HSN code" />
                  </div>
                </div>

                {/* Unit */}
                <div className="mb-3 row">
                  <label htmlFor="unit" className="col-sm-3 col-form-label text-end">
                    Unit
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="unit" placeholder="Enter unit" />
                    <small className="form-text text-muted">Note: Unit will be shown in the bill, e.g., Kg, Liter, etc.</small>
                  </div>
                </div>

                {/* Ignore Tax */}
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label text-end">Ignore Tax</label>
                  <div className="col-sm-8">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="ignoreTax" />
                      <label className="form-check-label" htmlFor="ignoreTax">Yes</label>
                    </div>
                  </div>
                </div>

                {/* Ignore Discount */}
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label text-end">Ignore Discount</label>
                  <div className="col-sm-8">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="ignoreDiscount" />
                      <label className="form-check-label" htmlFor="ignoreDiscount">Yes</label>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-3 row">
                  <label htmlFor="description" className="col-sm-3 col-form-label text-end">
                    Description
                  </label>
                  <div className="col-sm-8">
                    <textarea className="form-control" id="description" rows="3" placeholder="Enter description"></textarea>
                  </div>
                </div>

                {/* Buttons */}
                <div className="row">
                  <div className="col-sm-8 offset-sm-3">
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                    <button type="button" className="btn btn-secondary">Back</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
