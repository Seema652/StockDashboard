import React from "react";
import CustomInputField from "../../../../../../common/CustomInputField";

const Attachments = () => {
  return (
    <div className="row">
      <div className="col-12">
        <form>
          <div>
            <div>
              <h4 className="bg-black rounded fs-4 text-light py-2 px-4">
                Miscellaneous Options
              </h4>
              <div className="col-6">
                <div class="form-check d-flex align-items-center gap-2 fs-5">
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
                    Do not apply padding and borders
                  </label>
                </div>
              </div>
            </div>

            <div className="row mt-3 px-2">
              <div className="col-12">
                <h4 className="bg-black rounded fs-4 text-light py-2 px-4">
                  Print Layout Details
                </h4>
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

              <div className="col-6 mt-5">
                <div class="form-check d-flex align-items-center gap-2 fs-5">
                  <input
                    className="form-check-input"
                    type="checkBox"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label fs-5"
                    for="flexRadioDefault2"
                  >
                    Embed in E-mail body
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-3 px-2">
              <div className="col-12">
                <h4 className="bg-black rounded fs-4 text-light py-2 px-4">
                Attachment Fields
                </h4>
              </div>
              <div className="col-6">
                <div className="mt-3">
                <CustomInputField type={"text"} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Attachments;
