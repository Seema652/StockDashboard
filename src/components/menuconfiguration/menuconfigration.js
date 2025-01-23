
import React from "react";
import { Link } from "react-router-dom";
function MenuConfigration() {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  return (
    <div className="container mt-4">
      <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3 rounded-top">
        <h4 className="text-light">Menu Configuration</h4>
      </div>
      <div className="row">
        <div className="col-md-2">
          <div className="card" style={cardStyle}>
         <Link to="/ItemListing" className="text-decoration-none text-black">
            <div className="card-body">
              <h5 className="card-title">Item Management</h5>
            </div>
            </Link>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Special Note Management</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Area Management</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuConfigration;
