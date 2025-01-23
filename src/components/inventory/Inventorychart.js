import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { FaUtensils, FaTruck, FaShoppingBag, FaChartLine, FaSync, FaClock } from "react-icons/fa"; // Icons
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Inventorychart() {
  const salesChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Sales",
        data: [2105, 3837, 1370, 5000, 4200],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
      },
    ],
  };

  const salesChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Sales Chart",
      },
    },
  };

  return (
    <Container className="py-4">
      <Row className="align-items-center mb-3">
        <Col className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="text-muted me-2">
              <FaClock className="me-1" />
              Order Synced 22 Mins ago POS Synced 2 Min ago  
            </span>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">
              <select name="cars" id="cars">
                <option value="6th Feb">6th Feb</option>
                <option value="7th Feb">Saab</option>
              </select>
            </span>
            <Button variant="outline-primary" size="sm" className="d-flex align-items-center">
              <FaSync className="me-1" />
              Refresh
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Row className="mb-4 g-3">
            <Col xs={12} md={6} lg={3}>
              <Card className="d-flex flex-column justify-content-between">
                <Card.Body>
                  <Card.Title className="mt-2 text-start">Total Sales</Card.Title>
                  <div className="d-flex align-items-center justify-content-between"> 
                    <h2 className="text-primary mb-0">₹4,842</h2>  
                    <FaChartLine size={30} className="text-primary" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="text-muted">6 Orders</Card.Text>
                    <span className="text-muted">⋮</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="d-flex flex-column justify-content-between">
                <Card.Body>
                  <Card.Title className="mt-2 text-start">Total Sales</Card.Title>
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="text-primary mb-0">₹3,098</h2>
                    <FaUtensils size={30} className="text-primary" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="text-muted">4 Orders</Card.Text>
                    <span className="text-muted">⋮</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="d-flex flex-column justify-content-between">
                <Card.Body>
                  <Card.Title className="mt-2 text-start">Take Away</Card.Title>
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="text-primary mb-0">₹0</h2>
                    <FaShoppingBag size={30} className="text-primary" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="text-muted">0 Orders</Card.Text>
                    <span className="text-muted">⋮</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="d-flex flex-column justify-content-between">
                <Card.Body>
                  <Card.Title className="mt-2 text-start">Delivery</Card.Title>
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="text-primary mb-0">₹1,744</h2>
                    <FaTruck size={30} className="text-primary" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="text-muted">2 Orders</Card.Text>
                    <span className="text-muted">⋮</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Bar data={salesChartData} options={salesChartOptions} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>Price Discovery</Card.Title>
                <Button variant="outline-primary" size="sm">
                  Compare Now
                </Button>
              </div>
              <p>Tirupati Refined Cottonseed Oil</p>
              <ListGroup horizontal className="mt-3">
                <ListGroup.Item className="text-center">
                  <div>Maruti Nutritious</div>
                  <small>₹102.5</small>
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <div>Shiv Shakti Oil</div>
                  <small>₹104</small>
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <div>Manjubhumi Trading</div>
                  <small>₹105</small>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>Order Free Samples</Card.Title>
                <Button variant="outline-primary" size="sm">
                  Order Now
                </Button>
              </div>
              <Row className="g-2 mt-3">
                {["Kit", "Cutlery", "Canapes", "Wooden", "Ripple"].map((item, idx) => (
                  <Col xs={4} key={idx} className="text-center">
                    <div
                      style={{
                        height: "70px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "5px",
                      }}
                    >
                      <img
                        src={`https://via.placeholder.com/70?text=${item}`}
                        alt={item}
                        className="img-fluid"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <small>{item}</small>
                  </Col>
                ))}
              </Row>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button variant="outline-secondary" size="sm">
                Request
              </Button>
              <Button variant="outline-secondary" size="sm">
                Delivery
              </Button>
              <Button variant="outline-secondary" size="sm">
                Try
              </Button>
              <Button variant="outline-secondary" size="sm">
                Requested Samples
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>Supplier Hub</Card.Title>
                <Button variant="outline-primary" size="sm">
                  Explore Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Inventorychart;
