import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const TelegramPage = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const contacts = [
    { name: "Amanda_Brown", lastMsg: "No, I’ve already been ...", time: "5:27 PM" },
    { name: "Clara Lewis", lastMsg: "No, I’ve already been ...", time: "3:40 PM" },
  ];

  const chats = [
    [
      { from: "Amanda_Brown", text: "Just don’t do anything stupid", time: "5:10 PM" },
      { from: "You", text: "I won’t", time: "5:11 PM" },
      { from: "Amanda_Brown", text: "Your parents won’t be happy if they find out", time: "5:16 PM" },
      { from: "You", text: "everything’s fine", time: "5:17 PM" },
      { from: "You", text: "it’s just a prank", time: "5:24 PM" },
      { from: "You", text: "nothing too extreme", time: "5:25 PM" },
      { from: "Amanda_Brown", text: "No, I’ve already been to the store in the morning.", time: "5:27 PM" },
    ],
    [
      { from: "Clara Lewis", text: "No, I’ve already been to the store in the morning.", time: "3:40 PM" },
    ],
  ];


  const getFormattedTime = (time) => {
    return `Yesterday, ${time}`;
  };

  return (
    <div className="container-fluid vh-100 p-0" style={{ backgroundColor: "#f0f0f0", color: "black" }}>
      <div className="p-3">
        <h1 className="fw-bold fs-1">Telegram</h1>
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

export default TelegramPage;
