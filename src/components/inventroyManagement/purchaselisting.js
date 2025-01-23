import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import NotAvailable from "../../assets/images/notavilable.png";
import { Link } from "react-router-dom";
function PurchaseSearch() {
  return (
    <Container>
      <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-light">Purchase Listing</h4>
        <div>
             <Link to="/addpurchaseinven"  className="text-decoration-none">  
          <button className="btn btn-primary me-2">Add Purchase</button>
          </Link>
          <button className="btn btn-primary">Back</button>
        </div>
      </div>
      <hr />

      <Card className="p-4 shadow-sm">
        <h5 className="mb-4">Search</h5>
        <Row className="align-items-center">
          <Col md={3} className="mb-3 mb-md-0">
            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Select>
                <option value="">Select Supplier</option>
                <option value="supplier1">Supplier 1</option>
                <option value="supplier2">Supplier 2</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={3} className="mb-3 mb-md-0">
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={2} className="mb-3 mb-md-0">
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>

          <Col md={2} className="mb-3 mb-md-0">
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>

          <Col md={2} className="d-flex justify-content-end align-items-end">
            <Button variant="secondary" className="me-2">
              Reset
            </Button>
            <Button variant="primary">Search</Button>
          </Col>
        </Row>
      </Card>

      <Card className="mt-4 text-center py-5 shadow-sm">
        <Card.Body>
          <div>
            <img
              src={NotAvailable}
              alt="No records available"
              className="mb-3"
              style={{ maxWidth: "150px", height: "100px" }}
            />
          </div>
          <p className="text-muted mb-0">No purchase records available</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PurchaseSearch;
