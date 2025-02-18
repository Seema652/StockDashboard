import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaSearch, FaCheckCircle, FaClock, FaExclamationCircle, FaFacebook, FaInstagram, FaXing } from 'react-icons/fa';
import { Offcanvas, Button } from 'react-bootstrap';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState('Queue');
  const [selectedPlatform, setSelectedPlatform] = useState('All schedules');
  const [deleteOption, setDeleteOption] = useState('Queue');
  const [deletePlatform, setDeletePlatform] = useState('All');
  const [methodPost, setMethodPost] = useState('All');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="d-md-none m-2 p-1" onClick={handleShow} style={{ fontSize: '1rem', width: '40px', height: '40px' }}>
             <FaBars />
           </Button>
     

      <Offcanvas show={show} onHide={handleClose} responsive="md">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Schedules</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="bg-white shadow-lg vh-100 d-flex flex-column mt-5 p-3" style={{ width: '280px', position: 'fixed', top: 10, overflow: 'hidden', border: 'none' }}>
            <div className="input-group mb-3 mt-3">
              <div className="position-relative w-100">
                <FaSearch className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }} />
                <input
                  type="text"
                  className="form-control ps-5"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <h3 className="mb-2 mt-2">Schedules</h3>
            <ul className="list-group list-group-flush">
              {[{ name: 'Queue', icon: <FaClock className="me-2 text-primary" /> },
                { name: 'Published', icon: <FaCheckCircle className="me-2 text-success" /> },
                { name: 'Unpublished', icon: <FaExclamationCircle className="me-2 text-warning" /> }].map((status) => (
                <li
                  key={status.name}
                  className={`list-group-item d-flex mt-3 align-items-center justify-content-between ${selectedSchedule === status.name ? 'bg-light' : ''}`}
                  onClick={() => setSelectedSchedule(status.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>{status.icon} {status.name}</span>
                </li>
              ))}
            </ul>

            <h6 className="mt-3 mb-2">Schedules of</h6>
            <ul className="list-group list-group-flush">
              {[{ name: 'All schedules', icon: null },
                { name: 'Facebook', icon: <FaFacebook className="me-2 text-primary" /> },
                { name: 'Instagram', icon: <FaInstagram className="me-2 text-danger" /> },
                { name: 'X', icon: <FaXing className="me-2 text-dark" /> }].map((platform) => (
                <li
                  key={platform.name}
                  className={`list-group-item d-flex align-items-center justify-content-between ${selectedPlatform === platform.name ? 'bg-light' : ''}`}
                  onClick={() => setSelectedPlatform(platform.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>{platform.icon} {platform.name}</span>
                  <input
                    type="radio"
                    name="platform"
                    checked={selectedPlatform === platform.name}
                    onChange={() => setSelectedPlatform(platform.name)}
                  />
                </li>
              ))}
            </ul>

            <h6 className="mt-3 mb-2">Method Post</h6>
            <select className="form-select" value={methodPost} onChange={(e) => setMethodPost(e.target.value)}>
              <option value="All">All</option>
              <option value="Manual">Manual</option>
              <option value="Automated">Automated</option>
            </select>

            <h6 className="mt-3 mb-2">Delete Schedules</h6>
            <div className="border p-2 rounded">
              {['Queue', 'Published', 'Unpublished'].map((option) => (
                <div key={option} className="form-check d-flex justify-content-between align-items-center">
                  <label className="form-check-label" htmlFor={option}>{option}</label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="deleteOption"
                    id={option}
                    checked={deleteOption === option}
                    onChange={() => setDeleteOption(option)}
                  />
                </div>
              ))}
              <h6 className="mt-3 mb-2">Social Network</h6>
              <select className="form-select mt-2" value={deletePlatform} onChange={(e) => setDeletePlatform(e.target.value)}>
                <option value="All">All</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="X">X</option>
              </select>
              
              <button className="btn btn-danger w-50 mt-2 d-flex justify-content-center mx-auto">Submit</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
