import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { Container, Card, Alert, Form, Button } from "react-bootstrap";

function SocialTwitters() {
  const [twitterClientId, setTwitterClientId] = useState("");
  const [twitterClientSecret, setTwitterClientSecret] = useState("");
  const [twitterConsumerId, setTwitterConsumerId] = useState(
    "DVvWAh6ZUmvQVEO1ifPoKiMAp"
  );
  const [twitterConsumerSecret, setTwitterConsumerSecret] = useState(
    "gNF8C9fPMUCnCu5TXu58glIuKkn9gOk5Z4EsJFVbGFw3TS3ZzR"
  );
  const [bearerToken, setBearerToken] = useState("");
  const [status, setStatus] = useState("");

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100" style={{ maxWidth: "40rem" }}>
        <Card className="shadow-lg border-0 p-3">
          <Card.Body>
            <Card.Title className="mb-4 text-white bg-black p-3 rounded text-center d-flex justify-content-left align-items-center gap-2">
              <FaLink /> Twitter API Configuration
            </Card.Title>

            <Alert variant="light" className="border text-left">
              <FaLink className="me-2 text-primary" size={30} />
              <p className="mb-0">
                <strong>Callback URL: </strong>
                <a
                  href="https://demo.stackposts.com/spre/twitter_profiles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://demo.stackposts.com/spre/twitter_profiles
                </a>
              </p>
            </Alert>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">
                  Twitter API Official
                </Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="Enable"
                    name="twitterStatus"
                    className="me-3"
                    checked={status === "enable"}
                    onChange={() => handleStatusChange("enable")}
                  />
                  <Form.Check
                    type="radio"
                    label="Disable"
                    name="twitterStatus"
                    checked={status === "disable"}
                    onChange={() => handleStatusChange("disable")}
                  />
                </div>
              </Form.Group>

              {[
                "Twitter Client ID",
                "Twitter Client Secret",
                "Twitter Consumer ID",
                "Twitter Consumer Secret",
                "Bearer Token",
              ].map((label, index) => {
                const fieldNames = [
                  "twitterClientId",
                  "twitterClientSecret",
                  "twitterConsumerId",
                  "twitterConsumerSecret",
                  "bearerToken",
                ];
                return (
                  <Form.Group className="mb-3" key={fieldNames[index]}>
                    <Form.Label className="fw-bold text-start d-block">
                      {label}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={eval(fieldNames[index])}
                      onChange={(e) =>
                        eval(
                          `set${
                            fieldNames[index].charAt(0).toUpperCase() +
                            fieldNames[index].slice(1)
                          }`
                        )(e.target.value)
                      }
                    />
                  </Form.Group>
                );
              })}
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

export default SocialTwitters;
