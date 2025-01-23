import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function StartTriggerManagement() {
  const [triggers, setTriggers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTrigger, setNewTrigger] = useState({
    template: '',
    templateType: '',
    recipientType: '',
    recipient: '',
  });

  const handleAddTrigger = () => {
    setTriggers([...triggers, { ...newTrigger, id: triggers.length + 1 }]);
    setShowModal(false);
    setNewTrigger({ template: '', templateType: '', recipientType: '', recipient: '' });
  };

  const handleRemoveTrigger = (id) => {
    setTriggers(triggers.filter((trigger) => trigger.id !== id));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Start Trigger Management</h4>

        {/* Table for triggers */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Template</th>
              <th>Template Type</th>
              <th>Recipient Type</th>
              <th>Recipient</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {triggers.length > 0 ? (
              triggers.map((trigger, index) => (
                <tr key={trigger.id}>
                  <td>{index + 1}</td>
                  <td>{trigger.template}</td>
                  <td>{trigger.templateType}</td>
                  <td>{trigger.recipientType}</td>
                  <td>{trigger.recipient}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveTrigger(trigger.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No triggers added.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Button to open modal */}
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Trigger
        </Button>
      </div>

      {/* Modal for adding triggers */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Trigger</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Template</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter template"
                value={newTrigger.template}
                onChange={(e) => setNewTrigger({ ...newTrigger, template: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Template Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter template type"
                value={newTrigger.templateType}
                onChange={(e) => setNewTrigger({ ...newTrigger, templateType: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Recipient Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter recipient type"
                value={newTrigger.recipientType}
                onChange={(e) => setNewTrigger({ ...newTrigger, recipientType: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Recipient</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter recipient"
                value={newTrigger.recipient}
                onChange={(e) => setNewTrigger({ ...newTrigger, recipient: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTrigger}>
            Add Trigger
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StartTriggerManagement;
