import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import watermark from "../../../assets/watermark.jpg";
import logo from "../../../assets/logo.png";
import Sidebar from "./sidebarmak";

const Watermark = () => {
  const [size, setSize] = useState(30);
  const [transparency, setTransparency] = useState(70);
  const [position, setPosition] = useState("bottom-left");

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleTransparencyChange = (e) => setTransparency(e.target.value);
  const handlePositionChange = (pos) => setPosition(pos);

  const handleUpload = () => {
    document.getElementById("fileInput").click();
  };

  const handleDelete = () => {
    alert("Are you sure you want to delete?");
  };

  const getPositionStyle = () => ({
    width: `${size}%`,
    opacity: `${(100 - transparency) / 100}`,
    bottom: position.includes("bottom") ? "10px" : "auto",
    top: position.includes("top") ? "10px" : "auto",
    left: position.includes("left") ? "10px" : "auto",
    right: position.includes("right") ? "10px" : "auto",
    ...(position === "center" && {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }),
  });

  return (
    <div className="d-flex position-fixed w-100" style={{ height: "100vh" }}>
      <Sidebar />

      <div className="flex-grow-1 d-flex justify-content-center align-items-center" style={{ marginLeft: "60px" }}>
        <div className="col-12 col-md-8 shadow-lg p-4 rounded">
          <div className="align-items-left bg-black text-white p-2 mt-2 rounded">
            <h3 className="text-left mb-2 p-2">Watermark Settings</h3>
          </div>

          <div className="d-flex flex-column flex-md-row">
            <div className="flex-grow-1 position-relative mt-3" style={{ maxWidth: "100%", height: "40vh" }}>
              <img
                src={watermark}
                alt="Background"
                className="img-fluid"
                style={{ height: "40vh", width: "80%", objectFit: "cover" }}
              />
              <div className="watermark position-absolute" style={getPositionStyle()}>
                <img
                  src={logo}
                  alt="Watermark"
                  className="img-fluid"
                  style={{ maxWidth: "50%", maxHeight: "50%" }} // Smaller watermark
                />
              </div>
            </div>

            <div className="ms-md-4 mt-4 mt-md-0" style={{ maxWidth: "100%" }}>
              <div className="p-4">
                <div className="mb-4">
                  <label className="form-label d-block mb-2">Position</label>
                  <div className="d-grid gap-2">
                    <div className="d-flex justify-content-center">
                      <button className={`btn btn-outline-primary me-2 ${position === "top-left" ? "active" : ""}`} onClick={() => handlePositionChange("top-left")}>↖</button>
                      <button className={`btn btn-outline-primary me-2 ${position === "top-center" ? "active" : ""}`} onClick={() => handlePositionChange("top-center")}>↑</button>
                      <button className={`btn btn-outline-primary ${position === "top-right" ? "active" : ""}`} onClick={() => handlePositionChange("top-right")}>↗</button>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className={`btn btn-outline-primary me-2 ${position === "center-left" ? "active" : ""}`} onClick={() => handlePositionChange("center-left")}>←</button>
                      <button className={`btn btn-outline-primary me-2 ${position === "center" ? "active" : ""}`} onClick={() => handlePositionChange("center")}>⬤</button>
                      <button className={`btn btn-outline-primary ${position === "center-right" ? "active" : ""}`} onClick={() => handlePositionChange("center-right")}>→</button>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className={`btn btn-outline-primary me-2 ${position === "bottom-left" ? "active" : ""}`} onClick={() => handlePositionChange("bottom-left")}>↙</button>
                      <button className={`btn btn-outline-primary me-2 ${position === "bottom-center" ? "active" : ""}`} onClick={() => handlePositionChange("bottom-center")}>↓</button>
                      <button className={`btn btn-outline-primary ${position === "bottom-right" ? "active" : ""}`} onClick={() => handlePositionChange("bottom-right")}>↘</button>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="size" className="form-label">
                    Size ({size}%)
                  </label>
                  <input
                    type="range"
                    id="size"
                    className="form-range"
                    min="10"
                    max="100"
                    value={size}
                    onChange={handleSizeChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="transparency" className="form-label">
                    Transparency ({transparency}%)
                  </label>
                  <input
                    type="range"
                    id="transparency"
                    className="form-range"
                    min="0"
                    max="100"
                    value={transparency}
                    onChange={handleTransparencyChange}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <button className="btn btn-secondary me-2 mb-2" onClick={handleUpload}>Upload</button>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <button className="btn btn-danger me-2 mb-2" onClick={handleDelete}>Delete</button>
                  </div>
                  <button className="btn btn-primary ms-3 mb-2" style={{ maxWidth: "100%" }}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watermark;
