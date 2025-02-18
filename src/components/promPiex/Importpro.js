
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function ImportProxies() {
  const navigate = useNavigate();

  const handleFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <Container className="mt-5 p-4 border rounded shadow bg-white">
      <h4 className="mb-4">
        <i className="bi bi-download"></i> Import Proxies
      </h4>

      <input type="file" id="fileInput" className="d-none" />

      <Button variant="success" className="w-100 mb-3" onClick={handleFileUpload}>
        <i className="bi bi-upload"></i> Upload CSV
      </Button>

      <Button variant="secondary" className="w-100 mb-3">
        <i className="bi bi-file-earmark-text"></i> Example Template
      </Button>

      <Button variant="primary" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left"></i> Back
      </Button>
    </Container>
  );
}

export default ImportProxies;
