import React from "react";
import { GrFormSubtract } from "react-icons/gr";
import CustomInputField from "../../../../../../../common/CustomInputField";

export const LocaleSetting = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <form>
            <div>
              <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
                <h4 className="fs-3">Date and time format</h4>
                <GrFormSubtract />
              </div>
              <div className="row pt-3 px-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                      Date Format
                    </label>
                    <CustomInputField type="date" id="name" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label fs-5">
                      Time Format
                    </label>
                    <CustomInputField type="time" id="location" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nameDisplayFormat"
                      className="form-label fs-5"
                    >
                      Business Hours
                    </label>
                    <CustomInputField type="email" id="nameDisplayFormat" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nameDisplayFormat"
                      className="form-label fs-5"
                    >
                      Calendar
                    </label>
                    <CustomInputField type="email" id="nameDisplayFormat" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nameDisplayFormat"
                      className="form-label fs-5"
                    >
                      Calendar Type
                    </label>
                    <CustomInputField type="email" id="nameDisplayFormat" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nameDisplayFormat"
                      className="form-label fs-5"
                    >
                      Number Format
                    </label>
                    <CustomInputField type="email" id="nameDisplayFormat" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="nameDisplayFormat"
                      className="form-label fs-5"
                    >
                      Time Zone
                    </label>
                    <CustomInputField type="email" id="nameDisplayFormat" />
                  </div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
                  <h4 className="fs-3"> Language Details</h4>
                  <GrFormSubtract />
                </div>
                <div className="row pt-3 px-2">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fs-5">
                        Available List
                      </label>
                      <CustomInputField type="text" id="name" />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="location" className="form-label fs-5">
                        Selected List
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
                        Default Language
                      </label>
                      <CustomInputField value="English" type="text" id="nameDisplayFormat" />
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
