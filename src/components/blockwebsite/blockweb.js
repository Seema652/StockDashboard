import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlockWebsites = () => {
  const [websites, setWebsites] = useState([
    "pornhub.com",
    "tinder.com",
    "onlyfans.com",
    "4chan.org",
    "chatroulette.com",
  ]);

  const [newWebsite, setNewWebsite] = useState("");

  const addWebsite = () => {
    if (newWebsite.trim() !== "") {
      setWebsites([...websites, newWebsite]);
      setNewWebsite("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addWebsite();
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
        Block Website
      </h1>

      <div
        className="card shadow-sm"
        style={{
          maxWidth: "1300px",
          width: "100%",
          padding: "20px",
          borderRadius: "10px",
          margin: "0 auto",
        }}
      >
        <h2 className="text-left mb-4">Add Website</h2>

        <div className="mb-3">
          <label htmlFor="websiteInput" className="form-label">
            Enter website address:
          </label>
          <input
            type="text"
            id="websiteInput"
            className="form-control"
            placeholder="http(s)://"
            value={newWebsite}
            onChange={(e) => setNewWebsite(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              fontSize: "14px",
              width: "50%",
            }}
          />
        </div>

        <div
          style={{
            maxHeight: "500px",
            overflowY: "auto",
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            padding: "10px",
            marginTop: "20px",
          }}
        >
          <ul className="list-group">
            {websites.map((website, index) => (
              <li
                key={index}
                className="list-group-item"
                style={{
                  backgroundColor: "#f1f8f4",
                  border: "1px solid #dce2e6",
                  marginBottom: "5px",
                }}
              >
                {website}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlockWebsites;
