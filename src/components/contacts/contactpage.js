import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage = () => {
  const [selectedContact, setSelectedContact] = useState(0);

  const contacts = [
    {
      name: "Apple Inc.",
      phone: "1800MYAPPLE",
      address: "1 Infinite Loop Cupertino CA 95014 United States",
    },
    { name: "Unknown", phone: "711-367-6564", address: "No Address Provided" },
    { name: "Vincent Copeland", phone: "779-806-9509", address: "Chicago, IL" },
    { name: "Darryl Black", phone: "257-479-3721", address: "Los Angeles, CA" },
    { name: "Alex Wainwright", phone: "347-824-2999", address: "New York, NY" },
    { name: "Klaus Radcliffe", phone: "454-262-0336", address: "Boston, MA" },
    { name: "Tommy Blackwood", phone: "683-864-5083", address: "San Francisco, CA" },
    { name: "Momo Miazuki", phone: "436-433-7574", address: "Seattle, WA" },
    { name: "New Contact 1", phone: "123-456-7890", address: "New Address 1" },
    { name: "New Contact 2", phone: "987-654-3210", address: "New Address 2" },
  ];

  return (
    <div
      className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light"
      style={{ padding: "20px" }}
    >
      <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
        Contacts
      </h1>
      <div
        className="row w-100"
        style={{
          maxWidth: "1300px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <div
          className="col-md-4 col-lg-4 border-end p-0"
          style={{
            overflowY: "auto",
            maxHeight: "600px",
            borderRadius: "15px 0 0 15px",
          }}
        >
          <div className="list-group list-group-flush">
            {contacts.map((contact, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action border-bottom ${
                  selectedContact === index ? "bg-dark text-white" : "bg-white text-dark"
                }`}
                onClick={() => setSelectedContact(index)}
                style={{
                  borderBottom: "1px solid #dee2e6",
                  padding: "10px 15px",
                }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className={`rounded-circle d-flex justify-content-center align-items-center me-3 fw-bold ${
                      selectedContact === index ? "bg-light text-dark" : "bg-black text-white"
                    }`}
                    style={{ width: "50px", height: "50px", fontSize: "18px" }}
                  >
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{contact.name}</strong>
                    <div
                      className={`small ${
                        selectedContact === index ? "text-white" : "text-muted"
                      }`}
                    >
                      {contact.phone}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div
          className="col-md-8 col-lg-8 d-flex flex-column bg-white p-4"
          style={{ borderRadius: "0 15px 15px 0" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <div
              className="rounded-circle bg-black d-flex justify-content-center align-items-center mb-3 text-white fw-bold"
              style={{ width: "150px", height: "150px", fontSize: "50px" }}
            >
              {contacts[selectedContact]?.name.charAt(0)}
            </div>
            <h2
              className="fw-bold mb-3 text-color-black"
              style={{
                fontSize: selectedContact === 0 ? "40px" : "20px",
              }}
            >
              {contacts[selectedContact]?.name}
            </h2>
            <div
              className="mb-2"
              style={{ fontSize: "20px", maxWidth: "600px", wordWrap: "break-word" }}
            >
              <strong>Phone number: </strong>
              <span className="text-muted">{contacts[selectedContact]?.phone}</span>
            </div>
            <div
              className="text-center"
              style={{
                fontSize: "15px",
                maxWidth: "600px",
                wordWrap: "break-word",
                padding: "10px 0",
                borderTop: "1px solid #dee2e6",
                borderBottom: "1px solid #dee2e6",
              }}
            >
              <div>
                <strong>Address: </strong>
                <span className="text-muted">{contacts[selectedContact]?.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
