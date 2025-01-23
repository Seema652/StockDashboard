import React from "react";
import { GrFormSubtract } from "react-icons/gr";
import CustomInputField from "../../../../../../../common/CustomInputField";

export const ContactInfo = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <form>
            <div>
              <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
                <h4 className="fs-3">Contact Info</h4>
                <GrFormSubtract />
              </div>
              <div className="row pt-3 px-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                      Phone
                    </label>
                    <CustomInputField type="number" id="name" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label fs-5">
                    Fax
                    </label>
                    <CustomInputField type="text" id="location" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nameDisplayFormat"
                      className="form-label fs-5"
                    >
                      Email
                    </label>
                    <CustomInputField type="email" id="nameDisplayFormat" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
                <h4 className="fs-3">	Billing Address</h4>
                <GrFormSubtract />
              </div>
              <div className="row pt-3 px-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                    Address 1
                    </label>
                    <CustomInputField type="text" id="name" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label fs-5">
                    Address 2
                    </label>
                    <CustomInputField type="text" id="location" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nameDisplayFormat"
                      className="form-label fs-5"
                    >
                      City
                    </label>
                    <CustomInputField type="text" id="nameDisplayFormat" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="website" className="form-label fs-5">
                    Zip
                    </label>
                    <CustomInputField type="text" id="website" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="fiscalYearStart"
                      className="form-label fs-5"
                    >
                      State
                    </label>
                    <CustomInputField type="text" id="fiscalYearStart" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="currency" className="form-label fs-5">
                    Country
                    </label>
                    <CustomInputField type="text" id="currency" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
                <h4 className="fs-3">Shipping Address</h4>
                <GrFormSubtract />
              </div>
              <div className="row pt-3 px-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                    Address 1
                    </label>
                    <CustomInputField type="text" id="name" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label fs-5">
                    Address 2
                    </label>
                    <CustomInputField type="text" id="location" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nameDisplayFormat"
                      className="form-label fs-5"
                    >
                      City
                    </label>
                    <CustomInputField type="text" id="nameDisplayFormat" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="website" className="form-label fs-5">
                    Zip
                    </label>
                    <CustomInputField type="text" id="website" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="fiscalYearStart"
                      className="form-label fs-5"
                    >
                      State
                    </label>
                    <CustomInputField type="text" id="fiscalYearStart" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="currency" className="form-label fs-5">
                    Country
                    </label>
                    <CustomInputField type="text" id="currency" />
                  </div>
                </div>

                <div className="col-12">
                <div className="d-flex justify-content-start">
                <button type="submit" className="btn btn-primary fs-4">
                    Save
                  </button>
                  <button type="button" className="btn btn-primary fs-4">
                    Cancel
                  </button>
                </div>
              </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
