import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiBox } from 'react-icons/bi'; // BiBox icon import kiya
import Sidebar from './sidebar'; // Sidebar component ko import kar rahe hain
import { useNavigate } from 'react-router-dom';


function Plan() {
    const navigate = useNavigate();
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          marginLeft: '250px', // Sidebar ke width ke hisaab se adjust kiya
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f8f9fa',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Box Icon */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <BiBox size={150}  color="black" /> {/* Alag Box icon use kiya */}
       
          </div>

          {/* Button */}
          <button
            className="btn btn-primary mt-3"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              display: 'block',
              margin: '0 auto',
            }}
            onClick={() => navigate("/membership/update")}  >
            Add New
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
