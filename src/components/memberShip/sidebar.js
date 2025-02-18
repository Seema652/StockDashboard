import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaBox, FaEllipsisV } from 'react-icons/fa'; 

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { name: 'Entrepreneur', description: 'Your path to success' },
    { name: 'Premium', description: 'Elevate your experience' },
    { name: 'Standard', description: 'Affordable and accessible' },
    { name: 'Free & Trial', description: 'Try us out today' },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="bg-light border-end vh-100"
      style={{
        width: '250px',
        position: 'fixed',
        top: 0,
      }}
    >
      <div className="px-3 mb-3 mt-5">
        <div className="input-group" style={{ marginTop: '80px' }}>
          <div className="position-relative w-100">
            <FaSearch
              className="position-absolute"
              style={{
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Search users"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="text-left py-3 ms-3">
          <h4>Plans</h4>
        </div>

        <ul className="list-group list-group-flush">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <li
                className="list-group-item d-flex align-items-center justify-content-between"
                key={index}
              >
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      backgroundColor: '#f0f0f0',
                      padding: '10px',
                      borderRadius: '5px',
                      marginRight: '10px',
                    }}
                  >
                    <FaBox size={30} />
                  </div>
                  <div>
                    <h5>{user.name}</h5>
                    <span>{user.description}</span>
                  </div>
                </div>
            
                {user.name !== 'Free & Trial' && (
                  <FaEllipsisV
                    size={20}
                    className="text-muted"
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </li>
            ))
          ) : (
            <li className="list-group-item">
              <span>No users found</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
