import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaUsers, FaEllipsisV, FaTrash, FaBars } from 'react-icons/fa';
import { Button, Offcanvas } from 'react-bootstrap';

const usersData = [
  { name: 'Default watermark', description: 'Set default watermark for all profiles', type: 'Page' },
  { name: 'Group Test', description: 'Group', type: 'Group' },
  { name: 'Test Page 3', description: 'Page', type: 'Page' },
  { name: 'Test Page 2', description: 'Page', type: 'Page' },
  { name: 'TEST PAGE', description: 'Page', type: 'Page' },
  { name: 'Tiến Phạm', description: 'Profile', type: 'Profile' },
  { name: 'Jadiny - quần áo trẻ em', description: 'Profile', type: 'Profile' },
  { name: 'Stackposts', description: 'Page', type: 'Page' },
  { name: 'Stackpost Groups', description: 'Group', type: 'Group' },
  { name: 'VK POST GROUPS', description: 'Group', type: 'Group' },
  { name: 'Poster 10 VT', description: 'Profile', type: 'Profile' },
  { name: 'Stackposts Team', description: 'Page', type: 'Page' },
  { name: 'Jadiny - quần áo trẻ em', description: 'Profile', type: 'Profile' },
  { name: 'Stackposts', description: 'Page', type: 'Page' },
  { name: 'Stackpost Groups', description: 'Group', type: 'Group' },
  { name: 'VK POST GROUPS', description: 'Group', type: 'Group' },
  { name: 'Poster 10 VT', description: 'Profile', type: 'Profile' },
  { name: 'Stackposts Team', description: 'Page', type: 'Page' }, 
];

const Sidebarmark = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false);
  const [showPopupIndex, setShowPopupIndex] = useState(null);
  const [users, setUsers] = useState(usersData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      setShowPopupIndex(null);
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        style={{ width: "260px", borderRight: "1px solid #ddd", zIndex: 1000 }}>
        
        <div className="position-sticky top-0 bg-white p-2" style={{ zIndex: 101 }}>
          <div className="input-group mb-3 mt-2">
            <FaSearch className="position-absolute"
              style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }} />
            <input type="text" className="form-control ps-5" placeholder="Search"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <h3 className="py-2">Watermark</h3>
        </div>

        <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
          <ul className="list-group list-group-flush">
            {filteredUsers.map((user, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="bg-light p-2 rounded me-2">
                    <FaUsers size={20} />
                  </div>
                  <div>
                    <strong>{user.name}</strong>
                    <div className="text-muted" style={{ fontSize: '12px' }}>{user.description}</div>
                  </div>
                </div>
                <div className="position-relative">
                  <FaEllipsisV style={{ cursor: 'pointer' }} onClick={() => setShowPopupIndex(index)} />
                  {showPopupIndex === index && (
                    <div className="position-absolute bg-white shadow p-2 rounded"
                      style={{ right: 0, top: '20px', zIndex: 10 }}>
                      <div className="d-flex align-items-center text-danger"
                        style={{ cursor: 'pointer' }} onClick={() => handleDelete(index)}>
                        <FaTrash className="me-2" /> Delete
                      </div>
                      <div className="d-flex align-items-center text-secondary mt-2"
                        style={{ cursor: 'pointer' }} onClick={() => setShowPopupIndex(null)}>
                        Close
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} className="d-md-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Watermark</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="input-group mb-3">
            <FaSearch className="position-absolute"
              style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 1}} />
            <input type="text" className="form-control ps-5" placeholder="Search"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <ul className="list-group list-group-flush">
            {filteredUsers.map((user, index) => (
              <li key={index} className="list-group-item">{user.name}</li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebarmark;
