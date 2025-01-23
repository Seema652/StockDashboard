import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const TinderPage = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const contacts = [
    { name: "JessicaSmiles", lastMsg: "Just staying in", time: "7:23 PM" },
    { name: "Lisa Polak", lastMsg: "Hi!", time: "3:20 PM" },
    { name: "Anna Mcmillian", lastMsg: "Hi!", time: "11:20 AM" },
    { name: "Lauren", lastMsg: "I think I saw you in o...", time: "7:22 PM" },
    { name: "Marzia Ferollini", lastMsg: "😉", time: "7:22 PM" },
    { name: "Olivia Irwin", lastMsg: ":)", time: "5:33 PM" },
  ];
  
  const chats = [
    [
      { from: "You", text: "Hey! You have a really nice smile 😍", time: "7:22 PM", date: "Yesterday" },
      { from: "JessicaSmiles", text: "Thanks 😉", time: "7:22 PM", date: "Yesterday" },
      { from: "You", text: "What are you up to tonight?", time: "7:22 PM", date: "Yesterday" },
      { from: "JessicaSmiles", text: "Just staying in", time: "7:23 PM", date: "Yesterday" },
      { from: "JessicaSmiles", text: "Probably gonna order some food", time: "7:24 PM", date: "Yesterday" },
      { from: "You", text: "Cool! Mind if I join you? I make a great pizza 🍕", time: "7:24 PM", date: "Yesterday" },
    ],
    [
      { from: "You", text: "Hi!", time: "3:20 PM" },
      { from: "Lisa Polak", text: "Hi!", time: "3:21 PM" },
    ],
    [
      { from: "You", text: "Hi!", time: "11:20 AM" },
      { from: "Anna Mcmillian", text: "Hi!", time: "11:21 AM" },
    ],
  ];
  

  const getFormattedTime = (time) => {
    return `Yesterday, ${time}`;
  };

  return (
    <div className="container-fluid vh-100 p-0" style={{ backgroundColor: "#f0f0f0", color: "black" }}>
      <div className="p-3">
        <h1 className="fw-bold fs-1">Tinder</h1>
      </div>
      <div className="row h-100" style={{ maxWidth: "1250px", margin: "0 auto" }}>
        <div
          className="col-12 bg-white"
          style={{
            borderRadius: "25px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            margin: "15px",
          }}
        >
          <div className="row">
            <div className="col-md-4 col-lg-4 p-0">
              <div className="p-3 bg-dark border-bottom d-flex align-items-center justify-content-around">
                <i className="bi bi-chat-left-text fs-4 text-white"></i>
                <i className="bi bi-person-fill fs-4 text-white"></i>
              </div>
              <div className="list-group list-group-flush overflow-auto p-3" style={{ borderRadius: "15px" }}>
                {contacts.map((contact, index) => (
                  <button
                    key={index}
                    className={`list-group-item list-group-item-action border-0 mb-3 rounded-4 shadow-sm ${
                      selectedChat === index ? "bg-dark text-white" : "bg-white text-dark"
                    }`}
                    onClick={() => setSelectedChat(index)}
                    style={{
                      padding: "15px",
                      margin: "0 10px",
                      borderRadius: "25px",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className={`rounded-circle d-flex justify-content-center align-items-center me-3 ${
                          selectedChat === index ? "bg-white" : "bg-black"
                        }`}
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i
                          className={`bi bi-person ${
                            selectedChat === index ? "text-dark" : "text-white"
                          }`}
                          style={{ fontSize: "20px" }}
                        ></i>
                      </div>
                      <div className="w-100">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="d-flex flex-column">
                            <strong>{contact.name}</strong>
                            <div
                              className={`small ${selectedChat === index ? "text-white" : "text-muted"}`}
                              style={{ marginTop: "2px" }}
                            >
                              {contact.lastMsg}
                            </div>
                          </div>
                          <div className="text-end">
                            <div
                              className={`small ${selectedChat === index ? "text-white" : "text-muted"}`}
                              style={{ lineHeight: "1.1" }}
                            >
                              Yesterday
                            </div>
                            <div
                              className={`small ${selectedChat === index ? "text-white" : "text-muted"}`}
                              style={{ lineHeight: "1.1" }}
                            >
                              {contact.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div
              className="col-md-8 col-lg-8 d-flex flex-column"
              style={{
                borderLeft: "1px solid #dee2e6",
              }}
            >
              <div className="flex-grow-1 p-3">
                {chats[selectedChat]?.map((msg, idx) => (
                  <div key={idx}>
                    <div className={`d-flex mb-3 ${msg.from === "You" ? "justify-content-end" : ""}`}>
                      <div className="d-flex align-items-start">
                        {msg.from !== "You" && (
                          <div
                            className="rounded-circle bg-secondary d-flex justify-content-center align-items-center me-2 text-white fw-bold"
                            style={{ width: "30px", height: "30px" }}
                          >
                            <i className="bi bi-person" style={{ fontSize: "16px" }}></i>
                          </div>
                        )}
                        <div
                          className={`p-2 rounded-3 ${
                            msg.from === "You" ? "bg-primary text-white" : "bg-light border"
                          }`}
                          style={{ maxWidth: "100%" }}
                        >
                          <div className="text-truncate">{msg.text}</div>
                          <div className="text-end text-muted small mt-1">{getFormattedTime(msg.time)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinderPage;
