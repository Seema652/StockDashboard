import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

function Platform() {
  return (
    <Container fluid className="d-flex justify-content-center mt-4">
      <Row className="w-100 d-flex justify-content-center">
      
        <Col xs={12} md={8} lg={6} className="text-center">
          <h3 className="text-dark fw-bold">Platform Manage</h3>
          <p className="text-muted">
            Active, inactive and set default all your platforms
          </p>

          <Card className="shadow-lg border-0 p-3 d-flex flex-row align-items-center justify-content-between">
            <FaPaperPlane className="text-danger fs-4" />
            <span className="flex-grow-1 text-center">
              Social Media Management
            </span>
            <span className="text-success">is default</span>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Platform;
