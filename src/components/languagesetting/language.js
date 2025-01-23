import React, { useState } from 'react';
import { Table, Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash, FaHome } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const LanguageSetting = () => {
  const [languages, setLanguages] = useState([
    { id: 1, name: 'English' },
    { id: 2, name: 'Indonesia' },
    { id: 3, name: 'Bangla' },
    { id: 4, name: 'Deutsch' },
    { id: 5, name: 'Trke' },
  ]);

  const [newLanguage, setNewLanguage] = useState('');

  const addLanguage = () => {
    if (newLanguage.trim()) {
      setLanguages([...languages, { id: languages.length + 1, name: newLanguage }]);
      setNewLanguage('');
    }
  };

  const deleteLanguage = (id) => {
    setLanguages(languages.filter((language) => language.id !== id));
  };

  return (
    <div className="container mt-5">
    
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: '1.5rem' }} />
        <h3 className="mb-0">Language</h3>
      </div>

    
      <div className="card shadow">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <Button variant="primary">Bulk Upload</Button>
          <Button variant="success">Add Purchase</Button>
        </div>

        <div className="card-body">
        
          <InputGroup className="mb-3" style={{ maxWidth: '400px' }}>
            <Form.Control
              type="text"
              placeholder="Language Name"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
            />
            <Button variant="success" className="ms-2" onClick={addLanguage}>
              Save
            </Button>
          </InputGroup>

      
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Language</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {languages.map((language) => (
                <tr key={language.id}>
                  <td>{language.id}</td>
                  <td>{language.name}</td>
                  <td>
                    <Button variant="primary" className="me-2">
                      <FaEdit />
                    </Button>
                    <Button variant="danger" onClick={() => deleteLanguage(language.id)}>
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default LanguageSetting;
