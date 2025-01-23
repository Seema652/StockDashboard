import React from "react";
import { Link } from "react-router-dom";
import CustomInputField from "../../common/CustomInputField";

const PlanUpgradeDetail = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span className="h5">Plan Upgrade Details</span>
              <Link className="text-decoration-none">
                <span className="btn btn-primary">Bake</span>
              </Link>
            </div>

            <div>
              <div className="card-body text-center">
                <h4>You are using Ultimate (REMS) trial</h4>
                <h3 className="text-danger">Your trial expires in 61 days</h3>
                <p className="text-warning">
                  Your Account will be deactivated after the trial period.
                </p>
                <p>
                  To continue uninterrupted services of Centra Hub, select a
                  plan from below.
                </p>
              </div>
              <div className="mb-3 form-check d-flex align-items-cente">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="exampleCheck1"
                >
                  I agree to the terms and conditions
                </label>
              </div>
              <div className="card bg-light mb-4">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fa-brands fa-discord fa-3x"></i>
                  </div>
                  <h5 className="card-title fw-bold">Ultimate</h5>
                  <p className="card-text">
                    <strong>₹2917</strong> user subscription/month billed
                    annually OR
                    <strong> ₹3500</strong> month-to-month
                  </p>
                  <p className="card-text">
                    Best choice for businesses trying to scale, with
                    process-centric sales, marketing automation & service.
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="numberOfUsers"
                      className="form-label text-start"
                    >
                      Number of users
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="numberOfUsers"
                      placeholder="Enter number of users"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="billingCycle"
                      className="form-label text-start"
                    >
                      Billing Cycle
                    </label>
                    <select className="form-select" id="billingCycle">
                      <option selected>Choose...</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border text-center bg-light p-3">
                    <p className="mb-0">Monthly ₹8,751.00 for 3 Users</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border text-center bg-light p-3">
                    <p className="mb-0">Yearly ₹105,012.00 for 3 Users</p>
                  </div>
                </div>
              </div>

              <div className="row d-flex flex-column container">
                <div className="d-flex justify-content-between text-end mb-2">
                  <span className="pe-3">Total :</span>
                  <span>₹ 105,012.00</span>
                </div>
                <div className="d-flex justify-content-between text-end mb-2">
                  <span className="pe-3">Amount to be paid :</span>
                  <span>₹ 105,012.00</span>
                </div>
                <div className="d-flex justify-content-between text-end mb-2">
                  <span className="pe-3">GST (18%) :</span>
                  <span>₹ 18,902.16</span>
                </div>
                <div className="d-flex justify-content-between text-end bg-light p-2">
                  <span className="pe-3">Grand Total :</span>
                  <span>₹ 123,914.16</span>
                </div>
              </div>

              <div className="mb-3 form-check d-flex align-items-cente mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="exampleCheck1"
                >
                  I agree to Terms and Conditions
                </label>
              </div>

              <div className="text-center">
                <Link to="/checkout" className="btn btn-primary">
                  Proceed to Pay
                </Link>
                <Link to="/checkout" className="btn btn-primary">
                  cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanUpgradeDetail;
