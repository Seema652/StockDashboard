import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function OpenAi() {
  return (
    <Container fluid className="d-flex justify-content-center mt-4">
      <Row className="w-100 d-flex justify-content-center">
        <Col xs={12} md={10} lg={8} className="shadow-lg border-0 p-4">
         
          <div className="bg-black text-white p-3 rounded text-center">
            <h4>
              <i className="bi bi-gear"></i> OpenAI
            </h4>
          </div>

          <div className="alert alert-primary mt-3" role="alert">
            Get OpenAI access token at:{" "}
            <a
              href="https://platform.openai.com/account/api-keys"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI API Keys
            </a>
          </div>
          <Form>
          
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Enable"
                  name="status"
                  defaultChecked
                />
                <Form.Check inline type="radio" label="Disable" name="status" />
              </div>
            </Form.Group>

            {/* API Key Input */}
            <Form.Group controlId="apiKey" className="mt-3">
              <Form.Label>Open AI API keys</Form.Label>
              <Form.Control
                type="text"
                placeholder="sk-****************"
                disabled
              />
            </Form.Group>
            {[
              {
                id: "defaultModel",
                label: "Default OpenAI Model",
                options: ["ChatGPT (Highest Cost, Speediest, More capable)"],
              },
              {
                id: "dalleModel",
                label: "Default Dall-E Model",
                options: ["Dall-E-2"],
              },
              {
                id: "tone",
                label: "Default Tone Of Voice",
                options: ["English (USA)"],
              },
              {
                id: "tonePolite",
                label: "Default Tone Of Voice",
                options: ["Polite"],
              },
              {
                id: "creativity",
                label: "Default Creativity",
                options: ["Good"],
              },
            ].map((field) => (
              <Form.Group key={field.id} controlId={field.id} className="mt-3">
                <Form.Label>{field.label}</Form.Label>
                <Form.Control as="select" defaultValue={field.options[0]}>
                  {field.options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            ))}

            {/* Number Input Fields */}
            <Row className="mt-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="maxInputLength">
                  <Form.Label>Maximum Input Length</Form.Label>
                  <Form.Control type="number" defaultValue={200} />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group controlId="maxOutputLength">
                  <Form.Label>Maximum Output Length</Form.Label>
                  <Form.Control type="number" defaultValue={200} />
                </Form.Group>
              </Col>
            </Row>

            {/* Save Button */}
            <div className="text-center mt-4">
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default OpenAi;
