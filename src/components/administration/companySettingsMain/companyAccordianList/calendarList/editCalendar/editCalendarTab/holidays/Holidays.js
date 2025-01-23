import React from "react";
import CustomInputField from "../../../../../../../../common/CustomInputField";

const Holidays = () => {
  // let denomination = [
  //     {id: 1, denominationInput: ""}
  // ]
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div className=" ">
              <h4 className="bg-black py-1 px-4 text-light fs-4">
                {" "}
                Holiday Details
              </h4>
            </div>
            <div className="row pt-3 px-2">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                    Holiday Name
                  </label>
                  <CustomInputField type="text" id="name" />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="location" className="form-label fs-5">
                    Holiday Name
                  </label>
                  <CustomInputField type="date" />
                </div>
              </div>

              <div className="col-12 d-flex align-items-center gap-2">
                <div className="d-flex justify-content-start">
                  <CustomInputField type="checkbox" />
                </div>
                <label htmlFor="location" className="form-label fs-5">
                  Recurrence Detail
                </label>
              </div>

              <div className="col-12">
                <div className="row justify-content-between">
                  {/* -------Recurrence Pattern-------------------- */}
                  <div className="col-6 border">
                    <div className="row">
                      <div className="col-12">
                        <h5 className="text-danger fs-5">Recurrence Pattern</h5>
                      </div>
                      <div className="col-3">
                        <div className="d-flex align-items-center gap-2">
                          <div className="d-flex justify-content-start">
                            <CustomInputField type="radio" />
                          </div>
                          <label
                            htmlFor="location"
                            className="form-label fs-5 text-nowrap"
                          >
                            Day
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="d-flex align-items-center gap-2">
                          <div className="d-flex justify-content-start">
                            <CustomInputField type="radio" />
                          </div>
                          <label
                            htmlFor="location"
                            className="form-label fs-5 text-nowrap"
                          >
                            Week
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="d-flex align-items-center gap-2">
                          <div className="d-flex justify-content-start">
                            <CustomInputField type="radio" />
                          </div>
                          <label
                            htmlFor="location"
                            className="form-label fs-5 text-nowrap"
                          >
                            Month
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="d-flex align-items-center gap-2">
                          <div className="d-flex justify-content-start">
                            <CustomInputField type="radio" />
                          </div>
                          <label
                            htmlFor="location"
                            className="form-label fs-5 text-nowrap"
                          >
                            Year
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
                            <label
                              htmlFor="location"
                              className="form-label fs-5 text-nowrap text-success"
                            >
                              Daily
                            </label>
                          </div>
                          <div className="col-12">
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label fs-5">
                                Holiday Name
                              </label>
                              <CustomInputField type="text" id="name" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -------Range Of Recurrence-------------------- */}
                  <div className="col-6 border">
                    <div className="row">
                      <div className="col-12">
                        <h5 className="text-danger fs-5">
                          Range Of Recurrence
                        </h5>
                      </div>

                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
                            <label
                              htmlFor="location"
                              className="form-label fs-5 text-nowrap"
                            >
                              Start Date
                            </label>
                          </div>

                          <div className="col-6">
                            <div className="d-flex align-items-center gap-2">
                              <div className="d-flex justify-content-start">
                                <CustomInputField type="radio" />
                              </div>
                              <label
                                htmlFor="location"
                                className="form-label fs-5 text-nowrap"
                              >
                                End After
                              </label>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                              <div className="d-flex justify-content-start">
                                <CustomInputField type="radio" />
                              </div>
                              <label
                                htmlFor="location"
                                className="form-label fs-5 text-nowrap"
                              >
                                End By
                              </label>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                              <div className="d-flex justify-content-start">
                                <CustomInputField type="radio" />
                              </div>
                              <label
                                htmlFor="location"
                                className="form-label fs-5 text-nowrap"
                              >
                                Never Ending
                              </label>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="mt-2">
                              <CustomInputField type="date" />
                            </div>
                            <div className="mt-2">
                              <CustomInputField type="date" />
                            </div>
                            <div className="mt-2">
                              <CustomInputField type="date" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-3 text-end">
              <button type="button" class="btn btn-outline-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
