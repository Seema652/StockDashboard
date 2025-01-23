import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GeoFencingCard = () => {
  return (
    <div className="container-fluid vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <h1 className="fw-bold mb-4" style={{ fontSize: "35px", textAlign: "left", width: "100%" }}>
        Geo Fencing
      </h1>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "120vh" }}>
        <div
          className="card border-0 shadow-lg"
          style={{ width: "100%", maxWidth: "1300px", borderRadius: "10px", marginTop: "-250px" }}
        >
          <div className="row g-0">
            <div className="col-md-3 d-flex flex-column align-items-start justify-content-start p-4">
              <div>
                <h4 className="fw-bold text-success mb-3">Avenue Fence</h4>
                <p className="text-secondary mb-1">
                  <span className="fw-bold text-dark">Status: </span>
                  <span className="text-success">Allowed</span>
                </p>
                <p className="text-secondary mb-1">
                  <span className="fw-bold text-dark">Date: </span>Dec 17, 2024
                </p>
                <p className="text-secondary">
                  <span className="fw-bold text-dark">Time: </span>10:11 AM
                </p>
                <div className="text-start text-success mt-4">
                  <span className="fw-bold">✓ Enters</span>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <iframe
                title="Geofence Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.97381132898!2d77.2637732812674!3d28.57054911303927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3975705942f%3A0xd1e623ab9c79ee2f!2sNamberdar%20estate%2C%2098-B%2C%20Navjivan%20Buddh%20Vihar%2C%20Taimoor%20Nagar%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110064!5e0!3m2!1sen!2sin!4v1734528428042!5m2!1sen!2sin"
                width="100%"
                height="450px"
                style={{ border: 0, borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoFencingCard;
