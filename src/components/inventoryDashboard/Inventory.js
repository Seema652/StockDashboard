import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import {
  FaShoppingCart,
  FaBoxOpen,
  FaChartLine,
  FaTrashAlt,
  FaWarehouse,
} from "react-icons/fa";

function Inventory() {
  return (
    <div className="container mt-4">
      <Row>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Key Statistics</Card.Title>
              <p>Purchase: ₹0</p>
              <p>Wastage: ₹0</p>
              <Form.Select>
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last Week</option>
              </Form.Select>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>New Purchase</Card.Title>
              <div className="text-center">
                <p>Add up your purchase</p>
                <FaShoppingCart size={40} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>COGS</Card.Title>
              <h4>₹19.6</h4>
              <p>Worth of Stock Consumed</p>
              <div className="bg-light text-center p-5">
                <strong>Graph Placeholder</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Row>
            <Col xs={12} md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Need Help?</Card.Title>
                  <p>
                    Schedule a free demo, and get in touch with our team to
                    clarify your queries.
                  </p>
                  <Button variant="danger">Request For Inventory Demo</Button>
                </Card.Body>
              </Card>

              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Want Auto Consumption?</Card.Title>
                  <Button variant="warning">Disable</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={1}
              md={6}
              style={{
                maxHeight: "80vh",
                overflowY: "auto",
                paddingRight: "0",
                marginBottom: "0",
              }}
            >
              <div className="mt-1 shadow p-5 bg-white rounded">
                <Card className="mb-3">
                  <Card.Body>
                    <i className="fas fa-box-open fa-3x"></i>
                    <h6> Purchases Order</h6>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <i className="fas fa-shopping-cart fa-2x"></i>
                    <h6>Stock Purchase</h6>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <i className="fas fa-chart-line fa-2x"></i>
                    <h6>Sales</h6>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <i className="fas fa-trash-alt fa-2x"></i>
                    <h6>Wastage</h6>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <i className="fas fa-warehouse fa-2x"></i>
                    <h6>Stock</h6>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Inventory;
