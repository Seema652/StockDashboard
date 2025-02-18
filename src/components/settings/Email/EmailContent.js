import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdEmail } from "react-icons/md";
import { FaAlignCenter } from "react-icons/fa";

function EmailContent() {
  const [selectedEmail, setSelectedEmail] = useState("activation");

  const emailContents = {
    activation: {
      subject: "Hello {fullname}! Activate your account",
      content: `Welcome to {website_name}! <br/><br/>Hello {fullname},  <br/><br/>Thank you for joining! We're glad to have you as a community member, and we're stocked for you to start exploring our service. <br/>All you need to do is activate your account: <br/><a href='{activation_link}' target='_blank'>{activation_link}</a> <br/><br/>Thanks and Best Regards!`,
    },
    welcome: {
      subject: "Welcome {fullname}!",
      content: "Welcome to our community! We're excited to have you here.",
    },
    forgotPassword: {
      subject: "Reset Your Password",
      content: "Click the link below to reset your password.",
    },
    renewalReminders: {
      subject: "Renewal Reminder",
      content: "Your subscription is about to expire. Renew now!",
    },
    paymentSuccess: {
      subject: "Payment Successful",
      content: "Thank you for your payment! Your transaction was successful.",
    },
  };

  const handleEmailSelect = (emailType) => {
    setSelectedEmail(emailType);
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <div className="col-12 col-md-9 d-flex align-items-center bg-black text-white p-3 rounded mb-4 justify-content-start">
        <FaAlignCenter className="me-2" />
        <h4 className="fw-bold text-left">Email Content</h4>
      </div>

      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-4 col-lg-3 mb-3 d-flex flex-column align-items-start">
          <div className="list-group border-0 shadow-lg w-100">
            {Object.keys(emailContents).map((emailType) => (
              <button
                key={emailType}
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  selectedEmail === emailType ? "active" : ""
                }`}
                onClick={() => handleEmailSelect(emailType)}
              >
                <MdEmail className="me-2" />
                {emailType
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}{" "}
                Email
              </button>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-lg w-100">
            <div className="card-body text-start">
              <h3 className="card-title bg-black text-white p-3 rounded text-left">
                {selectedEmail
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}{" "}
                Email
              </h3>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={emailContents[selectedEmail].subject}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  className="form-control"
                  id="content"
                  rows="2"
                  style={{ overflowY: "scroll", maxHeight: "150px" }}
                  value={emailContents[selectedEmail].content}
                  readOnly
                ></textarea>
              </div>

              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailContent;
