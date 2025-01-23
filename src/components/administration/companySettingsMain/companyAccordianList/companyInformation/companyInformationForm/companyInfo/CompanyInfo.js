import React from "react";
import { GrFormSubtract } from "react-icons/gr";
import CustomInputField from "../../../../../../../common/CustomInputField";

const CompanyInfo = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
              <h4 className="fs-3">General Info</h4>
              <GrFormSubtract />
            </div>
            <div className="row pt-3 px-2">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                    Name
                  </label>
                  <CustomInputField type="text" id="name" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="location" className="form-label fs-5">
                    Location
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
                    Name Display Format
                  </label>
                  <CustomInputField type="text" id="nameDisplayFormat" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="website" className="form-label fs-5">
                    Website
                  </label>
                  <CustomInputField type="text" id="website" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="fiscalYearStart" className="form-label fs-5">
                    Fiscal Year Start Date
                  </label>
                  <CustomInputField type="date" id="fiscalYearStart" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fs-5">
                    Currency
                  </label>
                  <CustomInputField type="text" id="currency" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="decimals" className="form-label fs-5">
                    No. of Decimals
                  </label>
                  <CustomInputField type="text" id="decimals" />
                </div>
              </div>
            </div>
{/* --------------------------------------------------------- */}
            <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
              <h4 className="fs-3">Others</h4>
              <GrFormSubtract />
            </div>
            <div className="row pt-3 px-2">
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="staticIp" className="form-label fs-5">
                    Static IP Address
                  </label>
                  <CustomInputField type="text" id="staticIp" />
                </div>
              </div>

              <div className="col-6 mb-3 d-flex align-items-center gap-2">
                <CustomInputField type="checkbox" id="linkCrm" className="mt-2 " />
                <label htmlFor="linkCrm" className="fs-5">
                  Link CRM users to Payroll employees
                </label>
              </div>

              <div className="col-6 mb-3 d-flex align-items-center gap-2">
                <CustomInputField type="checkbox" id="linkCrm" className="me-2" />
                <label htmlFor="linkCrm" className="fs-5">
                  Link CRM users to Payroll employees
                </label>
              </div>

              <div className="col-6 mb-3 d-flex gap-2 align-items-center gap-2">
                <CustomInputField type="checkbox" id="linkCrm" className="me-2 d" />
                <label htmlFor="linkCrm" className="fs-5">
                  Link CRM users to Payroll employees
                </label>
              </div>

              <div className="col-6 mb-3 d-flex align-items-center gap-2">
                <CustomInputField type="checkbox" id="linkCrm" className="me-2" />
                <label htmlFor="linkCrm" className="fs-5">
                  Link CRM users to Payroll employees
                </label>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
