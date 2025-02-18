import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ProxyUpdateForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid d-flex justify-content-center mt-4">
      <div className="card shadow p-4 w-100" style={{ maxWidth: '600px', borderRadius: '12px' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4">Update</h2>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/prompiexs')}>
            Back
          </button>
        </div>
        <div className="mb-3">
          <label className="form-label d-block">Status</label>
          <div className="d-flex flex-wrap">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="enable"
                value="enable"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="enable">
                Enable
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="disable"
                value="disable"
              />
              <label className="form-check-label" htmlFor="disable">
                Disable
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="proxy" className="form-label">Proxy</label>
          <input
            type="text"
            className="form-control"
            id="proxy"
            placeholder="Proxy format username:password@ip:port OR ip:port"
          />
        </div>
        <p className="text-muted small">
          Proxy format: <code>username:password@ip:port</code> OR <code>ip:port</code>
        </p>
        <div className="text-end">
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ProxyUpdateForm;
