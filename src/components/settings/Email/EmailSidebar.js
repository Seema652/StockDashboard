import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBars,
  FaSearch,
  FaEnvelope,
  FaFileAlt,
  FaServer,
} from "react-icons/fa";
import { Offcanvas, Button } from "react-bootstrap";

const EmailSidebar = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation(); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuItems = [
    {
      name: "Email Templates",
      path: "emailtemplate",
      icon: <FaFileAlt style={{ color: "#007bff", fontSize: "1.2rem" }} />,
    },
    {
      name: "Email Contents",
      path: "emailcontent",
      icon: <FaEnvelope style={{ color: "#28a745", fontSize: "1.2rem" }} />,
    },
    {
      name: "Configure Mail",
      path: "configuremail",
      icon: <FaServer style={{ color: "#ffc107", fontSize: "1.2rem" }} />,
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
        style={{ width: "18rem", zIndex: "0" }}
      >
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h3 className="mb-3">Email Settings</h3>
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
          <Offcanvas.Title>Email Settings</Offcanvas.Title>
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

export default EmailSidebar;
