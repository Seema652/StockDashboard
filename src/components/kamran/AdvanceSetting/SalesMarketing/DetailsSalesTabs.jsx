import React from 'react';

function DetailsSalesTabs() {
  return (
    <div className="">
      <div className="">
        <h4 className="card-title text-black">Sales Life Cycle Form</h4>
        <form>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
            />
          </div>

          {/* Is Active Field */}
          <div className="mb-3">
            <label className="form-label">Is Active</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isActive"
                  id="active"
                  value="active"
                />
                <label className="form-check-label" htmlFor="active">
                  ACTIVE
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isActive"
                  id="deactive"
                  value="deactive"
                />
                <label className="form-check-label" htmlFor="deactive">
                  DE-ACTIVE
                </label>
              </div>
            </div>
          </div>

          {/* Description Field */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Overall SLC Age */}
          <div className="mb-3">
            <label htmlFor="overallAge" className="form-label">
              Overall SLC Age
            </label>
            <input
              type="number"
              className="form-control"
              id="overallAge"
              placeholder="Enter age"
              min="0"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DetailsSalesTabs;
