
import React from 'react';
import { Link } from 'react-router-dom';

function TabNavigation() {
  return (
    <div className="col-12 d-flex justify-content-start align-items-center gap-3">
      <Link to="/new-order" className="btn btn-success">
        New Order
      </Link>
      <Link to="/ongoing-order" className="btn btn-primary">
        On Going Order
      </Link>
      <Link to="/kitchen-status" className="btn btn-info">
        Kitchen Status
      </Link>
      <Link to="/online-order" className="btn btn-warning">
        Online Order
      </Link>
      <Link to="/today-order" className="btn btn-danger">
        Today Order
      </Link>
    </div>
  );
}

export default TabNavigation;
