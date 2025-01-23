import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BrowserHistory = () => {
  const historyData = [
    {
      date: "Yesterday - Thursday, Dec 19, 2024",
      entries: [
        { time: "5:15 PM", title: "NY Times", url: "https://www.nytimes.com/" },
        { time: "11:17 AM", title: "Gaming keyboard reviews reddit", url: "https://www.reddit.com/r/buildapc/comments/17idun1/what_is_the_best_reliable_gaming_keyboard/" },
        { time: "10:00 AM", title: "Google Classroom", url: "https://classroom.google.com/u/0/c/MTQyNzEwODg5NTNa" },
      ],
    },
    {
      date: "Wednesday, Dec 18, 2024",
      entries: [
        { time: "9:51 AM", title: "beckham movie", url: "https://www.netflix.com/ua-en/title/81223488" },
        { time: "9:32 PM", title: "super bowl history", url: "https://www.nfl.com/super-bowl/history/" },
        { time: "8:02 PM", title: "Top PC games 2024 - Google search", url: "https://www.duolingo.com/course/es/en/Learn-Spanish" },
        { time: "7:12 PM", title: "Twitch", url: "https://www.twitch.tv/directory/game/Fortnite" },
      ],
    },
   
  
    
    {
      date: "Saturday, Dec 14, 2024",
      entries: [
        { time: "4:06 PM", title: "Gaming keyboard reviews reddit", url: "https://www.reddit.com/r/buildapc/comments/17idun1/what_is_the_best_reliable_gaming_keyboard_and/" },
        { time: "5:15 PM", title: "Khan Academy", url: "https://www.khanacademy.org/math/geometry" },
      ],
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
          <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
        Browser History
      </h1>

      <div
        style={{
          flexGrow: 1, 
          overflowY: "auto", 
          overflowX: "hidden", 
        }}
      >
      
        <div
          className="card"
          style={{
            borderRadius: "15px",
            border: "none",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div className="card-body">
            {historyData.map((day, index) => (
              <div key={index} className="mb-4">
                <h5 className="fw-bold" style={{ marginBottom: "15px" }}>
                  {day.date}
                </h5>
                {day.entries.map((entry, idx) => (
                  <div
                    key={idx}
                    className="d-flex justify-content-between align-items-center mb-3 p-3"
                    style={{
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      backgroundColor: "#f0f0f0", 
                    }}
                  >
                    <div>
                      <strong style={{ marginRight: "10px" }}>{entry.time}</strong>
                      {entry.title}
                    </div>
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#007bff", textDecoration: "none" }}
                    >
                      {entry.url}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserHistory;
