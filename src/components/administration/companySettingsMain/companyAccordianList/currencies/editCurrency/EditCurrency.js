import React from "react";
import { GrFormSubtract } from "react-icons/gr";
import CustomInputField from "../../../../../../common/CustomInputField";

export const EditCurrency = () => {

    // let denomination = [
    //     {id: 1, denominationInput: ""}
    // ]
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
              <h4 className="fs-3"> Currency Details</h4>
              <GrFormSubtract />
            </div>
            <div className="row pt-3 px-2">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                    Currency Code
                  </label>
                  <CustomInputField type="text" id="name" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="location" className="form-label fs-5">
                    Currency Name
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
                    Coins Name
                  </label>
                  <CustomInputField type="text" id="nameDisplayFormat" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="website" className="form-label fs-5">
                    Symbol
                  </label>
                  <CustomInputField type="text" id="website" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="fiscalYearStart" className="form-label fs-5">
                    No. of Decimals
                  </label>
                  <CustomInputField type="text" id="fiscalYearStart" />
                </div>
              </div>

              <div className="col-6 mb-3 d-flex align-items-center gap-2">
                <CustomInputField
                  type="checkbox"
                  id="linkCrm"
                  className="me-2"
                />
                <label htmlFor="linkCrm" className="fs-5 ">
                  Active
                </label>
              </div>
            </div>
            {/* --------------------------------------------------------- */}
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
                <h4 className="fs-3">Rounding Off Details</h4>
                <GrFormSubtract />
              </div>
              <div className="row pt-3 px-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                      General Round Off
                    </label>
                    <CustomInputField type="text" id="name" />
                  </div>
                </div>

                <div className="col-6">
                  <label htmlFor="name" className="form-label fs-5">
                    Rounding Type
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}

            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
                <h4 className="fs-3"> Currency Connector</h4>
                <GrFormSubtract />
              </div>
              <div className="row pt-3 px-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                      Currency Unit
                    </label>
                    <CustomInputField type="text" id="name" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label fs-5">
                      Connector
                    </label>
                    <CustomInputField type="text" id="location" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label fs-5">
                      Currency SubUnit
                    </label>
                    <CustomInputField type="text" id="location" />
                  </div>
                </div>
              </div>
            </div>

            {/* ----	Denomination Details------------------------- */}

            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
                <h4 className="fs-3">Denomination Details</h4>
                <GrFormSubtract />
              </div>

              <div className="row pt-3 px-2">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-5">
                    Denomination Code
                    </label>
                    <CustomInputField type="text" />
                  </div>
                </div>

                <div className="col-6">
                  <label htmlFor="name" className="form-label fs-5">
                  Denomination Value
                  </label>
                  <CustomInputField type="text" />
                </div>

                <div className="col-6 text-end">
                <div className="mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-primary fs-2 w-25">
                    +
                  </button>
                  </div>
                </div>
                <div className="col-6">
                <div className="mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-warning fs-2 w-25"
                  >
                    -
                  </button>
                  </div>
                </div>
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
          </form>
        </div>
      </div>
    </div>
  );
};
