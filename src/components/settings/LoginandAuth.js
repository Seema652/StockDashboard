import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLink } from "react-icons/fa";

function LoginandAuth() {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card p-4 shadow-lg border-0 mb-3">
            <div className="bg-black text-white p-2 mb-5 rounded">
              <h3 className="mb-3">Auth</h3>
            </div>
            <div className="form-group">
              <label>Landing page</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="landingPage"
                    checked
                    readOnly
                  />
                  <label className="form-check-label">Enable</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="landingPage"
                    readOnly
                  />
                  <label className="form-check-label">Disable</label>
                </div>
              </div>

              <div className="form-group">
                <label>Signup page</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="signupPage"
                      checked
                      readOnly
                    />
                    <label className="form-check-label">Enable</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="signupPage"
                      readOnly
                    />
                    <label className="form-check-label">Disable</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Activation email for new user</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="activationEmail"
                      checked
                      readOnly
                    />
                    <label className="form-check-label">Enable</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="activationEmail"
                      readOnly
                    />
                    <label className="form-check-label">Disable</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Welcome email for new user</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="welcomeEmail"
                      checked
                      readOnly
                    />
                    <label className="form-check-label">Enable</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="welcomeEmail"
                      readOnly
                    />
                    <label className="form-check-label">Disable</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>User can change email</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="changeEmail"
                      checked
                      readOnly
                    />
                    <label className="form-check-label">Enable</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="changeEmail"
                      readOnly
                    />
                    <label className="form-check-label">Disable</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>User can change username</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="changeUsername"
                      checked
                      readOnly
                    />
                    <label className="form-check-label">Enable</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="changeUsername"
                      readOnly
                    />
                    <label className="form-check-label">Disable</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-4 shadow-lg border-0 mb-3">
            <div className="bg-black text-white p-2 mb-5 rounded">
              <h4 className="mb-3">Google reCaptcha V2</h4>
            </div>
            <div className="form-group">
              <label>Status</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="recaptchaStatus"
                  />
                  <label className="form-check-label">Enable</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="recaptchaStatus"
                    checked
                    readOnly
                  />
                  <label className="form-check-label">Disable</label>
                </div>
              </div>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Google site key"
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Google secret key"
              />
            </div>
          </div>

          <div className="card p-4 shadow-lg border-0 mb-3">
            <div className="bg-black text-white p-2 mb-5 rounded">
              <h4 className="mb-3">Facebook Login</h4>
            </div>
            <div className="alert alert-light border">
              <FaLink className="ms-2 text-primary" size={30} />
              <p>
                <strong>Callback URL:</strong>
                <a
                  href="https://demo.stackposts.com/spre/login/facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://demo.stackposts.com/spre/login/facebook
                </a>
              </p>
              <p>
                <strong>Click this link to create Facebook app:</strong>

                <a
                  href="https://developers.facebook.com/apps/create/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developers.facebook.com/apps/create/
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
                    name="twitterStatus"
                    checked
                    readOnly
                  />
                  <label className="form-check-label">Enable</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="twitterStatus"
                    readOnly
                  />
                  <label className="form-check-label">Disable</label>
                </div>
              </div>
              <label>Facebook app id</label>
              <input
                type="number"
                className="form-control mt-2"
                value="774354074249326"
                readOnly
              />
              <label>Facebook app secret</label>
              <input
                type="text"
                className="form-control mt-2"
                value="39a3994c890201a12a6171ce4d744b24"
                readOnly
              />
              <label>Facebook app version</label>
              <input
                type="text"
                className="form-control mt-2"
                value="v16.0"
                readOnly
              />
            </div>
          </div>
          <div className="card p-4 shadow-lg border-0 mb-3">
            <div className="bg-black text-white p-2 mb-5 rounded">
              <h4 className="mb-3">Google login</h4>
            </div>
            <div className="alert alert-light border">
              <FaLink className="ms-2 text-primary" size={30} />
              <p>
                <strong>Callback URL:</strong>
                <a
                  href="https://demo.stackposts.com/spre/login/google"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://demo.stackposts.com/spre/login/google
                </a>
              </p>
              <p>
                <strong>Click this link to create Google app:</strong>

                <a
                  href="https://console.cloud.google.com/projectcreate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://console.cloud.google.com/projectcreate
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
                    name="twitterStatus"
                    checked
                    readOnly
                  />
                  <label className="form-check-label">Enable</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="twitterStatus"
                    readOnly
                  />
                  <label className="form-check-label">Disable</label>
                </div>
              </div>
              <label>Google client id</label>
              <input
                type="text"
                className="form-control mt-2"
                value="935611528217-72lmkca007djq1l8eu7ooak1iv3i0ubv.apps.googleusercontent.com"
                readOnly
              />
              <label>Google client secret</label>
              <input
                type="text"
                className="form-control mt-2"
                value="2w0nOhYc6m_aOrhh9YNnEc1_"
                readOnly
              />
            </div>
          </div>

          <div className="card p-4 shadow-lg border-0 mb-3">
            <div className="bg-black text-white p-2 mb-5 rounded">
              <h4 className="mb-3">Twitter Login</h4>
            </div>
            <div className="alert alert-light border">
              <FaLink className="ms-2 text-primary" size={30} />
              <p>
                <strong>Callback URL:</strong>
                <a
                  href="https://demo.stockposts.com/spree/login/twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://demo.stockposts.com/spree/login/twitter
                </a>
              </p>
              <p>
                <strong>Click this link to create Facebook app:</strong>

                <a
                  href="https://developer.twitter.com/en/portal/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developer.twitter.com/en/portal/dashboard
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
                    name="twitterStatus"
                    checked
                    readOnly
                  />
                  <label className="form-check-label">Enable</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="twitterStatus"
                    readOnly
                  />
                  <label className="form-check-label">Disable</label>
                </div>
              </div>
              <input
                type="text"
                className="form-control mt-2"
                value="eGlsNkpkSm1oLURCOHo4MTIMN2Y6MTpjaQ"
                readOnly
              />
              <input
                type="text"
                className="form-control mt-2"
                value="mHkBxPlrCdTH4fZRtTSIJxyMThcmg3oewbYCnKOJa8Awm6KW"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginandAuth;
