import React from "react";
import RegularWorkingDays from "../regularWorkingDays/RegularWorkingDays";
import CustomInputField from "../../../../../../../../common/CustomInputField";

const WorkWeeks = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div className=" ">
              <h4 className="bg-black py-1 px-4 text-light fs-4">
                {" "}
                Work Week Details
              </h4>
            </div>
            <div className="row">
            <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                  Work Week Name
                  </label>
                  <CustomInputField type="text" id="name" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                  From Date	
                  </label>
                  <CustomInputField type="date" id="name" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                  To Date
                  </label>
                  <CustomInputField type="date" id="name" />
                </div>
              </div>
            </div>
            <div>
            <RegularWorkingDays />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkWeeks;
