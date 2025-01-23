import React from "react";
import CustomInputField from "../../common/CustomInputField";

const TrackerSettingsForm = () => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="d-flex align-items-center justify-content-between bg-black text-light py-2 px-4">
              <h4 className="fs-4">Track Settings</h4>
              <span className="fs-3">-</span>
            </div>
            <div className="px-5">
              <div className="row mt-3">
                <div className="col-2">
                  <label className="fs-5">Track Based On</label>
                </div>
                <div className="col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label fs-5"
                      htmlFor="flexRadioDefault2"
                    >
                      Track Timings
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor="startTime"
                      className="form-label text-nowrap fs-5"
                    >
                      Start Time
                    </label>
                    <CustomInputField
                      type="time"
                      className="w-100"
                      id="startTime"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="endTime" className="form-label text-nowrap fs-5">
                      End Time
                    </label>
                    <CustomInputField
                      type="time"
                      className="w-100"
                      id="endTime"
                    />
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label fs-5" htmlFor="exampleCheck1">
                      Track locations within Attendance punch-in/punch-outs time
                      only
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
            <div className="d-flex align-items-center justify-content-between bg-black text-light py-2 px-4">
                <h4 className="fs-4">Track Settings</h4>
                <span className="fs-3">-</span>
              </div>
              <div className="col-12 px-5">
                <div className="row ">
                  <div className="col-5 border p-3 m-2">
                    {" "}
                    {/* Added border and padding */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label fs-5"
                        htmlFor="flexRadioDefault1"
                      >
                        Default radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        className="form-check-label fs-5"
                        htmlFor="flexRadioDefault2"
                      >
                        Default checked radio
                      </label>
                    </div>
                  </div>
                  <div className="col-5 border p-3 m-2">
                    {" "}
                    {/* Added border and padding */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        className="form-check-label fs-5"
                        htmlFor="exampleRadios1"
                      >
                        Default radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label
                        className="form-check-label fs-5"
                        htmlFor="exampleRadios2"
                      >
                        Second default radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios3" // Changed id to avoid duplication
                        value="option3"
                      />
                      <label
                        className="form-check-label fs-5"
                        htmlFor="exampleRadios3"
                      >
                        Disabled radio
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label className="form-check-label fs-5" for="inlineCheckbox1">
                        Automatically apply customer address change in Route
                        Plan
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label fs-5" for="inlineCheckbox2">
                        Show Route plan as per the definition
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <button type="button" className="btn btn-primary fs-5">
                    Save
                  </button>
                  <button type="button" className="btn btn-primary fs-5">
                    Cencel
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

export default TrackerSettingsForm;
