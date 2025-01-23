import React, { useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ExpenseManagement = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

  const handleLoadClick = () => {
    if (selectedDate) {
      navigate("/expensedetail", { state: { date: selectedDate } });
    }
  };

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-4">
        <Col>
          <h3>Expense Management</h3>
        </Col>
        <Col className="text-end">
          <Button variant="secondary" onClick={() => navigate("/expenselist")}>
            <FaArrowLeft className="me-2" />
            Back
          </Button>
        </Col>
      </Row>

      <Container className="mt-5">
        <div className="p-4 border rounded">
          <h5
            className="text-white text-start mb-4"
            style={{ backgroundColor: "black", padding: "10px", borderRadius: "5px" }}
          >
            Please Provide The Date for Which You Want to Record Your Expenses
          </h5>

          <div className="d-flex align-items-center">
            <label htmlFor="expenseDate" className="me-3">
              Select Date:
            </label>

            <InputGroup style={{ maxWidth: "300px" }}>
              <Form.Control
                type="date"
                id="expenseDate"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <InputGroup.Text>
                <FaCalendarAlt />
              </InputGroup.Text>
            </InputGroup>

            <Button variant="primary" className="ms-3" onClick={handleLoadClick}>
              Load
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ExpenseManagement;
