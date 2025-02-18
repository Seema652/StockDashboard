import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash, FaCalendarAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import draf from "../../assets/draftimage.png";

const drafts = [
  {
    id: 1,
    name: "Test Page 3",
    user: "T",
    userDetail: "Test Page 3",
    description: "We Help You Manage",
    subDescription: "All-in-one Social Media Platforms",
    details:
      "Controlling your social networkings with finesse and makes the most out of them for marketing purposes",
  },
  {
    id: 2,
    name: "Test Page 2",
    user: "T",
    userDetail: "Test Page 2",
    description: "We Help You Manage",
    subDescription: "All-in-one Social Media Platforms",
    details:
      "Controlling your social networkings with finesse and makes the most out of them for marketing purposes",
  },
  {
    id: 3,
    name: "Tiến Phạm",
    user: "T",
    userDetail: "stackposts3",
    description: "We Help You Manage",
    subDescription: "All-in-one Social Media Platforms",
    details:
      "Controlling your social networkings with finesse and makes the most out of them for marketing purposes",
  },
  {
    id: 4,
    name: "Group Test",
    user: "G",
    userDetail: "Group Test",
    description: "We Help You Manage",
    subDescription: "All-in-one Social Media Platforms",
    details:
      "Controlling your social networkings with finesse and makes the most out of them for marketing purposes",
  },
  {
    id: 5,
    name: "Sample Page 1",
    user: "S1",
    userDetail: "sample1",
    description: "Streamlining Your Work",
    subDescription: "Automation and Efficiency",
    details:
      "Enhance your business operations through automation and increase overall efficiency in your processes",
  },
  {
    id: 6,
    name: "Sample Page 2",
    user: "S2",
    userDetail: "sample2",
    description: "Boosting Engagement",
    subDescription: "Customer Relationship Management",
    details:
      "Drive engagement through personalized interactions and improve your customer relationships",
  },
];

const Draft = () => {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      alert(`Draft with ID: ${id} deleted!`);
    }
  };

 

  return (
    <Container className="mt-5">
      <h2 className="mb-5 bg-black text-white p-3 rounded">
        Drafts
      </h2>
      {drafts.map((draft) => (
        <Card
          key={draft.id}
          className="mb-3 p-3 shadow-lg border-0" 
          style={{ borderRadius: "10px" }}
        >
          <Row className="align-items-center">
            <Col xs={10} className="d-flex align-items-center">
              <div
                className="rounded-circle bg-warning d-flex align-items-center justify-content-center me-2"
                style={{ width: 40, height: 40, fontWeight: "bold" }}
              >
                {draft.user}
              </div>
              <div>
                <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                  {draft.name}
                </h6>
                <small className="text-muted d-flex align-items-center">
                  <FaCalendarAlt className="me-1" /> {draft.userDetail}
                </small>
              </div>
            </Col>
            <Col xs={2} className="text-end">
              <FaEdit className="text-primary me-2" />
              <FaTrash
                className="text-danger"
                onClick={() => handleDelete(draft.id)}
                style={{ cursor: "pointer" }}
              />
            </Col>
          </Row>
          <Row className="mt-2 align-items-center mb-0">
            <Col xs="auto" className="d-flex align-items-center mb-0">
              <img
                src={draf}
                alt="Post Thumbnail"
                className="rounded"
                style={{ width: "80px", height: "80px" }}
              />
            </Col>
            <Col className="d-flex flex-column text-start mb-0">
              <h6 className="mb-1">{draft.description}</h6>
              <p className="mb-1 text-muted">{draft.subDescription}</p>
              <small>{draft.details}</small>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default Draft;
