import React, { useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { FaLink } from "react-icons/fa";

const RadioGroup = ({ label, name, value, onChange }) => (
  <Form.Group className="mb-3 text-left">
    <Form.Label className="fw-bold">{label}</Form.Label>
    <div className="d-flex justify-content-left">
      <Form.Check
        type="radio"
        label="Enable"
        name={name}
        className="me-3"
        checked={value === "enable"}
        onChange={() => onChange(name, "enable")}
      />
      <Form.Check
        type="radio"
        label="Disable"
        name={name}
        checked={value === "disable"}
        onChange={() => onChange(name, "disable")}
      />
    </div>
  </Form.Group>
);

function SocialInstagrams() {
  const [formData, setFormData] = useState({
    facebookClientId: "871837010139398",
    facebookClientSecret: "589c5603ca2feed7595d8eca35a8e22c",
    facebookAppVersion: "v16.0",
    permissions:
      "instagram_basic,instagram_content_publish,pages_read_engagement",
    instagramAPIStatus: "enable",
    instagramLoginStatus: "enable",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container className="d-flex justify-content-center align-items-start vh-100">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <Card className="shadow-lg border-0 p-3">
          <Card.Body>
            <Card.Title className="mb-4 text-white bg-black p-3 rounded text-start d-flex justify-content-left align-items-start gap-2">
              <FaLink /> Instagram API Configuration
            </Card.Title>

            <Alert variant="light" className="border text-left">
              <FaLink className="me-2 text-primary" size={30} />
              <p className="mb-0">
                <strong>Callback URL: </strong>
                <a
                  href="https://demo.stackposts.com/spre/instagram_profiles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://demo.stackposts.com/spre/instagram_profiles
                </a>
              </p>
            </Alert>

            <Form>
              <RadioGroup
                label="Instagram API Official"
                name="instagramAPIStatus"
                value={formData.instagramAPIStatus}
                onChange={handleRadioChange}
              />
              <RadioGroup
                label="Instagram login with username and password"
                name="instagramLoginStatus"
                value={formData.instagramLoginStatus}
                onChange={handleRadioChange}
              />

              {[
                "facebookClientId",
                "facebookClientSecret",
                "facebookAppVersion",
                "permissions",
              ].map((field, index) => (
                <Form.Group className="mb-3 text-left" key={field}>
                  <Form.Label className="fw-bold">
                    {
                      [
                        "Facebook Client ID",
                        "Facebook Client Secret",
                        "Facebook App Version",
                        "Permissions",
                      ][index]
                    }
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              ))}
            </Form>
          </Card.Body>
        </Card>

        <div className="mt-4 text-left">
          <Button variant="success">Save</Button>
        </div>
      </div>
    </Container>
  );
}

export default SocialInstagrams;
