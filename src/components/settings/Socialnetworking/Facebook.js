import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { Container, Card, Alert, Form, Button } from "react-bootstrap";

function SocialFacebooks() {
  const [facebookClientId, setFacebookClientId] = useState("871837010139398");
  const [facebookClientSecret, setFacebookClientSecret] = useState(
    "589c5603ca2feed7595d8eca35a8e22c"
  );
  const [facebookAppVersion, setFacebookAppVersion] = useState("v16.0");

  const [facebookStatus, setFacebookStatus] = useState({
    Profiles: "disable",
    Groups: "disable",
    Pages: "disable",
  });

  const [facebookLoginMethod, setFacebookLoginMethod] = useState({
    Profiles: "disable",
    Groups: "disable",
    Pages: "disable",
  });

  const [permissions, setPermissions] = useState({
    Profiles: "",
    Groups: "publish_to_groups",
    Pages: "pages_read_engagement,pages_manage_posts,pages_show_list",
  });

  const handleStatusChange = (type, value) => {
    setFacebookStatus((prev) => ({ ...prev, [type]: value }));
  };

  const handleLoginMethodChange = (type, value) => {
    setFacebookLoginMethod((prev) => ({ ...prev, [type]: value }));
  };

  const handlePermissionChange = (type, value) => {
    setPermissions((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: "40rem" }}>
        <Card className="shadow-lg border-0 p-3">
          <Card.Body>
            <Card.Title className="mb-4 text-white bg-black p-3 rounded text-center d-flex justify-content-left align-items-center gap-2">
              <FaLink /> Facebook API Configuration
            </Card.Title>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Facebook Client ID</Form.Label>
                <Form.Control
                  type="text"
                  value={facebookClientId}
                  onChange={(e) => setFacebookClientId(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">
                  Facebook Client Secret
                </Form.Label>
                <Form.Control
                  type="text"
                  value={facebookClientSecret}
                  onChange={(e) => setFacebookClientSecret(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">
                  Facebook App Version
                </Form.Label>
                <Form.Control
                  type="text"
                  value={facebookAppVersion}
                  onChange={(e) => setFacebookAppVersion(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        {["Profiles", "Groups", "Pages"].map((type) => (
          <Card key={type} className="shadow-lg border-0 p-3 mt-4">
            <Card.Body>
              <Card.Title className="mb-3 text-white bg-black p-3 rounded text-center">
                Facebook {type}
              </Card.Title>

              <Alert variant="light" className="border text-left">
                <FaLink className="me-2 text-primary" size={20} />
                <strong>Callback URL:</strong>
                <a
                  href={`https://demo.stackposts.com/spre/facebook_${type.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block mt-1"
                >
                  {`https://demo.stackposts.com/spre/facebook_${type.toLowerCase()}`}
                </a>
              </Alert>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">
                    Facebook {type} API Official
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Check
                      type="radio"
                      label="Enable"
                      name={`facebookStatus${type}`}
                      className="me-3"
                      checked={facebookStatus[type] === "enable"}
                      onChange={() => handleStatusChange(type, "enable")}
                    />
                    <Form.Check
                      type="radio"
                      label="Disable"
                      name={`facebookStatus${type}`}
                      checked={facebookStatus[type] === "disable"}
                      onChange={() => handleStatusChange(type, "disable")}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">
                    Facebook {type} Cookies API
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Check
                      type="radio"
                      label="Enable"
                      name={`facebookLoginMethod${type}`}
                      className="me-3"
                      checked={facebookLoginMethod[type] === "enable"}
                      onChange={() => handleLoginMethodChange(type, "enable")}
                    />
                    <Form.Check
                      type="radio"
                      label="Disable"
                      name={`facebookLoginMethod${type}`}
                      checked={facebookLoginMethod[type] === "disable"}
                      onChange={() => handleLoginMethodChange(type, "disable")}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Permissions</Form.Label>
                  <Form.Control
                    type="text"
                    value={permissions[type]}
                    onChange={(e) =>
                      handlePermissionChange(type, e.target.value)
                    }
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        ))}

        <div className="text-center mt-4">
          <Button variant="success">Save</Button>
        </div>
      </div>
    </Container>
  );
}

export default SocialFacebooks;
