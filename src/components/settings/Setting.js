import React from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { BiFolder } from "react-icons/bi";

const InputField = ({ label, type = "text", placeholder, as = "input" }) => (
  <Form.Group className="mb-3">
    <Form.Label className="fw-bold">{label}</Form.Label>
    <Form.Control
      as={as}
      type={type}
      placeholder={placeholder}
      className="border rounded"
    />
  </Form.Group>
);

const ImageInput = ({ label, value, onClick }) => (
  <Form.Group className="mb-3">
    <Form.Label className="fw-bold">{label}</Form.Label>
    <InputGroup>
      <Form.Control
        type="text"
        value={value}
        readOnly
        className="border rounded"
      />
      <Button variant="light" className="border" onClick={onClick}>
        <BiFolder size={20} className="text-primary" />
      </Button>
    </InputGroup>
  </Form.Group>
);

const WebsiteInfo = () => {
  const handleFolderManagerOpen = () => alert("Folder manager opened.");

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <Card
            className="shadow-lg mb-4 border-0"
            style={{ width: "clamp(25rem, 80vw, 70rem)" }}
          >
            <Card.Title className="mb-4 text-white bg-black p-3 rounded">
             Website Information
            </Card.Title>
            <Card.Body>
              <InputField
                label="Website title"
                placeholder="#1 Social Media Management & Analysis Platform"
              />
              <InputField
                label="Website description"
                as="textarea"
                placeholder="Manage your social media effectively."
              />
              <InputField
                label="Website keywords"
                placeholder="social network, marketing, brands"
              />

              {[
                {
                  label: "Favicon",
                  value:
                    "https://demo.stackposts.com/spmo/assets/img/favicon.svg",
                },
                {
                  label: "Logo Mark",
                  value: "https://demo.stackposts.com/spmo/assets/img/logo.svg",
                },
                {
                  label: "Logo Color",
                  value:
                    "https://demo.stackposts.com/spmo/assets/img/logo-color.svg",
                },
                {
                  label: "Logo Light",
                  value:
                    "https://demo.stackposts.com/spmo/assets/img/logo-light.svg",
                },
                {
                  label: "Logo Black",
                  value:
                    "https://demo.stackposts.com/spmo/assets/img/logo-black.svg",
                },
              ].map((item, index) => (
                <ImageInput
                  key={index}
                  label={`Website ${item.label}`}
                  value={item.value}
                  onClick={handleFolderManagerOpen}
                />
              ))}
            </Card.Body>
          </Card>

          <Card
            className="shadow-lg border-0"
            style={{ width: "clamp(25rem, 80vw, 70rem)" }}
          >
            <Card.Body>
              <Card.Title className="mb-4 text-white bg-black p-3 rounded">
                Date and Time Formats
              </Card.Title>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Date</Form.Label>
                <Form.Select className="border rounded">
                  <option value="d/m/Y">d/m/Y</option>
                  <option value="m/d/Y">m/d/Y</option>
                  <option value="Y-m-d">Y-m-d</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Datetime</Form.Label>
                <Form.Select className="border rounded">
                  <option value="d/m/Y g:i A">d/m/Y g:i A</option>
                  <option value="m/d/Y h:i A">m/d/Y h:i A</option>
                  <option value="Y-m-d H:i">Y-m-d H:i</option>
                </Form.Select>
              </Form.Group>
            </Card.Body>
          </Card>

          <div className="mt-4 text-center">
            <Button variant="success" size="lg">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteInfo;
