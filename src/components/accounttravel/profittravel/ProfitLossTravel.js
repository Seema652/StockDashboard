import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ProfitLosses = ({ setView }) => {
  return (
    <div className="p-4 border rounded mb-4">
      <h4>Profit & Loss Statement</h4>
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

         
          <Col xs={12} md={4} className="d-flex flex-column align-items-center">
          
            <Form.Check
              type="checkbox"
              label="With Opening"
              id="withOpening"
              className="mb-2"
            />
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

const ProfitTravels = () => {
  const leftSideData = [
    { particular: "Purchase account", balance: "0.00 Dr" },
    { particular: "Direct Expenses", balance: "0.00 Dr" },
    { particular: "", balance: "" },
    { particular: "", balance: "" },
    { particular: "Gross Loss b/f", balance: "" },
    { particular: "InDirect Expenses", balance: "0.00 Dr" },
    { particular: "", balance: "" },
  ];

  const rightSideData = [
    { particular: "Sales account", balance: "0.00 Dr" },
    { particular: "Direct Incomes", balance: "0.00 Dr" },
    { particular: "Gross Loss C/o", balance: "" },
    { particular: "", balance: "" },
    { particular: "", balance: "" },
    { particular: "InDirect Incomes", balance: "0.00 Dr" },
    { particular: "Net Loss", balance: "" },
  ];

  const isLossRow = (particular) => {
    return particular === "Gross Loss b/f" || particular === "Gross Loss C/o" || particular === "Net Loss";
  };

  return (
    <div className="mt-4">
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
              <td
                style={{
                  color: isLossRow(leftRow.particular) ? "red" : "inherit", 
                }}
              >
                {leftRow.particular}
              </td>
              <td>{leftRow.balance}</td>
              <td
                style={{
                  color: isLossRow(rightSideData[index]?.particular) ? "red" : "inherit", 
                }}
              >
                {rightSideData[index]?.particular || ""}
              </td>
              <td>{rightSideData[index]?.balance || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProfitTraveles = () => {
  const [view, setView] = useState("");
  return (
    <div className="container mt-4">
      <ProfitLosses setView={setView} />
      <ProfitTravels />
    </div>
  );
};

export default ProfitTraveles;
