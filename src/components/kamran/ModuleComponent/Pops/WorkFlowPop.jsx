import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function WorkFlowPop({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    workflowName: '',
    active: false,
    executeOn: '',
    priority: 1,
    evaluateOn: '',
    restrictExecution: false,
    filterFormula: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add logic to process the form data here
  };


  return (
    <div className='card'>
      <Modal show={show} size={"xl"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>New Work</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <div className="container mt-4">
      <h3>Workflow Details</h3>
      <form onSubmit={handleSubmit}>
        {/* Workflow Name */}
        <div className="mb-3">
          <label htmlFor="workflowName" className="form-label">
            Workflow Name
          </label>
          <input
            type="text"
            className="form-control"
            id="workflowName"
            name="workflowName"
            value={formData.workflowName}
            onChange={handleChange}
            placeholder="Enter Workflow Name"
          />
        </div>

        {/* Active Checkbox */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="active"
            name="active"
            checked={formData.active}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="active">
            Active
          </label>
        </div>

        {/* Execute On */}
        <div className="mb-3">
          <label htmlFor="executeOn" className="form-label">
            Execute On
          </label>
          <input
            type="text"
            className="form-control"
            id="executeOn"
            name="executeOn"
            value={formData.executeOn}
            onChange={handleChange}
            placeholder="Specify when to execute"
          />
        </div>

        {/* Priority */}
        <div className="mb-3">
          <label htmlFor="priority" className="form-label">
            Priority
          </label>
          <input
            type="number"
            className="form-control"
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            min="1"
            placeholder="Enter priority (e.g., 1)"
          />
        </div>

        {/* Evaluate On */}
        <div className="mb-3">
          <label htmlFor="evaluateOn" className="form-label">
            Evaluate On
          </label>
          <input
            type="text"
            className="form-control"
            id="evaluateOn"
            name="evaluateOn"
            value={formData.evaluateOn}
            onChange={handleChange}
            placeholder="Specify evaluation condition"
          />
        </div>

        {/* Restrict Execution */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="restrictExecution"
            name="restrictExecution"
            checked={formData.restrictExecution}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="restrictExecution">
            Restrict execution of this Workflow from other Workflows
          </label>
        </div>

        {/* Filter Formula */}
        <div className="mb-3">
          <label htmlFor="filterFormula" className="form-label">
            Advanced Filter Formula
          </label>
          <textarea
            className="form-control"
            id="filterFormula"
            name="filterFormula"
            value={formData.filterFormula}
            onChange={handleChange}
            rows="3"
            placeholder="Enter filter formula or leave as None"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Ok
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default WorkFlowPop;