import React from "react";
import CustomInputField from "../../../common/CustomInputField";

const CreateBrokersForm = () => {
  return (
    <div>
      <div className="container mt-5">
        <form>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <CustomInputField type="text" />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="input2" className="form-label">
                  Code
                </label>
                <CustomInputField type="text" />
              </div>
            </div>
          </div>

          <div className="text-center mt-3">
            <button type="button" className="btn btn-primary">
              Save
            </button>
            <button type="button" className="btn btn-outline-primary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBrokersForm;
