import React from "react";

const CreateAgentForm = () => {
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="input1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="input2" className="form-label">
            Code
          </label>
          <input
            type="text"
            className="form-control"
            id="input2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="selector" className="form-label">
            Owner
          </label>
          <select className="form-select" id="selector">
            <option value="">Choose an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn btn-outline-primary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAgentForm;
