import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function TemplateManagement() {
  const [templates, setTemplates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTemplate, setNewTemplate] = useState({
    template: '',
    type: '',
    recipientType: '',
    recipient: '',
    criteria: '',
  });

  const handleAddTemplate = () => {
    setTemplates([...templates, { ...newTemplate, id: templates.length + 1 }]);
    setShowModal(false);
    setNewTemplate({ template: '', type: '', recipientType: '', recipient: '', criteria: '' });
  };

  const handleRemoveTemplate = (id) => {
    setTemplates(templates.filter((template) => template.id !== id));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Template Management</h4>

        {/* Table for templates */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Template</th>
              <th>Template Type</th>
              <th>Recipient Type</th>
              <th>Recipient</th>
              <th>Criteria</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {templates.length > 0 ? (
              templates.map((template, index) => (
                <tr key={template.id}>
                  <td>{index + 1}</td>
                  <td>{template.template}</td>
                  <td>{template.type}</td>
                  <td>{template.recipientType}</td>
                  <td>{template.recipient}</td>
                  <td>{template.criteria}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveTemplate(template.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No templates added.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Button to open modal */}
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Template
        </Button>
      </div>

      {/* Modal for adding templates */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Escalaion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Template</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter template name"
                value={newTemplate.template}
                onChange={(e) => setNewTemplate({ ...newTemplate, template: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Template Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter template type"
                value={newTemplate.type}
                onChange={(e) => setNewTemplate({ ...newTemplate, type: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Recipient Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter recipient type"
                value={newTemplate.recipientType}
                onChange={(e) => setNewTemplate({ ...newTemplate, recipientType: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Recipient</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter recipient name"
                value={newTemplate.recipient}
                onChange={(e) => setNewTemplate({ ...newTemplate, recipient: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Criteria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter criteria"
                value={newTemplate.criteria}
                onChange={(e) => setNewTemplate({ ...newTemplate, criteria: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTemplate}>
            Add Template
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TemplateManagement;
