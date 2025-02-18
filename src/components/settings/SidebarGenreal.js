import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBars,
  FaSearch,
  FaCogs,
  FaEye,
  FaFile,
  FaGlobe,
  FaRobot,
  FaBell,
  FaEnvelope,
  FaKey,
  FaLink,
  FaUsers,
  FaServer,
  FaLanguage,
  FaNetworkWired,
} from "react-icons/fa";
import { Offcanvas, Button } from "react-bootstrap";

const Sidebargenral = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const menuItems = [
    {
      name: "General",
      path: "settingenral",
      icon: <FaCogs style={{ color: "#007bff", fontSize: "1.2rem" }} />,
    },
    {
      name: "Appearance",
      path: "appearance",
      icon: <FaEye style={{ color: "#28a745", fontSize: "1.2rem" }} />,
    },
    {
      name: "File Manager",
      path: "filemanager",
      icon: <FaFile style={{ color: "#ffc107", fontSize: "1.2rem" }} />,
    },
    {
      name: "Platform",
      path: "platform",
      icon: <FaGlobe style={{ color: "#17a2b8", fontSize: "1.2rem" }} />,
    },
    {
      name: "OpenAI",
      path: "openai",
      icon: <FaRobot style={{ color: "#dc3545", fontSize: "1.2rem" }} />,
    },
    {
      name: "Notification",
      path: "notification",
      icon: <FaBell style={{ color: "#6c757d", fontSize: "1.2rem" }} />,
    },
    {
      name: "Email Configuration",
      path: "/emailsidebar",
      icon: <FaEnvelope style={{ color: "#007bff", fontSize: "1.2rem" }} />,
    },
    {
      name: "Login & Auth",
      path: "loginauth",
      icon: <FaKey style={{ color: "#343a40", fontSize: "1.2rem" }} />,
    },
    {
      name: "Shortlink",
      path: "shortlink",
      icon: <FaLink style={{ color: "#17a2b8", fontSize: "1.2rem" }} />,
    },
    {
      name: "Social Pages",
      path: "socialpage",
      icon: <FaUsers style={{ color: "#28a745", fontSize: "1.2rem" }} />,
    },
    {
      name: "Proxy System",
      path: "proxysystem",
      icon: <FaServer style={{ color: "#ffc107", fontSize: "1.2rem" }} />,
    },
    {
      name: "Crons",
      path: "crons",
      icon: <FaServer style={{ color: "#dc3545", fontSize: "1.2rem" }} />,
    },
    {
      name: "Language",
      path: "language",
      icon: <FaLanguage style={{ color: "#007bff", fontSize: "1.2rem" }} />,
    },
    {
      name: "Social Network Settings",
      path: "/socialnetwork",
      icon: <FaNetworkWired style={{ color: "#6c757d", fontSize: "1.2rem" }} />,
    },
  ];


  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex">
  
      <Button
        variant="primary"
        className="d-md-none m-2 p-1"
        onClick={handleShow}
        style={{ fontSize: "1rem", width: "40px", height: "40px" }}
      >
        <FaBars />
      </Button>

      <div
        className="d-none d-md-block bg-white shadow-lg vh-100 p-3 position-fixed"
        style={{ width: "18rem", zIndex: "1020" }}
      >
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h3 className="mb-3">Settings</h3>
        <ul className="list-group list-group-flush">
          {filteredMenuItems.map((item) => (
            <li
              key={item.name}
              className={`list-group-item d-flex align-items-center ${
                location.pathname.includes(item.path) ? "bg-light" : ""
              }`}
              style={{
                cursor: "pointer",
                padding: "10px 12px",
                border: "1px dotted #6c757d",
              }}
            >
              {item.icon}
              <Link
                to={item.path}
                className="ms-3 text-decoration-none text-dark"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-white shadow-lg vh-100 p-3"
        style={{ width: "280px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="position-relative w-100 mb-3">
            <FaSearch
              className="position-absolute"
              style={{
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.2rem",
                color: "#6c757d",
              }}
            />
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <h3 className="mb-3">Settings</h3>
          <ul className="list-group list-group-flush">
            {filteredMenuItems.map((item) => (
              <li
                key={item.name}
                className={`list-group-item d-flex align-items-center ${
                  location.pathname.includes(item.path) ? "bg-light" : ""
                }`}
                style={{
                  cursor: "pointer",
                  padding: "10px 12px",
                  border: "1px dotted #6c757d",
                }}
              >
                {item.icon}
                <Link
                  to={item.path}
                  className="ms-3 text-decoration-none text-dark"
                  onClick={handleClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Outlet />
    </div>
  );
};

export default Sidebargenral;
