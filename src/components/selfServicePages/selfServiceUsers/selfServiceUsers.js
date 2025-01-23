import React from 'react';
import { FaAddressBook, FaEllipsisV } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelfServiceUsers = () => {
  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <FaAddressBook size={40} />
        </div>
        <div className="col">
          <h4 className="m-0">List</h4>
        </div>
      </div>

      {/* Filter and Actions Section */}
      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <select className="form-select">
            <option>All Contacts</option>
            <option>Favorites</option>
          </select>
        </div>
        <div className="col text-end ">
          <button className="btn btn-primary me-2 table-responsive active-projects style-1">Invite Contacts</button>
          <button className="btn btn-light">
            <FaEllipsisV />
          </button>
        </div>
      </div>

      {/* Alphabet Filters */}
      <div className="row mb-3">
        <div className="col">
          <div className="d-flex flex-wrap">
            {['All', '0-9', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')].map((letter) => (
              <button
                key={letter}
                className="btn btn-light m-1"
                style={{ width: '36px', height: '36px', padding: '0' }}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="row">
        <div className="col">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Search by name"
            />
            <button className="btn btn-primary">Go</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfServiceUsers;
