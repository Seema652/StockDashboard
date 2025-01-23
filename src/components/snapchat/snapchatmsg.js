import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SnapchatPage = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const contacts = [
    { name: "daisy.star_gazer", lastMsg: "Will do, don’t eat everything...", time: "2:32 PM" },
    { name: "sarah_dreams", lastMsg: "I will", time: "2:27 PM" },
    { name: "Frank Buckley", lastMsg: "Appreciate it", time: "2:20 PM" },
  ];
  

  const chats = [
    [
      { from: "daisy.star_gazer", text: "Snapchat does not implement the ability to receive and save images", time: "2:17 PM", date: "Yesterday" },
      { from: "daisy.star_gazer", text: "Pizza night! Who's joining?", time: "2:17 PM", date: "Yesterday" },
      { from: "You", text: "Save me a slice", time: "2:18 PM", date: "Yesterday" },
      { from: "daisy.star_gazer", text: "Sure thing! When you're coming?", time: "2:19 PM", date: "Yesterday" },
      { from: "You", text: "Dunno, maybe 7", time: "2:21 PM", date: "Yesterday" },
      { from: "daisy.star_gazer", text: "Cool, bring some soda", time: "2:27 PM", date: "Yesterday" },
    ],
    [
      { from: "You", text: "Will do, don’t eat everything before I come", time: "2:32 PM", date: "Yesterday" },
    ],
    [
      { from: "sarah_dreams", text: "I will", time: "2:27 PM", date: "Yesterday" },
    ],
  ];
  

  const getFormattedTime = (time) => {
    return `Yesterday, ${time}`;
  };

  return (
    <div className="container-fluid vh-100 p-0" style={{ backgroundColor: "#f0f0f0", color: "black" }}>
      <div className="p-3">
        <h1 className="fw-bold fs-1">Snapchat</h1>
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

export default SnapchatPage;
