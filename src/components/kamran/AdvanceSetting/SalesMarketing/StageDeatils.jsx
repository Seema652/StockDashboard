import React from 'react';

function StageDeatils() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Stage Form</h4>
        <form>
          {/* Stage Name */}
          <div className="mb-3">
            <label htmlFor="stageName" className="form-label">
              Stage Name
            </label>
            <input
              type="text"
              className="form-control"
              id="stageName"
              placeholder="Enter stage name"
            />
          </div>

          {/* Color */}
          <div className="mb-3">
            <label htmlFor="color" className="form-label">
              Color
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="color"
            />
          </div>

          {/* Min Age */}
          <div className="mb-3">
            <label htmlFor="minAge" className="form-label">
              Min Age
            </label>
            <input
              type="number"
              className="form-control"
              id="minAge"
              placeholder="Enter minimum age"
              min="0"
            />
          </div>

          {/* Max Age */}
          <div className="mb-3">
            <label htmlFor="maxAge" className="form-label">
              Max Age
            </label>
            <input
              type="number"
              className="form-control"
              id="maxAge"
              placeholder="Enter maximum age"
              min="0"
            />
          </div>

          {/* Follow-Up Interval */}
          <div className="mb-3">
            <label htmlFor="followUpInterval" className="form-label">
              Follow-Up Interval (days)
            </label>
            <input
              type="number"
              className="form-control"
              id="followUpInterval"
              placeholder="Enter follow-up interval in days"
              min="0"
            />
          </div>

          {/* Description */}
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

          {/* Is Active */}
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
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isActive"
                  id="inactive"
                  value="inactive"
                />
                <label className="form-check-label" htmlFor="inactive">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Is Mandatory */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isMandatory"
            />
            <label className="form-check-label" htmlFor="isMandatory">
              Is Mandatory
            </label>
          </div>

          {/* Allow on Approved Module Only */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="allowApprovedModule"
            />
            <label className="form-check-label" htmlFor="allowApprovedModule">
              Allow on Approved Module Only
            </label>
          </div>

          {/* Handled By */}
          <div className="mb-3">
            <label htmlFor="handledBy" className="form-label">
              Handled By
            </label>
            <select className="form-select" id="handledBy">
              <option value="">Select</option>
              <option value="teamA">Team A</option>
              <option value="teamB">Team B</option>
            </select>
          </div>

          {/* Type */}
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <select className="form-select" id="type">
              <option value="">Select</option>
              <option value="typeA">Type A</option>
              <option value="typeB">Type B</option>
            </select>
          </div>

          {/* Sharing By */}
          <div className="mb-3">
            <label htmlFor="sharingBy" className="form-label">
              Sharing By
            </label>
            <select className="form-select" id="sharingBy">
              <option value="">Select</option>
              <option value="email">Email</option>
              <option value="link">Link</option>
            </select>
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

export default StageDeatils;
