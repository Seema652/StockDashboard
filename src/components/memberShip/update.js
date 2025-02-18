import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaBox, FaEllipsisV, FaArrowLeft, FaEdit, FaLock, FaClipboard } from 'react-icons/fa';
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar";
import { useNavigate } from 'react-router-dom';
const Updatepage = () => {
  const navigate =useNavigate();
  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="mt-4" style={{ maxWidth: "800px" }}>
        <Card className="p-4 shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">
              <FaEdit className="me-2" /> Update
            </h4>
            <Button variant="primary" className="border"  onClick={() => navigate("/membership")}  >
              <FaArrowLeft /> Back
            </Button>
          </div>

       
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex">
                <div className="me-3">
                  <FaClipboard size={20} className="me-2" />
                  <span>Plan Info</span>
                </div>
                <div>
                  <FaLock size={20} className="me-2" />
                  <span>Permissions</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Label>Status</Form.Label>
                <Form.Check type="radio" label="Enable" name="status" />
                <Form.Check type="radio" label="Disable" name="status" />
              </Col>
              <Col>
                <Form.Label>Featured</Form.Label>
                <Form.Check type="radio" label="Enable" name="featured" />
                <Form.Check type="radio" label="Disable" name="featured" />
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Plan Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            
            <Row className="mb-3">
              <Col>
                <Form.Label>Price Monthly</Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col>
                <Form.Label>Price Annually</Form.Label>
                <Form.Control type="text" />
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Number of Accounts is calculated by</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Each social network" name="accounts" defaultChecked />
                <Form.Check inline type="radio" label="Entire social network" name="accounts" />
              </div>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Number of Accounts</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            
            <div className="d-flex justify-content-start gap-2">
              <Button variant="primary">Save</Button>
              <Button variant="dark">Save and update subscribers</Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Updatepage;
