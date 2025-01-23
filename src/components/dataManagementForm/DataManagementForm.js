import React from "react";

const DataManagementForm = () => {
  return (
    <div className="card m-2">
      <form>
        <div className="col-12">
          <h4 className="fs-4 bg-black px-4 py-2 text-light">DataManagement</h4>
        </div>
        <div className="row px-2 mt-3">
          <div className="col-12">
            <div class="form-check">
              <input
                class="form-check-input fs-5"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label fs-5" for="flexRadioDefault2">
                Delete sample data (Delete all the data)
              </label>
            </div>
          </div>

          <div className="col-12">
            <div class="form-check">
              <input
                class="form-check-input fs-5"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label fs-5" for="flexRadioDefault2">
                Delete and reset the company settings (Delete the data and reset
                the company settings including all the customizations done till
                now)
              </label>
            </div>
          </div>
        </div>
        <div className=" mt-3">
          <button type="button" class="btn btn-primary">
            Submit
          </button>
          <button type="button" class="btn btn-primary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataManagementForm;
