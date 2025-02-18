import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaCheckCircle, FaClock, FaExclamationCircle } from 'react-icons/fa';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState('Queue');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [deleteOption, setDeleteOption] = useState('Queue');
  const [deletePlatform, setDeletePlatform] = useState('All');

  return (
    <div className="bg-white border-end vh-100 d-flex flex-column mt-3 p-3" style={{ width: '280px', position: 'fixed', top: 0, overflow: 'hidden' }}>
      <div className="input-group mb-3">
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
      
      {/* Schedules Section */}
      <h6 className="mb-2">Schedules</h6>
      <ul className="list-group list-group-flush">
        {['Queue', 'Published', 'Unpublished'].map((status) => (
          <li
            key={status}
            className={`list-group-item d-flex align-items-center ${selectedSchedule === status ? 'bg-light' : ''}`}
            onClick={() => setSelectedSchedule(status)}
            style={{ cursor: 'pointer' }}
          >
            {status === 'Queue' && <FaClock className="me-2 text-primary" />}
            {status === 'Published' && <FaCheckCircle className="me-2 text-success" />}
            {status === 'Unpublished' && <FaExclamationCircle className="me-2 text-warning" />}
            {status}
          </li>
        ))}
      </ul>
      
      {/* Platform Selection */}
      <h6 className="mt-3 mb-2">Schedules of</h6>
      <ul className="list-group list-group-flush">
        {['All schedules', 'Facebook', 'Instagram', 'X'].map((platform) => (
          <li
            key={platform}
            className={`list-group-item d-flex align-items-center ${selectedPlatform === platform ? 'bg-light' : ''}`}
            onClick={() => setSelectedPlatform(platform)}
            style={{ cursor: 'pointer' }}
          >
            {platform}
          </li>
        ))}
      </ul>

      {/* Delete Schedules Section */}
      <h6 className="mt-3 mb-2">Delete Schedules</h6>
      <div className="border p-2 rounded">
        {['Queue', 'Published', 'Unpublished'].map((option) => (
          <div key={option} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="deleteOption"
              id={option}
              checked={deleteOption === option}
              onChange={() => setDeleteOption(option)}
            />
            <label className="form-check-label" htmlFor={option}>{option}</label>
          </div>
        ))}
        <select className="form-select mt-2" value={deletePlatform} onChange={(e) => setDeletePlatform(e.target.value)}>
          <option value="All">All</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="X">X</option>
        </select>
        <button className="btn btn-danger w-100 mt-2">Submit</button>
      </div>
    </div>
  );
};

export default Sidebar;
