import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MobileAppQuestion() {
  const location = useLocation();
  const navigate = useNavigate();

  const { question, answer } = location.state || {};
  const [updatedQuestion, setUpdatedQuestion] = useState(question || "");
  const [updatedAnswer, setUpdatedAnswer] = useState(answer || "");

  const handleSave = () => {
    console.log("Updated Question:", updatedQuestion);
    console.log("Updated Answer:", updatedAnswer);
   
    alert("FAQ updated successfully!");
    navigate("/faqsmanager");
  };

  const handleBack = () => {
    navigate("/faqsmanager"); 
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4">Update FAQ</h1>
      <div className="mb-3">
        <label className="form-label">Question</label>
        <input
          type="text"
          className="form-control"
          value={updatedQuestion}
          onChange={(e) => setUpdatedQuestion(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Answer</label>
        <textarea
          className="form-control"
          rows="4"
          value={updatedAnswer}
          onChange={(e) => setUpdatedAnswer(e.target.value)}
        ></textarea>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={handleBack}>
          Back
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default MobileAppQuestion;
