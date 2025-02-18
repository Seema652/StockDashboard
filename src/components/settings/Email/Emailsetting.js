import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import EmailImage from "../../../assets/email.jpg";

function Emailsetting() {
  return (
    <div
      className="container mt-4 shadow-lg d-flex justify-content-start"
      style={{ maxWidth: "60.75em" }}
    >
      <Container className="mt-2 d-flex flex-column align-items-start w-100">
        <div className="col-12 d-flex align-items-center bg-black text-white p-2 rounded mb-3 justify-content-start">
          <i className="fa-regular fa-envelope me-2"></i>
          <h4 className="fw-bold m-0">Mail Template</h4>
        </div>

        <div className="w-50">
          <Card className="border-1">
            <div className="card-body p-0 overflow-hidden rounded-top justify-content-start">
              <img
                src={EmailImage}
                className="img-fluid w-100"
                alt="Theme Thumbnail"
                style={{
                  objectFit: "cover",
                  height: "auto",
                  width: "auto",
                  borderRadius: "0",
                }}
              />
            </div>

            <Card.Footer className="d-flex justify-content-between align-items-center bg-light">
              <div className="text-gray-800">Dora</div>
              <Button
                type="button"
                className="btn btn-success btn-sm btn-disable"
              >
                Activated
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Emailsetting;
