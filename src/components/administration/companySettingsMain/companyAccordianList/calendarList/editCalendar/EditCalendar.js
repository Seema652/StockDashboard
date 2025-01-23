import React from "react";
import { GrFormSubtract } from "react-icons/gr";
import EditCalendarTab from "./editCalendarTab/EditCalendarTab";
import CustomInputField from "../../../../../../common/CustomInputField";

const EditCalendar = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
              <h4 className="fs-3">Calendar Details </h4>
              <GrFormSubtract />
            </div>
            <div className="row pt-3 px-2">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                    Calendar Name
                  </label>
                  <CustomInputField type="text" id="name" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                    Week Starts From
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
            <div className="mt-3">
              <EditCalendarTab />
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

export default EditCalendar;
