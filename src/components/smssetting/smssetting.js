import React, { useState } from 'react';
import { Form, Button, Table, Card } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

const SmsSetting = () => {
  const [selectedProvider, setSelectedProvider] = useState('SMS Rank');

  const providers = [
    { id: 'smsrank', name: 'SMS Rank', username: 'rabbani', password: '123456', userId: '', from: 'smsrank' },
    { id: 'nexmo', name: 'nexmo', username: '50489b88', password: 'z1cBmtrDeQrOachg', userId: '', from: 'restaurant' },
    { id: 'budgetsms', name: 'budgetsms', username: 'user1', password: '1e753da74', userId: '21547', from: 'budgetsms' },
  ];

  const handleSelectionChange = (providerId) => {
    setSelectedProvider(providerId);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Sms Setting</h3>
      </div>
     
    
      <Card className="mt-4">
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Status</th>
                <th>User Name</th>
                <th>Password</th>
                <th>UserId</th>
                <th>From</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((provider) => (
                <tr key={provider.id}>
                  <td>
                    <Form.Check
                      type="radio"
                      name="provider"
                      value={provider.name}
                      checked={selectedProvider === provider.name}
                      onChange={() => handleSelectionChange(provider.name)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={provider.username}
                      readOnly
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={provider.password}
                      readOnly
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={provider.userId}
                      readOnly
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={provider.from}
                      readOnly
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end mt-3">
            <Button variant="success">Update</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SmsSetting;
