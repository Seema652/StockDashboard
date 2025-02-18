import "react-quill/dist/quill.snow.css";
import { FaBell } from "react-icons/fa";
import TextEditor from "./joditEditor";

function Notification() {
  return (
    <div className="container border-0 p-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
     
            <div className="card mb-4 border-0 shadow">
              <div className="card-header bg-black text-white">
                <h5 className="m-0">
                  <FaBell className="me-2 text-primary" />
                  Beamer Notification
                </h5>
              </div>
              <div className="card-body">
                <div className="alert alert-primary">
                  <strong>Get Beamer product ID here:</strong>
                  <a
                    href="https://www.getbeamer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    https://www.getbeamer.com/
                  </a>
                  <br />
                  <strong>Important:</strong> Set field HTML SELECTOR as
                  beamer-notification at:
                  <a
                    href="https://app.getbeamer.com/settings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    https://app.getbeamer.com/settings
                  </a>
                </div>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <div>
                      <input
                        type="radio"
                        name="beamerStatus"
                        className="me-2"
                      />
                      Enable
                      <input
                        type="radio"
                        name="beamerStatus"
                        className="ms-3 me-2"
                      />
                      Disable
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Beamer Product ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter product ID"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="card mb-4 border-0 shadow">
              <div className="card-header bg-black text-white">
                <h5 className="m-0">
                  <FaBell className="me-2 text-primary" />
                  Backend - Popup Notification
                </h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <div>
                      <input
                        type="radio"
                        name="backendStatus"
                        className="me-2"
                      />
                      Enable
                      <input
                        type="radio"
                        name="backendStatus"
                        className="ms-3 me-2"
                      />
                      Disable
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Popup ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter popup ID"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Display Again (minutes)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter minutes"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Content</label>
                    <TextEditor />
                  </div>
                </form>
              </div>
            </div>

            <div className="card mb-4 border-0 shadow">
              <div className="card-header bg-black text-white">
                <h5 className="m-0">
                  <FaBell className="me-2 text-primary" />
                  Frontend - Popup Notification
                </h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <div>
                      <input
                        type="radio"
                        name="frontendStatus"
                        className="me-2"
                      />
                      Enable
                      <input
                        type="radio"
                        name="frontendStatus"
                        className="ms-3 me-2"
                      />
                      Disable
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Popup ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter popup ID"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Display Again (minutes)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter minutes"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Content</label>
                    <TextEditor />
                  </div>
                </form>
              </div>
            </div>

            <div className="text-end">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Notification;
