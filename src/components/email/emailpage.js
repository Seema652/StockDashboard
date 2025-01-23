import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const EmailPage = () => {
  const [selectedEmail, setSelectedEmail] = useState(0);

  const emails = [
    { sender: "donotreply@e0.wordpress.com", subject: "Grow your audience ...", time: "7:34 PM" },
    { sender: "Darryl_Black@gmail.com", subject: "Chemistry Essay Pres...", time: "6:17 PM" },
    { sender: "EA@ea.ea.com", subject: "Reset Your Password", time: "4:01 PM" },
    { sender: "no-reply@t.mail.coursehero.com", subject: "Berklee College of M...", time: "2:47 PM" },
  ];

  const emailDetails = [
    {
      from: "Mailsender <donotreply@e0.wordpress.com>",
      to: "eric_lewis02@gmail.com",
      content:
        "Your coupon is expiring... FLASH SALE ENDS SOON! Don’t miss this great deal. Upgraded plans are jam-packed with powerful features and support you'll LOVE. Attract more viewers, make more sales, share more content, and much more, all when you upgrade your WordPress.com site today. Enter this coupon code at checkout: ENJOY20. Hurry, this offer expires at the end of the day today! Click here to claim your discount now! -The WordPress.com Team P.S. Upgrading your plan is risk-free! If you decide for any reason that you don't love your upgrade, we'll give you a full refund within 30 days of purchase (96 hours for domains).",
    },
    {
      from: "Darryl Black <Darryl_Black@gmail.com>",
      to: "eric_lewis02@gmail.com",
      content:
        "Hi Eric, I’ve attached the updated version of my Chemistry essay. Let me know if there’s anything else I need to change or update before the final submission. Thanks, Darryl.",
    },
    {
      from: "EA Support <EA@ea.ea.com>",
      to: "eric_lewis02@gmail.com",
      content:
        "Dear Eric, We received a request to reset your password. If you didn’t request this, please ignore this email. Otherwise, you can reset your password using this link. Thank you for choosing EA. Best regards, EA Support.",
    },
    {
      from: "CourseHero <no-reply@t.mail.coursehero.com>",
      to: "eric_lewis02@gmail.com",
      content:
        "Berklee College of Music: Check out these study guides for your upcoming exams! We’ve curated materials that will help you ace your courses. Explore now and get the best out of your studies!",
    },
  ];

  return (
    <div className="container-fluid vh-100 p-0" style={{ backgroundColor: "#f0f0f0", color: "black" }}>
      <div className="p-3">
        <h1 className="fw-bold fs-1 text-black">Email</h1>
      </div>
      <div className="row h-100" style={{ maxWidth: "1250px", margin: "0 auto" }}>
        <div className="col-12 bg-white" style={{
          borderRadius: "25px",
          boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)",
          overflow: "hidden",
          margin: "15px"
        }}>
          <div className="row">
            <div className="col-md-4 col-lg-4 p-0">
              <div className="list-group list-group-flush overflow-auto p-3" style={{ borderRadius: "15px" }}>
                {emails.map((email, index) => (
                  <button
                    key={index}
                    className={`list-group-item list-group-item-action border-0 mb-3 rounded-4 shadow-sm ${
                      selectedEmail === index ? "bg-black text-white" : "bg-white text-black"
                    }`}
                    onClick={() => setSelectedEmail(index)}
                    style={{
                      padding: "15px",
                      margin: "0 10px",
                      borderRadius: "25px"
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className={`rounded-circle d-flex justify-content-center align-items-center me-3 fw-bold ${
                          selectedEmail === index ? "bg-white text-dark" : "bg-dark text-white"
                        }`}
                        style={{ width: "40px", height: "40px" }}
                      >
                        {email.sender.charAt(0)}
                      </div>
                      <div className="w-100">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="d-flex flex-column">
                            <strong>{email.sender}</strong>
                            <div className={`small ${selectedEmail === index ? 'text-white' : 'text-muted'}`} style={{ marginTop: "2px" }}>
                              {email.subject}
                            </div>
                          </div>
                          <div className="text-end">
                            <div className={`small ${selectedEmail === index ? 'text-white' : 'text-muted'}`} style={{ lineHeight: "1.1" }}>
                              Yesterday
                            </div>
                            <div className={`small ${selectedEmail === index ? 'text-white' : 'text-muted'}`} style={{ lineHeight: "1.1" }}>
                              {email.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-8 col-lg-8 d-flex flex-column" style={{
              borderLeft: "1px solid #fff"
            }}>
              <div className="flex-grow-1 p-3">
                <div className="text-black">
                  <strong>From:</strong> {emailDetails[selectedEmail]?.from}
                </div>
                <div className="text-black">
                  <strong>To:</strong> {emailDetails[selectedEmail]?.to}
                </div>
                <p className="mt-3">{emailDetails[selectedEmail]?.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailPage;