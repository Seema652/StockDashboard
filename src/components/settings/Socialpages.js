import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Socialpages() {
  return (
    <Container fluid className="d-flex justify-content-center mt-4">
      <Row className="w-100 d-flex justify-content-center">
   
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4 border-0 shadow-lg">
            {/* Header */}
            <div className="bg-black text-white p-2 rounded mb-4">
              <h3 className="mb-0">
                <FaShareAlt className="me-2" /> Social Pages
              </h3>
            </div>

            {/* Form */}
            <Form className="d-flex flex-column gap-3">
              {[
                { id: "facebook", label: "Facebook" },
                { id: "instagram", label: "Instagram" },
                { id: "youtube", label: "YouTube" },
                { id: "tiktok", label: "TikTok" },
                { id: "twitter", label: "Twitter" },
                { id: "pinterest", label: "Pinterest" },
              ].map((item, index) => (
                <Form.Group key={index}>
                  <Form.Label className="fw-bold">{item.label}</Form.Label>
                  <Form.Control type="text" id={item.id} />
                </Form.Group>
              ))}

              {/* Save Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-50 mt-3"
              >
                Save
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Socialpages;
