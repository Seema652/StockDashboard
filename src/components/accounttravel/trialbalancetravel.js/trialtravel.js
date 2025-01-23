import React, { useState } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

const TrialTravel = () => {
  const [viewType, setViewType] = useState("ledgerWise"); 

  const handleRadioChange = (e) => {
    setViewType(e.target.id); 
  };

  return (
    <div className="container mt-4">
   
      <div className="p-4 border rounded mb-4" style={{ backgroundColor: "white" }}>
        <h4>Trial Balance: Ledgerwise</h4>
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
                label="Without Party & Supplier"
                id="withoutPartySupplier"
                className="mb-2"
              />

           
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  label="Ledger Wise"
                  name="viewType"
                  id="ledgerWise"
                  defaultChecked
                  className="me-3"
                  onChange={handleRadioChange}
                />
                <Form.Check
                  type="radio"
                  label="Group Wise"
                  name="viewType"
                  id="groupWise"
                  className="me-3"
                  onChange={handleRadioChange}
                />
                <Form.Check
                  type="radio"
                  label="Drill Down"
                  name="viewType"
                  id="drillDown"
                  onChange={handleRadioChange}
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

    
      {viewType === "ledgerWise" && (
        <div className="mt-4 p-4 bg-light border rounded shadow-sm">
          <Table bordered>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#e3f2fd" }}>Ledger</th>
                <th style={{ backgroundColor: "#e3f2fd" }}>Opening</th>
                <th style={{ backgroundColor: "#e3f2fd" }}>Debit</th>
                <th style={{ backgroundColor: "#e3f2fd" }}>Credit</th>
                <th style={{ backgroundColor: "#e3f2fd" }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ backgroundColor: "#e3f2fd" }}>Total</td>
                <td style={{ backgroundColor: "#e3f2fd" }}></td>
                <td style={{ backgroundColor: "#e3f2fd" }}></td>
                <td style={{ backgroundColor: "#e3f2fd" }}></td>
                <td style={{ backgroundColor: "#e3f2fd" }}></td>
              </tr>
        
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default TrialTravel;
