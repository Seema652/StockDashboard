import React from "react";
import { FaLink } from "react-icons/fa";

function Shortlink() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-lg-2"></div>

        <div className="col-md-10 col-lg-10 d-flex flex-column align-items-center">
          <div
            className="border p-4 rounded shadow-lg"
            style={{ width: "clamp(25rem, 40vw, 90rem)", height: "auto" }}
          >
            <div className="bg-black text-white py-2 px-4 rounded mb-4 text-left">
              <h3 className="mb-0">
                <FaLink className="me-2" /> Bitly Shortlink
              </h3>
            </div>

            <div className="alert alert-light border">
              <p>
                <strong>Callback URL:</strong>
                <br />
                <a
                  href="https://demo.stackposts.com/spre/shortlink/bitly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://demo.stackposts.com/spre/shortlink/bitly
                </a>
              </p>
              <p>
                <strong>Click this link to create Bitly app:</strong>
                <br />
                <a
                  href="https://app.bitly.com/settings/api/oauth/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://app.bitly.com/settings/api/oauth/
                </a>
              </p>
            </div>

            <div className="form-group">
              <label>Status</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="bitlyStatus"
                    checked
                    readOnly
                  />
                  <label className="form-check-label">Enable</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="bitlyStatus"
                    readOnly
                  />
                  <label className="form-check-label">Disable</label>
                </div>
              </div>
            </div>

       
            <label className="mt-3">Client ID</label>
            <input
              type="text"
              className="form-control"
              value="84a2169351b57aefea5f1cb35e3be41ad9cf3305"
              readOnly
            />
            <label className="mt-3">Client Secret</label>
            <input
              type="text"
              className="form-control"
              value="25d5180d738238a1dac0f2f3c5ad3c6d47f77e54"
              readOnly
            />
          </div>

          <button className="btn btn-primary btn-lg mt-3">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Shortlink;
