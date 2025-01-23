import React from "react";
import { Button, Container, Row, Col, Table, Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const ExpenseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedDate = location.state?.date || "No date selected";

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-4">
        <Col>
          <h3>Expense Detail</h3>
        </Col>
        <Col className="text-end">
          <Button
            variant="secondary"
            onClick={() => navigate("/expensemanagement")}
          >
            <FaArrowLeft className="me-2" />
            Back
          </Button>
        </Col>
      </Row>

      <Container className="mt-5">
        <div className="border p-4 rounded">
          <div className="mb-4">
            <h5>Selected Date: {selectedDate}</h5>
          </div>

          <div className="mb-4">
            <h6 style={{ color: "red" }}>
              Note: Only rows with Reason & Amount will get solved
            </h6>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Reason</th>
                <th>Amount</th>
                <th>Explanation</th>
                <th>Employee</th>
                <th>Paid From</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td>
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Select Reason
                      </option>
                      <option>Milk</option>
                      <option>Patrol</option>
                      <option>Salary</option>
                      <option>Advanced Salary</option>
                      <option>Stationary</option>
                      <option>Vegitables</option>
                      <option>Groceries</option>
                      <option>Staff-Expense</option>
                      <option>Delivery Boy</option>
                      <option>Electricity</option>
                      <option>Gas</option>
                      <option>Rent</option>

                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter Amount" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter Explanation" />
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        Select Employee
                      </option>
                      <option>biller(Biller)</option>
                      <option>Cap (Captain)</option>
                      <option>Rahul(Captain)</option>
                      <option>Sultan (Captain)</option>
                      <option>biller(biller)</option>
                      <option>Alo Sk(Captain)</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option value="" disabled selected>
                        From Cash
                      </option>
                      <option>From Cash</option>
                      <option>From Bank</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Button variant="danger">Clear</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="text-center mt-4">
            <Button variant="success" className="me-2">
              Save
            </Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ExpenseDetail;
