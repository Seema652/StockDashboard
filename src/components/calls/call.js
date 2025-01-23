import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CallsPage = () => {
  const [selectedContact, setSelectedContact] = useState(0);

  const contacts = [
    { name: "Teresa School", phone: "677-377-9558", duration: "0:02:07", date: "Yesterday, 11:17 PM", state: "Outgoing" },
    { name: "Mr. Vincent", phone: "570-636-2055", duration: "0:06:55", date: "Yesterday, 11:04 PM", state: "Outgoing" },
    { name: "Mommy", phone: "603-560-7521", duration: "0:01:14", date: "Yesterday, 10:38 PM", state: "Incoming" },
    { name: "Metty", phone: "261-420-8202", duration: "0:00:19", date: "Yesterday, 10:16 PM", state: "Missed" },
    { name: "Marzia", phone: "586-332-1897", duration: "0:00:00", date: "Yesterday, 10:15 PM", state: "Missed" },
    { name: "Lisa", phone: "916-912-8871", duration: "0:03:08", date: "Yesterday, 7:42 PM", state: "Outgoing" },
    { name: "Klaus Football", phone: "904-618-8725", duration: "0:00:00", date: "Yesterday, 5:02 PM", state: "Missed" },
    { name: "Frank", phone: "927-389-0895", duration: "0:00:00", date: "Yesterday, 3:46 PM", state: "Missed" },
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
        Calls
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
                  display: "flex",
                  justifyContent: "space-between",
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
                <div className={`text-end small ${
                  selectedContact === index ? "text-white" : "text-muted"
                }`}>
                  <div>{contact.date}</div>
                  <div>{contact.duration}</div>
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
                fontSize: "30px",
              }}
            >
              {contacts[selectedContact]?.name}
            </h2>
            <div className="mb-2" style={{ fontSize: "20px" }}>
              <strong>Phone number: </strong>
              <span className="text-muted">{contacts[selectedContact]?.phone}</span>
            </div>
            <div className="mb-2" style={{ fontSize: "20px" }}>
              <strong>Call Duration: </strong>
              <span className="text-muted">{contacts[selectedContact]?.duration}</span>
            </div>
            <div className="mb-2" style={{ fontSize: "20px" }}>
              <strong>Date: </strong>
              <span className="text-muted">{contacts[selectedContact]?.date}</span>
            </div>
            <div className="mb-2" style={{ fontSize: "20px" }}>
              <strong>State: </strong>
              <span className="text-muted">{contacts[selectedContact]?.state}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallsPage;
