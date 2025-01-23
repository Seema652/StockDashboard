import React, { useState } from "react";
import { Container, Button, Form, Row, Col, Table } from "react-bootstrap";

function  Foodcost() {
  const [menuItem, setMenuItem] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState([
    {
      item: "Aloo Puri (Oil)",
      sellingQuantity: 1,
      sellingAddonQty: 0,
      sellingPrice: 200,
      sellingAmount: 200,
      purchasePrice: 10.0,
      purchaseAmount: 10.0,
      profitRatio: 90.2,
    },
    {
      item: "Budweiser",
      sellingQuantity: 1,
      sellingAddonQty: 0,
      sellingPrice: 90,
      sellingAmount: 90,
      purchasePrice: 0,
      purchaseAmount: 0,
      profitRatio: 100,
    },
  ]);

  return (
    <Container fluid className="mt-4 px-3 px-md-4">
      {/* Header */}
      <div className="bg-black p-2 d-flex flex-wrap justify-content-between align-items-center mb-3 rounded">
        <h4 className="text-light mb-0">Food Costing Report</h4>
        <div className="d-flex gap-2">
          <Button variant="primary" size="sm">
            Help Center
          </Button>
          <Button variant="primary" size="sm">
            Back
          </Button>
        </div>
      </div>

      <div className="mb-3 text-end">
        <Button variant="success" size="sm">
          Export
        </Button>
      </div>

      <Form>
        <Row className="g-2 align-items-center">
          <Col xs={12} sm={6} md={3}>
            <Form.Group controlId="menuItem">
              <Form.Control
                type="text"
                placeholder="Menu Item"
                value={menuItem}
                onChange={(e) => setMenuItem(e.target.value)}
                style={{ fontSize: "0.85rem" }}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Form.Group controlId="fromDate">
              <Form.Control
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                style={{ fontSize: "0.85rem" }}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Form.Group controlId="toDate">
              <Form.Control
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                style={{ fontSize: "0.85rem" }}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex gap-2">
            <Button variant="primary" size="sm" style={{ fontSize: "0.85rem" }}>
              Search
            </Button>
            <Button variant="secondary" size="sm" style={{ fontSize: "0.85rem" }}>
              Show All
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Table and Footer */}
      <div className="shadow p-3 rounded bg-white">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Selling Quantity</th>
              <th>Selling Addon Qty</th>
              <th>Selling Price ₹</th>
              <th>Selling Amount ₹</th>
              <th>Purchase Price ₹</th>
              <th>Purchase Amount ₹</th>
              <th>Profit Ratio (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.item}</td>
                <td>{row.sellingQuantity}</td>
                <td>{row.sellingAddonQty}</td>
                <td>{row.sellingPrice}</td>
                <td>{row.sellingAmount}</td>
                <td>{row.purchasePrice}</td>
                <td>{row.purchaseAmount}</td>
                <td style={{ backgroundColor: "lightblue" }}>{row.profitRatio}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-between align-items-center mt-3 bg-danger bg-opacity-25 ">
          <span style={{ fontSize: "0.85rem" }}>
            Showing 1 to {data.length} of {data.length} records
          </span>
          <Button
            variant="danger"
            size="sm"
            style={{
              fontSize: "0.85rem",
              border: "1px solid rgb(111, 47, 54)",
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default  Foodcost;
