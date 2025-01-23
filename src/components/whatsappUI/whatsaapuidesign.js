import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const WhatsAppClone = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const contacts = [
    { name: "Alex Wainwright", lastMsg: "Okay, joining in a bit", time: "2:16 PM", date: "2024-12-16" },
    { name: "Klaus Radcliffe", lastMsg: "You got this, bro! Keep it up!", time: "1:19 PM", date: "2024-12-15" },
    { name: "Frank Buckley", lastMsg: "Ok, text me when you...", time: "2:04 PM", date: "2024-12-16" },
    { name: "Tommy Blackwood", lastMsg: "Can't wait!", time: "12:16 PM", date: "2024-12-15" },
    { name: "Chris Monet", lastMsg: "I have a small favour...", time: "12:14 PM", date: "2024-12-15" },
    { name: "Momo Miazuki", lastMsg: "That's fine, thanks", time: "12:08 PM", date: "2024-12-15" },
  ];

  const chats = [
    [
      { from: "Alex Wainwright", text: "Have u checked out the new COD update?", time: "2:05 PM", date: "2024-12-16" },
      { from: "You", text: "Not yet. Is it any good?", time: "2:06 PM", date: "2024-12-16" },
      { from: "Alex Wainwright", text: "It's lit! New maps and weapons", time: "2:06 PM", date: "2024-12-16" },
      { from: "You", text: "Sweet! Downloading now", time: "2:07 PM", date: "2024-12-16" },
      { from: "Alex Wainwright", text: "Great, let's play once ur done", time: "2:09 PM", date: "2024-12-16" },
      { from: "You", text: "Okay, joining in a bit", time: "2:16 PM", date: "2024-12-16" },
    ],
    [
      { from: "Klaus Radcliffe", text: "Good job on that last project!", time: "5:00 PM", date: "2024-12-16" },
      { from: "You", text: "Thanks! We did great!", time: "5:10 PM", date: "2024-12-15" },
      { from: "Klaus Radcliffe", text: "Hope we can do it again soon", time: "5:15 PM", date: "2024-12-15" },
    ],
  ];

  const getFormattedTime = (time) => {
    return `Yesterday, ${time}`;
  };

  return (
    <div className="container-fluid vh-100 p-0" style={{ backgroundColor: "#f0f0f0", color: "black" }}>
      <div className="p-3">
        <h1 className="fw-bold fs-1">WhatsApp</h1>
      </div>
      <div className="row h-100" style={{ maxWidth: "1250px", margin: "0 auto" }}>
        <div className="col-12 bg-white" style={{
          borderRadius: "25px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          margin: "15px"
        }}>
          <div className="row">
            <div className="col-md-4 col-lg-4 p-0">
              <div className="p-3 bg-dark border-bottom d-flex align-items-center justify-content-around">
                <i className="bi bi-chat-left-text fs-4 text-white"></i>
                <i className="bi bi-person-fill fs-4 text-white"></i>
                <i className="bi bi-telephone-fill fs-4 text-white"></i>
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
                      borderRadius: "25px"
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className={`rounded-circle d-flex justify-content-center align-items-center me-3 fw-bold ${
                          selectedChat === index ? "bg-white text-dark" : "bg-black text-white"
                        }`}
                        style={{ width: "40px", height: "40px" }}
                      >
                        {contact.name.charAt(0)}
                      </div>
                      <div className="w-100">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="d-flex flex-column">
                            <strong>{contact.name}</strong>
                            <div className={`small ${selectedChat === index ? 'text-white' : 'text-muted'}`} style={{ marginTop: "2px" }}>
                              {contact.lastMsg}
                            </div>
                          </div>
                          <div className="text-end">
                            <div className={`small ${selectedChat === index ? 'text-white' : 'text-muted'}`} style={{ lineHeight: "1.1" }}>
                              Yesterday
                            </div>
                            <div className={`small ${selectedChat === index ? 'text-white' : 'text-muted'}`} style={{ lineHeight: "1.1" }}>
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
            <div className="col-md-8 col-lg-8 d-flex flex-column" style={{
              borderLeft: "1px solid #dee2e6"
            }}>
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
                            {msg.from.charAt(0)}
                          </div>
                        )}
                        <div
                          className={`p-2 rounded-3 ${
                            msg.from === "You" ? "bg-primary text-white" : "bg-light border"
                          }`}
                          style={{ maxWidth: "100%" }}
                        >
                          <div className="text-truncate">{msg.text}</div>
                          <div className="text-end text-muted small mt-1">
                            {getFormattedTime(msg.time)}
                          </div>
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

export default WhatsAppClone;
