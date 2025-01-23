import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";
import video4 from "../../assets/videos/video4.mp4";

const VideoGellery = () => {
  const videos = [
    { src: video1, timestamp: "Dec 20, 2024, 7:45 PM" },
    { src: video2, timestamp: "Dec 20, 2024, 1:58 PM" },
    { src: video3, timestamp: "Dec 20, 2024, 2:22 PM" },
    { src: video4, timestamp: "Dec 20, 2024, 11:47 AM" },
  ];

  return (
    <div className="container mt-4">
  <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
  Video
      </h1>
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div
              className="card h-100"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxSizing: "border-box",
                backgroundColor: "transparent",
                outline: "0px",
                border: "0px",
                margin: "0px",
                borderRadius: "0px",
                padding: "0px",
                cursor: "pointer",
                userSelect: "none",
                verticalAlign: "middle",
                appearance: "none",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="card-img-container" style={{ width: "100%" }}>
                <video
                  src={video.src}
                  alt={`Video ${index + 1}`}
                  style={{
                    height: "249px",
                    objectFit: "contain",
                    width: "100%",
                    display: "flex",
                    margin: "0px auto",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxSizing: "border-box",
                    webkitTapHighlightColor: "transparent",
                    backgroundColor: "transparent",
                    outline: "0px",
                    border: "0px",
                    margin: "0px",
                    borderRadius: "0px",
                    padding: "0px",
                    cursor: "pointer",
                    userSelect: "none",
                    verticalAlign: "middle",
                    appearance: "none",
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    textAlign: "inherit",
                  }}
                  controls
                />
              </div>
              <div className="card-body text-center">
                <p className="card-text">{video.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGellery;
