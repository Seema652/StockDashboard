import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaBars } from 'react-icons/fa';
import { BiBox } from 'react-icons/bi';
import { Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <>
      
      <Button
        variant="primary"
        className="d-md-none m-2 p-1"
        onClick={handleShow}
        style={{ fontSize: '1rem', width: '40px', height: '40px' }}
      >
        <FaBars />
      </Button>

      <div className="d-none d-md-block bg-white shadow vh-100 position-fixed p-3"
        style={{ width: "280px", borderRight: "1px solid #ddd", zIndex: 1000 }}>
        <div className="input-group mb-3 mt-2">
          <div className="position-relative w-100">
            <FaSearch className="position-absolute"
              style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 1, fontSize: '1.2rem', color: '#6c757d' }} />
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="text-left py-3">
          <h3>Group Manager</h3>
        </div>
        <div className="text-center w-100 d-flex flex-column align-items-center mt-auto mb-auto">
          <BiBox size={120} color="black" />
          <div className="mt-3">
            <button
              className="btn btn-primary w-100"
              style={{ maxWidth: "130px", borderRadius: "20px", padding: "10px 20px", fontSize: "16px" }}
              onClick={() => navigate('update')}
            >
              + Add New
            </button>
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} responsive="md">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-white shadow-lg vh-100 d-flex flex-column p-3">
          <div className="input-group mb-3 mt-2">
            <div className="position-relative w-100">
              <FaSearch className="position-absolute"
                style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 1, fontSize: '1.2rem', color: '#6c757d' }} />
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="text-left py-3">
            <h3>Group Manager</h3>
          </div>
          <div className="text-center w-100 d-flex flex-column align-items-center mt-auto mb-auto">
            <BiBox size={120} color="black" />
            <div className="mt-3">
              <button
                className="btn btn-primary w-100"
                style={{ maxWidth: "130px", borderRadius: "20px", padding: "10px 20px", fontSize: "16px" }}
                onClick={() => navigate('update')}
              >
                + Add New
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
