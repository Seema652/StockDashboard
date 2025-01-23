import React from "react";
import CustomInputField from "../../../../../../common/CustomInputField";

const NewFiscalYear = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <form>
            <div className="bg-black text-light py-2 px-4">
              <h4 className="fs-4">New Fiscal Year</h4>
            </div>

            <div className="row mt-3 px-2">
              <div className="col-6">
                <label htmlFor="currency" className="form-label fs-5">
                  Year
                </label>
                <CustomInputField type={"date"} />
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fs-5">
                    Month
                  </label>
                  <select
                    class="form-select fs-5"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fs-5">
                    Day
                  </label>
                  <select
                    class="form-select fs-5"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fs-5">
                    Target Period
                  </label>
                  <select
                    class="form-select fs-5"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="currency" className="form-label fs-5 mt-3">
                  Display Fiscal Year Based on
                </label>
              </div>

              <div className="col-6">
                <div className="form-check d-flex align-items-center gap-2 fs-5">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                  />
                  <label
                    className="form-check-label fo"
                    for="flexRadioDefault1"
                  >
                    Start Month
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div class="form-check d-flex align-items-center gap-2 fs-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    className="form-check-label fs-5"
                    for="flexRadioDefault2"
                  >
                    End Month
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div className="mt-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label fs-5"
                  >
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="col-12">
                <div className="mt-3 text-center">
                  <button type="button" class="btn btn-primary fs-5">
                    Save
                  </button>
                  <button type="button" class="btn btn-primary fs-5">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewFiscalYear;
