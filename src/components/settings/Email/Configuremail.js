import React, { useState } from "react";
import { BiBox } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ConfigureMail() {
  const [senderInfo, setSenderInfo] = useState({
    protocol: 'mail',
    senderEmail: '',
    senderName: ''
  });

  const [smtpServer, setSmtpServer] = useState({
    status: 'enable',
    server: '',
    username: '',
    password: '',
    port: '',
    encryption: ''
  });

  const [smtpServers, setSmtpServers] = useState([]);

  const handleSenderInfoSubmit = (e) => {
    e.preventDefault();
    // Handle sender info submission
    console.log('Sender Info:', senderInfo);
  };

  const handleSmtpSubmit = (e) => {
    e.preventDefault();
    setSmtpServers([...smtpServers, smtpServer]);
    setSmtpServer({
      status: 'enable',
      server: '',
      username: '',
      password: '',
      port: '',
      encryption: ''
    });
    // Close modal
    document.querySelector('[data-bs-dismiss="modal"]').click();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-lg-6 col-md-8 col-sm-10">
        <div className="card shadow-lg border-0 w-100">
          <div className="card-body">
            <div className="d-flex align-items-center gap-2 bg-black text-white p-3 rounded mb-3">
              <h3 className="card-title m-0">Sender Information</h3>
            </div>
            <form onSubmit={handleSenderInfoSubmit}>
              <div className="mb-3">
                <label className="form-label">Mail Protocol</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="protocol"
                      id="mail"
                      checked={senderInfo.protocol === "mail"}
                      onChange={(e) =>
                        setSenderInfo({ ...senderInfo, protocol: "mail" })
                      }
                    />
                    <label className="form-check-label" htmlFor="mail">
                      Mail
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="protocol"
                      id="smtp"
                      checked={senderInfo.protocol === "smtp"}
                      onChange={(e) =>
                        setSenderInfo({ ...senderInfo, protocol: "smtp" })
                      }
                    />
                    <label className="form-check-label" htmlFor="smtp">
                      SMTP
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="senderEmail" className="form-label">
                    Sender Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="senderEmail"
                    value={senderInfo.senderEmail}
                    onChange={(e) =>
                      setSenderInfo({
                        ...senderInfo,
                        senderEmail: e.target.value,
                      })
                    }
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="senderName" className="form-label">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="senderName"
                    value={senderInfo.senderName}
                    onChange={(e) =>
                      setSenderInfo({
                        ...senderInfo,
                        senderName: e.target.value,
                      })
                    }
                    placeholder="Sender Name"
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* SMTP Servers Card */}
        <div className="card mt-4 shadow-lg border-0 w-100 mx-auto">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center bg-black text-white p-2 mb-3 rounded">
              <h3 className="card-title">SMTP Server</h3>
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#smtpModal"
              >
                Add New
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Server</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Port</th>
                    <th>Encryption</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {smtpServers.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        <BiBox size={100} style={{ color: "black" }} />
                      </td>
                    </tr>
                  ) : (
                    smtpServers.map((server, index) => (
                      <tr key={index}>
                        <td>{server.server}</td>
                        <td>{server.username}</td>
                        <td>••••••••</td>
                        <td>{server.port}</td>
                        <td>{server.encryption}</td>
                        <td>{server.status}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* SMTP Modal */}
      <div
        className="modal fade"
        id="smtpModal"
        tabIndex="-1"
        aria-labelledby="smtpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-black text-white">
              <h5 className="modal-title" id="smtpModalLabel">
                Add New SMTP Server
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSmtpSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <div>
                    <input
                      type="radio"
                      name="status"
                      id="enable"
                      className="form-check-input"
                      checked={smtpServer.status === "enable"}
                      onChange={(e) =>
                        setSmtpServer({ ...smtpServer, status: "enable" })
                      }
                    />
                    <label className="form-check-label" htmlFor="enable">
                      Enable
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="status"
                      className="form-check-input"
                      checked={smtpServer.status === "disable"}
                      onChange={(e) =>
                        setSmtpServer({ ...smtpServer, status: "disable" })
                      }
                    />
                    <label className="form-check-label">Disable</label>
                  </div>
                </div>
                {/* Other SMTP form fields */}
                <div className="mb-3">
                  <label className="form-label">SMTP Server</label>
                  <input
                    type="text"
                    className="form-control"
                    value={smtpServer.server}
                    onChange={(e) =>
                      setSmtpServer({ ...smtpServer, server: e.target.value })
                    }
                    placeholder="smtp.example.com"
                    required
                  />
                </div>
                {/* Add similar onChange handlers for other fields */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfigureMail;
