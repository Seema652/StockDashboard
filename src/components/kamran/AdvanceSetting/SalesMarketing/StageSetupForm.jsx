import React, { useState } from 'react';

function StageSetupForm() {
  const [prerequisites, setPrerequisites] = useState([{ id: 1, stage: '' }]);

  const addPrerequisite = () => {
    setPrerequisites([...prerequisites, { id: prerequisites.length + 1, stage: '' }]);
  };

  const handleStageChange = (id, value) => {
    const updatedPrerequisites = prerequisites.map((prerequisite) =>
      prerequisite.id === id ? { ...prerequisite, stage: value } : prerequisite
    );
    setPrerequisites(updatedPrerequisites);
  };

  const removePrerequisite = (id) => {
    setPrerequisites(prerequisites.filter((prerequisite) => prerequisite.id !== id));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Stage Setup Form</h4>
        <form>
          {/* Stage Probability */}
          <div className="mb-3">
            <label htmlFor="stageProbability" className="form-label">
              Stage Probability (%)
            </label>
            <input
              type="number"
              className="form-control"
              id="stageProbability"
              placeholder="Enter probability"
              min="0"
              max="100"
            />
          </div>

          {/* Forecast Weightage */}
          <div className="mb-3">
            <label htmlFor="forecastWeightage" className="form-label">
              Forecast Weightage
            </label>
            <input
              type="number"
              className="form-control"
              id="forecastWeightage"
              placeholder="Enter weightage"
            />
          </div>

          {/* Set Deal Status To */}
          <div className="mb-3">
            <label htmlFor="dealStatus" className="form-label">
              Set Deal Status To
            </label>
            <select className="form-select" id="dealStatus">
              <option value="">Select status</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Block Product */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="blockProduct"
            />
            <label className="form-check-label" htmlFor="blockProduct">
              Block Product
            </label>
          </div>

          {/* Include Forecast */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="includeForecast"
            />
            <label className="form-check-label" htmlFor="includeForecast">
              Include Forecast
            </label>
          </div>

          {/* Pre-requisites */}
          <div className="mb-3">
            <label htmlFor="prerequisiteStage" className="form-label">
              Pre-requisites
            </label>
            {prerequisites.map((prerequisite, index) => (
              <div key={prerequisite.id} className="d-flex align-items-center mb-2">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Enter stage"
                  value={prerequisite.stage}
                  onChange={(e) => handleStageChange(prerequisite.id, e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removePrerequisite(prerequisite.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={addPrerequisite}
            >
              Add
            </button>
          </div>

          {/* Actions */}
          <div className="mb-3">
            <label className="form-label">Actions</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="newQuote"
              />
              <label className="form-check-label" htmlFor="newQuote">
                New Quote (Quote Mandatory)
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="allowSalesOrder"
              />
              <label className="form-check-label" htmlFor="allowSalesOrder">
                Allow Sales Order
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="doNotAllowPreviousStages"
              />
              <label className="form-check-label" htmlFor="doNotAllowPreviousStages">
                Do Not Allow to Select Previous Stages
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="editQuote"
              />
              <label className="form-check-label" htmlFor="editQuote">
                Edit Quote
              </label>
            </div>
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

export default StageSetupForm;
