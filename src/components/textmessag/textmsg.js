import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa";

const ContactItem = ({ contact, index, selectedContact, onSelect }) => {
  const isSelected = selectedContact === index;

  return (
    <button
      className={`list-group-item list-group-item-action border-bottom`}
      onClick={() => onSelect(index)}
      style={{
        width: "100%",
        borderBottom: "1px solid #dee2e6",
        padding: "10px 15px",
        backgroundColor: isSelected ? "#000" : "#fff",
        color: isSelected ? "#fff" : "#000",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="rounded-circle d-flex justify-content-center align-items-center me-3"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: isSelected ? "#fff" : "#000",
          fontSize: "14px",
          color: isSelected ? "#000" : "#fff",
          fontWeight: "bold",
        }}
      >
        {contact.useIcon ? <FaUser /> : contact.phone.charAt(0)}
      </div>
      <div
        className="d-flex flex-column"
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <div className="fw-bold" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {contact.phone}
        </div>
        <div
          className={`small ${isSelected ? "text-white" : "text-muted"}`}
          style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {contact.shortMessage}
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-end ms-auto"
        style={{ flexShrink: 0 }}
      >
        <div className={`small ${isSelected ? "text-white" : "text-muted"}`}>Yesterday</div>
        <div
          className={`small ${isSelected ? "text-white" : "text-muted"}`}
          style={{ marginTop: "2px" }}
        >
          {contact.timestamp}
        </div>
      </div>
    </button>
  );
};

const ContactDetails = ({ contact }) => {
  return (
    <div className="d-flex flex-column bg-white p-4">
      <div className="d-flex align-items-start">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center me-3"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#6c757d",
            fontSize: "16px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {contact.useIcon ? <FaUser /> : contact.phone.charAt(0)}
        </div>
        <div
          className="message-bubble incoming"
          style={{
            width: "800px",
            maxWidth: "50%",
            backgroundColor: "#f0f0f0",
            padding: "15px 20px",
            borderRadius: "20px",
            margin: "10px 0",
            alignSelf: "flex-start",
            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
            wordWrap: "break-word",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#333",
            }}
          >
            {contact?.fullMessage}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#6c757d",
              marginTop: "10px",
              textAlign: "right",
            }}
          >
            Yesterday, {contact?.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [selectedContact, setSelectedContact] = useState(0);

  const contacts = [
    {
      phone: "555-4545-777",
      shortMessage: "Keep the kids happy t...",
      fullMessage:
        "Keep the kids happy this summer with free entry to the Paintball Centre throughout the whole of August. Call us back to book a date: 555-4545-777.",
      timestamp: "10:02 AM",
      useIcon: true,
    },
    {
      phone: "Lisa",
      shortMessage: "did she say anything ...",
      fullMessage: "Did she say anything yet?",
      timestamp: "10:50 AM",
      useIcon: false,
    },
    {
      phone: "346-753-3842",
      shortMessage: "Just make sure to go...",
      fullMessage: "Just make sure to go!",
      timestamp: "10:03 AM",
      useIcon: true,
    },
    {
      phone: "Amanda",
      shortMessage: "Just don't get annoye...",
      fullMessage: "Just don't get annoyed...",
      timestamp: "8:19 AM",
      useIcon: false,
    },
    {
      phone: "Tommy",
      shortMessage: "Your Apple ID Verific...",
      fullMessage: "Your Apple ID Verification.",
      timestamp: "4:42 PM",
      useIcon: false,
    },
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
        Text Messages
      </h1>
      <div
        className="row w-200"
        style={{
          maxWidth: "1500px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <div
          className="col-md-4 col-lg-4 border-end p-0"
          style={{
            overflowY: "auto",
            maxHeight: "1000px",
            borderRadius: "15px 0 0 15px",
          }}
        >
          <div className="list-group list-group-flush">
            {contacts.map((contact, index) => (
              <ContactItem
                key={index}
                contact={contact}
                index={index}
                selectedContact={selectedContact}
                onSelect={setSelectedContact}
              />
            ))}
          </div>
        </div>
        <div
          className="col-md-8 col-lg-8 d-flex flex-column bg-white p-4"
          style={{
            borderRadius: "0 15px 15px 0",
            height: "600px",
            overflowY: "auto",
          }}
        >
          {contacts[selectedContact] && (
            <ContactDetails contact={contacts[selectedContact]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
