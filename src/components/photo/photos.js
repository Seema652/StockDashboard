import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import firstImage from "../../assets/images/firstimg.png";
import secondImage from "../../assets/images/secondimg.png";
import thirdImage from "../../assets/images/thirdimg.png";
import fourthImage from "../../assets/images/fourtimg.png";

const PhotoGallery = () => {
  const photos = [
    { src: firstImage, timestamp: "Dec 20, 2024, 7:45 PM" },
    { src: secondImage, timestamp: "Dec 20, 2024, 1:58 PM" },
    { src: thirdImage, timestamp: "Dec 20, 2024, 2:22 PM" },
    { src: fourthImage, timestamp: "Dec 20, 2024, 11:47 AM" },
  ];

  return (
    <div className="container mt-4">
     <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
     Photo
      </h1>
      <div className="row">
        {photos.map((photo, index) => (
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
                <img
                  src={photo.src}
                  alt={`Photo ${index + 1}`}
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
                />
              </div>
              <div className="card-body text-center">
                <p className="card-text">{photo.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
