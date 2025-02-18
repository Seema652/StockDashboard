import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPalette } from "react-icons/fa";

import thumbnail from "../../assets/thumbnail.jpg";

function Appearance() {
  const [sidebarType, setSidebarType] = useState("Open");
  const [themeColor, setThemeColor] = useState("Full light");
  const [iconColor, setIconColor] = useState("Default");
  const [customColor, setCustomColor] = useState("#006DFF");

  return (
    <Container fluid className="p-4 d-flex justify-content-center">
      <div className="col-lg-8 col-md-10">
        <Card className="p-4 shadow-lg border-0">
          <h3 className="bg-black text-white p-2 rounded d-flex align-items-center gap-2">
            <FaPalette className="me-2 text-primary" />
            Backend Configure
          </h3>
          <Form>
            <Form.Group>
              <Form.Label>Sidebar type</Form.Label>
              <div>
                {["Close", "Open", "Hover"].map((type) => (
                  <Form.Check
                    inline
                    key={type}
                    type="radio"
                    label={type}
                    checked={sidebarType === type}
                    onChange={() => setSidebarType(type)}
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Theme color</Form.Label>
              <div>
                {[
                  "Full light",
                  "Sidebar dark",
                  "Sidebar & header light",
                  "Full dark",
                ].map((color) => (
                  <Form.Check
                    inline
                    key={color}
                    type="radio"
                    label={color}
                    checked={themeColor === color}
                    onChange={() => setThemeColor(color)}
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Sidebar icon color</Form.Label>
              <div>
                {["Default", "Custom color"].map((colorOption) => (
                  <Form.Check
                    inline
                    key={colorOption}
                    type="radio"
                    label={colorOption}
                    checked={iconColor === colorOption}
                    onChange={() => setIconColor(colorOption)}
                  />
                ))}
              </div>
            </Form.Group>

            {iconColor === "Custom color" && (
              <Form.Group className="mt-3">
                <Form.Label>Custom color</Form.Label>
                <Form.Control
                  type="color"
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                />
              </Form.Group>
            )}
          </Form>
        </Card>

        <Card className="p-4 shadow-lg border-0 mt-4">
          <h3 className="bg-black text-white p-2 rounded d-flex align-items-center gap-2">
            <FaPalette className="me-2 text-primary" />
            Frontend Themes
          </h3>
          <Row>
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card className="border rounded-6">
                <div className="card-body p-0 overflow-hidden rounded-bottom-0">
                  <img
                    src={thumbnail}
                    className="img-fluid w-100"
                    alt="Theme Thumbnail"
                    style={{
                      objectFit: "cover",
                      borderRadius: "0",
                      height: "auto",
                    }}
                  />
                </div>

                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <div className="text-gray-800">Stackblue</div>
                  <Button
                    type="button"
                    className="btn btn-success btn-sm btn-disable"
                  >
                    Activated
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Card>

        <div className="text-end mt-3">
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </Container>
  );
}

export default Appearance;
