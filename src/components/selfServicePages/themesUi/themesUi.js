import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ThemesUi() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-4">Choose Color Theme</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="colorTheme"
              value="grey-blue"
              checked={selectedColor === 'grey-blue'}
              onChange={handleColorChange}
            />
            <label className="form-check-label">
              <span className="d-inline-block bg-secondary text-light px-2 py-1 me-1" style={{ width: '30px' }}></span>
              <span className="d-inline-block bg-primary text-light px-2 py-1" style={{ width: '30px' }}></span> Grey and Blue
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="colorTheme"
              value="white-blue"
              checked={selectedColor === 'white-blue'}
              onChange={handleColorChange}
            />
            <label className="form-check-label">
              <span className="d-inline-block bg-white text-dark border px-2 py-1 me-1" style={{ width: '30px' }}></span>
              <span className="d-inline-block bg-primary text-light px-2 py-1" style={{ width: '30px' }}></span> White and Blue
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="colorTheme"
              value="white-red"
              checked={selectedColor === 'white-red'}
              onChange={handleColorChange}
            />
            <label className="form-check-label">
              <span className="d-inline-block bg-white text-dark border px-2 py-1 me-1" style={{ width: '30px' }}></span>
              <span className="d-inline-block bg-danger text-light px-2 py-1" style={{ width: '30px' }}></span> White and Red
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="colorTheme"
              value="white-purple"
              checked={selectedColor === 'white-purple'}
              onChange={handleColorChange}
            />
            <label className="form-check-label">
              <span className="d-inline-block bg-white text-dark border px-2 py-1 me-1" style={{ width: '30px' }}></span>
              <span className="d-inline-block bg-purple text-light px-2 py-1" style={{ width: '30px', backgroundColor: '#8e44ad' }}></span> White and Purple
            </label>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h5>Upload Images</h5>
        <div className="mb-3">
          <label className="form-label">Login background</label>
          <input type="file" className="form-control" />
          <small className="text-muted">Max: 10GB</small>
        </div>
        <div className="mb-3">
          <label className="form-label">Company logo</label>
          <input type="file" className="form-control" />
          <small className="text-muted">Max: 1GB</small>
        </div>
        <div className="mb-3">
          <label className="form-label">Login logo</label>
          <input type="file" className="form-control" />
          <small className="text-muted">Max: 1GB</small>
        </div>
      </div>

      <button type="button" className="btn btn-primary mt-4">Save</button>
    </div>
  );
}

