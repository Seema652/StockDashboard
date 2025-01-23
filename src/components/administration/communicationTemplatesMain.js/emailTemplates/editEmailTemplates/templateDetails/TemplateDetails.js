import React from "react";
import CustomInputField from "../../../../../../common/CustomInputField";
import { TbArrowsLeftRight } from "react-icons/tb";

const TemplateDetails = () => {
  return (
    <div className="row">
      <div className="col-12">
          <form>
            <div>
              <h4 className="bg-black rounded fs-4 text-light py-2 px-4">
              Template Details
              </h4>

              <div className="row mt-3 px-2">
                <div className="col-6">
                  <label htmlFor="currency" className="form-label fs-5">
                    Name
                  </label>
                  <CustomInputField type={"text"} />
                </div>

                <div className="col-6">
                  <label htmlFor="currency" className="form-label fs-5">
                    Template
                  </label>
                  <CustomInputField type={"file"} />
                </div>

                <div className="col-6">
                  <div className="mt-3">
                    <label htmlFor="currency" className="form-label fs-5">
                      Email Type
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
                  <div className="mt-3">
                    <label htmlFor="currency" className="form-label fs-5">
                      Encoding
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
                  <div className="mt-3">
                    <label htmlFor="currency" className="form-label fs-5">
                      Scope
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
                  <div className="mt-3">
                    <label htmlFor="currency" className="form-label fs-5">
                      Module
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

                <div className="col-6">
                  <div class="form-check d-flex align-items-center gap-2 fs-5 mt-5">
                    <input
                      className="form-check-input"
                      type="checkBox"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label fs-5"
                      for="flexRadioDefault2"
                    >
                      Active
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <h4 className="bg-black rounded fs-4 text-light py-2 px-4">
                Role
                </h4>
              </div>
              <div className="col-6">
                <div class="form-check d-flex align-items-center gap-2 fs-5 mt-3">
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
                    Allow All Roles To Use This Application
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div class="form-check d-flex align-items-center gap-2 fs-5 mt-3">
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
                    Allow Only Selected Roles To Use This Application
                  </label>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-5">
                <label className="fs-4 text-success">Available List</label>
                <div className="border" style={{ height: "200px" }}></div>
              </div>

              <div className="col-2 d-flex justify-content-center align-items-center">
                <TbArrowsLeftRight className="fs-2" />
              </div>

              <div className="col-5">
                <label className="fs-4 text-success">Selected List</label>
                <div className="border" style={{ height: "200px" }}></div>
              </div>
            </div>
          </form>
      </div>
    </div>
  );
};

export default TemplateDetails;
