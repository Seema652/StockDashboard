import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import screen1 from "../../assets/images/screen1.png";
import screen2 from "../../assets/images/screen2.png";
import screen3 from "../../assets/images/screen3.png";

const ScreenshotGallery = () => {
  const screenshots = [{ src: screen1 }, { src: screen2 }, { src: screen3 }];

  return (
    <div
      className="container mt-4"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
  Screen Recording
      </h1>
      <div
        className="row"
        style={{
          justifyContent: "center",
        }}
      >
        {screenshots.map((screenshot, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div
              className="card shadow-lg"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "none",
                borderRadius: "12px",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <div
                className="card-img-container"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={screenshot.src}
                  alt={`Screenshot ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotGallery;
