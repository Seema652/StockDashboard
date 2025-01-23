import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card, Table, FormControl } from "react-bootstrap";

const Dashboard = () => {
  const [month, setMonth] = useState("2024-07");

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center p-3 bg-dark border-bottom">
        <div className="d-flex align-items-center">
          <span
            className="pe-7s-keypad me-3"
            style={{ fontSize: "24px", cursor: "pointer", color: "white" }}
          ></span>
        </div>

        <div className="d-flex">
          <Link to="/posinvoice" className="btn bg-white me-2">POS Invoice</Link>
          <Link to="/orderlist" className="btn bg-white me-2">Order List</Link>
          <Link to="/kitchendashboard" className="btn bg-white me-2">Kitchen Dashboard</Link>
          <Link to="/counterdashboard" className="btn bg-white">Counter Dashboard</Link>
        </div>

        <div className="d-flex align-items-center">
          <i
            className="bi bi-arrows-fullscreen me-3"
            style={{ fontSize: "20px", cursor: "pointer", color: "white" }}
          ></i>
          <div className="position-relative me-3">
            <i
              className="bi bi-bell"
              style={{ fontSize: "20px", cursor: "pointer", color: "white" }}
            ></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              1
            </span>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ENG
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <button className="dropdown-item">ENG</button>
              </li>
              <li>
                <button className="dropdown-item">SPA</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center mt-3 ms-3">
        <span
          className="pe-7s-home me-2"
          style={{ fontSize: "20px", color: "black" }}
        ></span>
        <span>Home</span>
      </div>

      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-2">
            <div
              className="card shadow-sm rounded text-center"
              style={{ backgroundColor: "#FF7043", color: "white" }}
            >
              <div className="card-body">
                <h2>460</h2>
                <p className="text-white">Lifetime Orders</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="card shadow-sm rounded text-center"
              style={{ backgroundColor: "#F06292", color: "white" }}
            >
              <div className="card-body">
                <h2>4</h2>
                <p className="text-white">Today's Orders</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="card shadow-sm rounded text-center"
              style={{ backgroundColor: "#4CAF50", color: "white" }}
            >
              <div className="card-body">
                <h2>6.2k</h2>
                <p className="text-white">Today's Sales</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="card shadow-sm rounded text-center"
              style={{ backgroundColor: "#673AB7", color: "white" }}
            >
              <div className="card-body">
                <h2>6k</h2>
                <p className="text-white">Total Customers</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="card shadow-sm rounded text-center"
              style={{ backgroundColor: "#2196F3", color: "white" }}
            >
              <div className="card-body">
                <h2>221</h2>
                <p className="text-white">Total Delivered</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="card shadow-sm rounded text-center"
              style={{ backgroundColor: "#FF9800", color: "white" }}
            >
              <div className="card-body">
                <h2>46</h2>
                <p className="text-white">Total Reservations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 d-flex">
            <div className="card shadow-sm rounded flex-fill">
              <div className="card-body">
                <div className="card-header bg-dark text-white">
                  <h5 className="card-title">Latest Orders</h5>
                </div>
                <div className="p-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-bottom">
                      Name: Walkin
                      <br />
                      Phone: 8801717426371
                      <br />
                      Order No.: (0507)
                      <br />
                      Table No:
                      <br />
                      Time: 13:07:24
                    </li>
                    <li className="list-group-item border-bottom">
                      Name: Kamal Hassan
                      <br />
                      Phone: 0171742241476
                      <br />
                      Order No.: (0506)
                      <br />
                      Table No:
                      <br />
                      Time: 11:56:26
                    </li>
                    <li className="list-group-item border-bottom">
                      Name: Kamal Hassan
                      <br />
                      Phone: 0171742241476
                      <br />
                      Order No.: (0505)
                      <br />
                      Table No:
                      <br />
                      Time: 11:52:00
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card shadow-sm rounded flex-fill">
              <div className="card-body">
                <div className="card-header bg-dark text-white">
                  <h5 className="card-title">Latest Reservations</h5>
                </div>
                <div className="p-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-bottom">
                      Name: rtyry
                      <br />
                      Phone: 1732432986
                      <br />
                      Date: 2021-01-11
                      <br />
                      Table No: Table-2H
                      <br />
                      Time: 23:10:30
                    </li>
                    <li className="list-group-item border-bottom">
                      Name: fakhrul islam
                      <br />
                      Phone: 01905793801
                      <br />
                      Date: 2021-01-01
                      <br />
                      Table No:
                      <br />
                      Time: 17:25:00
                    </li>
                    <li className="list-group-item border-bottom">
                      Name: sandy
                      <br />
                      Phone: 4233434321
                      <br />
                      Date: 2020-12-31
                      <br />
                      Table No:
                      <br />
                      Time: 23:00:00
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card shadow-sm rounded flex-fill">
              <div className="card-body">
                <div className="card-header bg-dark text-white">
                  <h5 className="card-title">Latest Online Orders</h5>
                </div>
                <div className="p-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-bottom">
                      Name: Walkin
                      <br />
                      Phone: 8801717426371
                      <br />
                      Order No: (0507)
                      <br />
                      Time: 13:07:24
                    </li>
                    <li className="list-group-item border-bottom">
                      Name: Kamal Hassan
                      <br />
                      Phone: 0171742241476
                      <br />
                      Order No: (0503)
                      <br />
                      Time: 01:15:17
                    </li>
                    <li className="list-group-item border-bottom">
                      Name: Walkin
                      <br />
                      Phone: 8801717426371
                      <br />
                      Order No: (0502)
                      <br />
                      Time: 00:59:00
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-auto">
            <div className="card shadow-sm p-0 mb-4">
              <div className="card-body">
                <div className="card-header bg-dark text-white">
                  <h5 className="card-title">Food Details</h5>
                </div>
                <hr />
                <Table bordered striped hover>
                  <thead className="header bg-dark text-white">
                    <tr>
                      <th>Food Name</th>
                      <th>Variant Name</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bangla Set Menu Rice Boarta</td>
                      <td>1:2</td>
                      <td>115</td>
                    </tr>
                    <tr>
                      <td>Pasta</td>
                      <td>Spicy</td>
                      <td>90</td>
                    </tr>
                    <tr>
                      <td>Chicken Dumpling</td>
                      <td>1:3</td>
                      <td>93</td>
                    </tr>
                    <tr>
                      <td>Betel leaf shrimp</td>
                      <td>1:2</td>
                      <td>69</td>
                    </tr>
                    <tr>
                      <td>Idli-sumbal</td>
                      <td>1:2</td>
                      <td>88</td>
                    </tr>
                    <tr>
                      <td>Nasi Goreng</td>
                      <td>1:1</td>
                      <td>84</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="card shadow-sm p-0">
              <div className="card-body">
                <div className="card-header bg-dark text-white">
                  <h5 className="card-title">Pending Order</h5>
                </div>
                <hr />
                <div className="p-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-bottom">
                      Name: Walkin
                      <br />
                      Phone: 8801717426371
                      <br />
                      Order No.: (0507)
                      <br />
                      Table No:
                      <br />
                      Time: 13:07:24
                    </li>
                    <li className="list-group-item border-bottom">
                      Name: Kamal Hassan
                      <br />
                      Phone: 0171742241476
                      <br />
                      Order No.: (0506)
                      <br />
                      Table No:
                      <br />
                      Time: 11:56:26
                    </li>
                    <li className="list-group-item border-bottom">
                      Name: Kamal Hassan
                      <br />
                      Phone: 0171742241476
                      <br />
                      Order No.: (0505)
                      <br />
                      Table No:
                      <br />
                      Time: 11:52:00
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm p-0 mb-4">
              <div className="card-body">
                <div className="card-header bg-dark text-white mb-4">
                  <h5 className="card-title">Monthly Sales Amount and Order</h5>
                  <div className="d-flex justify-content-between">
                    <FormControl
                      type="month"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      placeholder="Select Month"
                    />
                    <button className="btn btn-outline-light">Search</button>
                  </div>
                </div>
                <hr />
                <Card.Img
                  src={require("../../assets/images/download.png")}
                  alt="Card Image"
                  variant="bottom"
                  className="card-img-top"
                  style={{
                    borderRadius: "0%",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <div className="card shadow-sm p-0">
              <div className="card-body">
                <div className="card-header bg-dark text-white mb-4">
                  <h5 className="card-title">Monthly Sale Amount</h5>
                  <p className="card-text text-white">$25,000</p>
                </div>
                <Card.Img
                  src={require("../../assets/images/chart.png")}
                  alt="Card Image"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "0%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
