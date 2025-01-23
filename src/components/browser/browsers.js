import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BrowserBookMark = () => {
  const bookmarks = [
    { name: "IMDb", url: "https://www.imdb.com" },
    { name: "Google Translate", url: "https://translate.google.com" },
    { name: "NASA's Space Place", url: "https://spaceplace.nasa.gov" },
    { name: "Cheat Code Central", url: "https://www.cheatcc.com" },
    { name: "Cool Math", url: "https://www.coolmath.com" },
    { name: "TedEd", url: "https://ed.ted.com" },
    { name: "Codecademy", url: "https://www.codecademy.com" },
    { name: "X. It's what's happening / X", url: "https://store.steampowered.com/bundle/10403/All_Games" },
  ];

  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", padding: "20px" }}>
      <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
        Browser Bookmarks
      </h1>
      <div
        className="card mx-auto shadow"
        style={{
          maxWidth: "90%",
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        {bookmarks.map((bookmark, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-3 p-3"
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              whiteSpace: "nowrap", 
            }}
          >
            <strong
              className="text-md-left"
              style={{
                flex: 1,
                marginRight: "20px", 
              }}
            >
              {bookmark.name}
            </strong>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "none",
                flex: 1,
                textAlign: "left",
                whiteSpace: "nowrap", 
                overflow: "hidden",
                textOverflow: "ellipsis", 
              }}
            >
              {bookmark.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowserBookMark;
