import React from "react";
import { Form, Card, Container, Button } from "react-bootstrap";
import { FaFileAlt } from "react-icons/fa";


function FileManager() {
  return (
  
      <Container className="mt-4 mt-4 w-50 ">
        <Card className="shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h4 className="mb-3 d-flex align-items-center">
                <FaFileAlt className="me-2" /> File Manager
              </h4>
            </div>

            <Form>
              <Form.Group controlId="storageServer" className="mb-3">
                <Form.Label>Storage Server</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Direct"
                    type="radio"
                    name="storage"
                  />
                  <Form.Check
                    inline
                    label="Amazon S3"
                    type="radio"
                    name="storage"
                  />
                  <Form.Check
                    inline
                    label="Contabo S3"
                    type="radio"
                    name="storage"
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="mediasPerPage" className="mb-3">
                <Form.Label>Medias per page</Form.Label>
                <Form.Control type="number" placeholder="36" />
              </Form.Group>

              <Form.Group controlId="fileExtensions" className="mb-3">
                <Form.Label>Allow file extensions</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="jpeg,gif,png,jpg,mp4,csv,pdf,mp3"
                />
              </Form.Group>

              <Form.Group controlId="uploadFileViaUrl" className="mb-3">
                <Form.Label>Allow upload file via URL</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Enable"
                    type="radio"
                    name="uploadUrl"
                  />
                  <Form.Check
                    inline
                    label="Disable"
                    type="radio"
                    name="uploadUrl"
                  />
                </div>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>Amazon S3 - Simple Storage Service</h5>
            </div>
            <div class="mb-2">
              <div className="p-3 bg-light border rounded">
                <span class="fw-6">
                  Click this link to create Amazon S3 app:
                </span>
                <a
                  href="https://s3.console.aws.amazon.com/s3/home"
                  target="_blank"
                >
                  https://s3.console.aws.amazon.com/s3/home
                </a>
              </div>
            </div>

            <Form className="mt-3">
              <Form.Group controlId="amazonRegion" className="mb-3">
                <Form.Label>Region</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="amazonAccessKey" className="mb-3">
                <Form.Label>Access Key</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="amazonSecretKey" className="mb-3">
                <Form.Label>Secret Access Key</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group controlId="amazonBucket" className="mb-3">
                <Form.Label>Bucket Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>Contabo S3 - Simple Storage Service</h5>
            </div>
            <div className="p-3 bg-light border rounded">
              <div class="mb-2">
                <span class="fw-6">
                  Click this link to create Contabo S3 app:
                </span>
                <a href="https://contabo.com/" target="_blank">
                  https://contabo.com/
                </a>
              </div>
            </div>
            <Form className="mt-3">
              <Form.Group controlId="contaboRegion" className="mb-3">
                <Form.Label>Region</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="contaboAccessKey" className="mb-3">
                <Form.Label>Access Key</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="amazonSecretKey" className="mb-3">
                <Form.Label>Secret Access Key</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group controlId="amazonBucket" className="mb-3">
                <Form.Label>Bucket Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="amazonSecretKey" className="mb-3">
                <Form.Label>Public URL</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>Adobe Express - Image Editor</h5>
            </div>
            <div className="p-3 bg-light border rounded">
              <strong>Click this link to create Adobe Express app:</strong>{" "}
              <a
                href="https://developer.adobe.com/console"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click this link to create Adobe Express app
              </a>
              <p className="mt-2">
                <strong>REDIRECT URI:</strong>{" "}
                <a
                  href=" https://demo.stackposts.com/spre"
                  className="text-muted"
                >
                  https://demo.stackposts.com/spre
                </a>
              </p>
              <p>
                <strong>REDIRECT URI PATTERN:</strong>{" "}
                <a
                  href=" https://demo.stackposts.com/spre"
                  className="text-muted"
                >
                  https://demo.stackposts.com/spre
                </a>
              </p>
            </div>
            <div className="mt-3">
              <Form>
                <Form.Group controlId="storageServer" className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Enable"
                      type="radio"
                      name="storage"
                    />
                    <Form.Check
                      inline
                      label="Diable"
                      type="radio"
                      name="storage"
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <label>Client ID:</label>
              <input
                type="text"
                value="a0f3f6cff0054671bbe8505954fb3fb"
                className="form-control mt-1"
                readOnly
              />
            </div>
          </Card.Body>
        </Card>

        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>Unsplash (Search & Get Media Online)</h5>
            </div>

            <div className="p-3 bg-light border rounded">
              <span class="fw-6">Click this link to create Unsplash app:</span>
              <a
                href="https://unsplash.com/oauth/applications/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://unsplash.com/oauth/applications/new
              </a>
            </div>
            <div className="mt-3">
              <Form>
                <Form.Group controlId="storageServer" className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Enable"
                      type="radio"
                      name="storage"
                    />
                    <Form.Check
                      inline
                      label="Diable"
                      type="radio"
                      name="storage"
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <label>Access Key:</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Access Key"
              />
            </div>
            <div className="mt-3">
              <label>Secret Key:</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Secret Key"
              />
            </div>
          </Card.Body>
        </Card>
        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>Pexels (Search & Get Media Online)</h5>
            </div>

            <div className="p-3 bg-light border rounded">
              <span class="fw-6">Click this link to create Pexels app:</span>
              <a
                href=" https://www.pexels.com/api/new/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.pexels.com/api/new/
              </a>
            </div>
            <div className="mt-3">
              <Form>
                <Form.Group controlId="storageServer" className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Enable"
                      type="radio"
                      name="storage"
                    />
                    <Form.Check
                      inline
                      label="Diable"
                      type="radio"
                      name="storage"
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <label>API key</label>
              <input type="text" className="form-control mt-1" placeholder="" />
            </div>
          </Card.Body>
        </Card>

        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>Pexels (Search & Get Media Online)</h5>
            </div>

            <div className="p-3 bg-light border rounded">
              <span class="fw-6">Click this link to create Pixabay app:</span>
              <a
                href="https://pixabay.com/api/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pixabay.com/api/docs/
              </a>
            </div>
            <div className="mt-3">
              <Form>
                <Form.Group controlId="storageServer" className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Enable"
                      type="radio"
                      name="storage"
                    />
                    <Form.Check
                      inline
                      label="Diable"
                      type="radio"
                      name="storage"
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <label>API key</label>
              <input type="text" className="form-control mt-1" placeholder="" />
            </div>
          </Card.Body>
        </Card>

        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>Google Drive</h5>
            </div>

            <div className="p-3 bg-light border rounded">
              <span class="fw-6">Click this link to create Google app:</span>
              <a
                href="https://console.developers.google.com/projectcreate"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://console.developers.google.com/projectcreate
              </a>
            </div>
            <div className="mt-3">
              <Form>
                <Form.Group controlId="storageServer" className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Enable"
                      type="radio"
                      name="storage"
                    />
                    <Form.Check
                      inline
                      label="Diable"
                      type="radio"
                      name="storage"
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <label>Google API Key:</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="1022427544180-4jsf4hq0s3noutijleeduc22km718gpr.apps.googleusercontent.com"
              />
            </div>
            <div className="mt-3">
              <label>Google Client ID</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="AIzaSyByFmWHW1dWXw4MndTCBKC_hpe9fhJ8v2I"
              />
            </div>
          </Card.Body>
        </Card>

        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>Dropbox</h5>
            </div>

            <div className="p-3 bg-light border rounded">
              <span class="fw-6">Click this link to create Dropbox app:</span>
              <a
                href="https://www.dropbox.com/developers/apps/create"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.dropbox.com/developers/apps/create
              </a>
            </div>
            <div className="mt-3">
              <Form>
                <Form.Group controlId="storageServer" className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Enable"
                      type="radio"
                      name="storage"
                    />
                    <Form.Check
                      inline
                      label="Diable"
                      type="radio"
                      name="storage"
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <label>Dropbox API Key:</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="0yax465whz2o0vs"
              />
            </div>
          </Card.Body>
        </Card>

        <Card className="mt-4 shadow-lg border-0">
          <Card.Body>
            <div className="bg-black text-white p-2 rounded mb-3">
              <h5>OneDrive</h5>
            </div>

            <div className="p-3 bg-light border rounded">
              <span class="fw-6">Click this link to create OneDrive app:</span>
              <a
                href=" https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
              </a>
            </div>
            <div className="mt-3">
              <Form>
                <Form.Group controlId="storageServer" className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Enable"
                      type="radio"
                      name="storage"
                    />
                    <Form.Check
                      inline
                      label="Diable"
                      type="radio"
                      name="storage"
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <label>OneDrive API Key:</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="bd47b92b-67ae-46d3-8e68-05ef03e9cfdf"
              />
            </div>
          </Card.Body>
        </Card>

        <Button variant="primary"> save</Button>
      </Container>

  );
}

export default FileManager;
