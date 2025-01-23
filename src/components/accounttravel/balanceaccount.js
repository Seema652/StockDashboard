import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const BalanceSheetForm = ({ setView }) => {
  return (
    <div className="p-4 border rounded mb-4">
      <h4>Balance Sheet</h4>
      <Form>
        <Row className="align-items-center mb-3">
          
          <Col xs={12} md={4} className="d-flex align-items-center">
            <div className="d-flex align-items-center me-4">
              <Form.Label className="me-2">From</Form.Label>
              <Form.Control
                type="date"
                className="form-control-sm"
                style={{ maxWidth: "200px", height: "40px" }}
              />
            </div>

            <div className="d-flex align-items-center">
              <Form.Label className="me-2">To</Form.Label>
              <Form.Control
                type="date"
                className="form-control-sm"
                style={{ maxWidth: "200px", height: "40px" }}
              />
            </div>
          </Col>

      
          <Col xs={12} md={4} className="d-flex justify-content-center">
            <div className="d-flex">
              <Form.Check
                type="radio"
                label="Group Wise"
                name="viewType"
                defaultChecked
                id="groupWise"
                className="me-3"
                onChange={() => setView("groupWise")}
              />
              <Form.Check
                type="radio"
                label="Drill Down"
                name="viewType"
                id="drillDown"
                onChange={() => setView("drillDown")}
              />
            </div>
          </Col>

     
          <Col xs={12} md={4} className="d-flex justify-content-end">
            <div className="d-flex">
              <Button variant="primary" size="bg" className="me-2">
                View
              </Button>
              <Button variant="success" size="bg" className="me-2">
                Excel
              </Button>
              <Button variant="danger" size="bg">
                PDF
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const FormTable = ({ view }) => {
  const leftSideData = [
    { particular: "Capital account L-0", balance: "0.00 Dr" },
    { particular: "Loans received L-0", balance: "0.00 Dr" },
    { particular: "Current liabilities L-0", balance: "0.00 Dr" },
    { particular: "Unsecured loan L-0", balance: "0.00 Dr" },
  ];

  const rightSideData = [
    { particular: "Fixed assets L-0", balance: "0.00 Dr" },
    { particular: "Current assets L-0", balance: "0.00 Dr" },
    { particular: "Suspense account L-0", balance: "0.00 Dr" },
  ];

  return (
    <div className="mt-4">
      <h4> ({view === "groupWise" ? "Group Wise" : "Drill Down"})</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Particular</th>
            <th>Balance</th>
            <th>Particular</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {leftSideData.map((leftRow, index) => (
            <tr key={index}>
              <td>{leftRow.particular}</td>
              <td>{leftRow.balance}</td>
              <td>{rightSideData[index]?.particular || ""}</td>
              <td>{rightSideData[index]?.balance || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CombinedPage = () => {
  const [view, setView] = useState(""); 
  return (
    <div className="container mt-4">

      <BalanceSheetForm setView={setView} />

      <FormTable view={view} />
    </div>
  );
};

export default CombinedPage;
