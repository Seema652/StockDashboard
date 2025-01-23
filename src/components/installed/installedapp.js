import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const InstalledApps = () => {
  const allApps = [
    { name: "CameraApp", icon: "bi-camera" },
    { name: "CameraView", icon: "bi-camera-video" },
    { name: "DataRecorder", icon: "bi-archive" },
    { name: "Facebook", icon: "bi-facebook" },
    { name: "FamiSafe", icon: "bi-shield-lock" },
    { name: "Google Play Services for AR", icon: "bi-google" },
    { name: "HMA VPN", icon: "bi-shield-check" },
    { name: "Instagram", icon: "bi-instagram" },
    { name: "LINE", icon: "bi-chat" },
    { name: "Messenger", icon: "bi-chat-dots" },
    { name: "Netflix", icon: "bi-film" },
    { name: "Pinterest", icon: "bi-pinterest" },
    { name: "Pixgram", icon: "bi-images" },
    { name: "QR Code Reader", icon: "bi-qr-code" },
    { name: "Skype", icon: "bi-telephone" },
    { name: "Snapchat", icon: "bi-chat-left-dots" },
    { name: "Spotify", icon: "bi-music-note" },
    { name: "Story Video Maker", icon: "bi-file-earmark-play" },
  ];

  const [activeTab, setActiveTab] = useState("Non-system apps");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
        Installed Apps
      </h1>

      <div
        className="card shadow-sm"
        style={{
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#ffffff",
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          margin: "0 auto",
        }}
      >
        <div className="d-flex justify-content-start flex-wrap mb-3">
          <div
            onClick={() => switchTab("Non-system apps")}
            style={{
              padding: "10px 20px",
              fontWeight: "bold",
              borderBottom:
                activeTab === "Non-system apps"
                  ? "2px solid rgb(0, 0, 0)"
                  : "none",
              color: activeTab === "Non-system apps" ? "#007bff" : "#6c757d",
              cursor: "pointer",
            }}
          >
            Non-system apps
          </div>
          <div
            onClick={() => switchTab("All apps")}
            style={{
              padding: "10px 20px",
              fontWeight: "bold",
              borderBottom:
                activeTab === "All apps" ? "2px solid rgb(0, 0, 0)" : "none",
              color: activeTab === "All apps" ? "#007bff" : "#6c757d",
              cursor: "pointer",
            }}
          >
            All apps
          </div>
        </div>

        {/* App List */}
        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            padding: "10px",
            backgroundColor: "#f7f7f7",
          }}
        >
          <ul className="list-group">
            {allApps.map((app, index) => (
              <li
                key={index}
                className="list-group-item d-flex align-items-center"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #dcdcdc",
                  marginBottom: "5px",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#000000", 
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <i className={app.icon}></i>
                </div>
                {app.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
