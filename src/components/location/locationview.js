import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    latitude: "40.732425",
    longitude: "-73.979958",
    accuracy: "1.46134 m",
    address:
      "New York, Manhattan, New York, United States, New York County, 1, 10009, First Avenue Loop, New York, NY",
    locationTime: "Sep 5, 2024 10:11 AM",
  },
  {
    latitude: "41.9477",
    longitude: "-87.6640",
    accuracy: "2.91817 m",
    address:
      "Chicago, Chicago, United States, Cook County, Lake View Township, 60613, North Southport Avenue, Illinois, IL, Lake View",
    locationTime: "Feb 20, 2024 4:57 PM",
  },
  {
    latitude: "41.9469",
    longitude: "-87.6795",
    accuracy: "3.25989 m",
    address:
      "Chicago, Chicago, United States, Cook County, 2018, Lake View Township, 60618, West Addison Street, Illinois, IL, North Center",
    locationTime: "Feb 20, 2024 10:25 AM",
  },
  {
    latitude: "41.9280",
    longitude: "-87.6324",
    accuracy: "1.48573 m",
    address:
      "Chicago, Chicago, United States, Cook County, Lake View Township, 60614, North Jean Baptiste Point DuSable Lake Shore Drive, Illinois, IL, Lincoln Park",
    locationTime: "Feb 19, 2024 6:02 PM",
  },
  {
    latitude: "41.8846",
    longitude: "-87.6246",
    accuracy: "1.51972 m",
    address:
      "Chicago, Chicago, United States, Cook County, 60695, Randolph Street Bikeway, Illinois, IL, Loop",
    locationTime: "Feb 19, 2024 5:46 PM",
  },
  {
    latitude: "41.8826",
    longitude: "-87.6226",
    accuracy: "1.70585 m",
    address:
      "Chicago, Chicago, United States, Cook County, 60603, Extrusion Plaza, Illinois, IL, Loop",
    locationTime: "Feb 17, 2024 2:34 AM",
  },
  {
    latitude: "41.8917",
    longitude: "-87.6086",
    accuracy: "3.97952 m",
    address:
      "Chicago, The Crystal Gardens, Chicago, United States, Cook County, 700, 60611, East Grand Avenue",
    locationTime: "Feb 12, 2024 8:12 AM",
  },
];

const App = () => {
  const [view, setView] = useState("list");

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px" }}>
      <h1 className="fw-bold mb-4" style={{ fontSize: "35px", textAlign: "left", width: "100%" }}>
        GPS Location
      </h1>
      <div className="d-flex justify-content-center mb-4" style={{ gap: "20px" }}>
        <button
          onClick={() => setView("list")}
          className={`btn ${view === "list" ? "fw-bold text-primary" : "text-muted"} px-4`}
          style={{ borderBottom: view === "list" ? "2px solid blue" : "none" }}
        >
          LIST VIEW
        </button>
        <button
          onClick={() => setView("map")}
          className={`btn ${view === "map" ? "fw-bold text-primary" : "text-muted"} px-4`}
          style={{ borderBottom: view === "map" ? "2px solid blue" : "none" }}
        >
          MAP VIEW
        </button>
      </div>
      <div
        className="container bg-white p-4"
        style={{
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {view === "list" ? (
          <div className="table-responsive">
            <table className="table table-bordered align-middle text-center">
              <thead className="thead-dark">
                <tr>
                  <th className="bg-dark text-light">Latitude</th>
                  <th className="bg-dark text-light">Longitude</th>
                  <th className="bg-dark text-light">Accuracy</th>
                  <th className="bg-dark text-light">Map</th>
                  <th className="bg-dark text-light" style={{ width: "30%" }}>
                    Address
                  </th>
                  <th className="bg-dark text-light">Location Time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.latitude}</td>
                    <td>{row.longitude}</td>
                    <td>{row.accuracy}</td>
                    <td>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${row.latitude},${row.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        View on Google
                      </a>
                    </td>
                    <td style={{ whiteSpace: "normal", wordWrap: "break-word" }}>{row.address}</td>
                    <td>
                      <div
                        style={{
                          maxHeight: "50px",
                          overflowY: "scroll",
                          textAlign: "center",
                        }}
                      >
                        {row.locationTime}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.97381132898!2d77.2637732812674!3d28.57054911303927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3975705942f%3A0xd1e623ab9c79ee2f!2sNamberdar%20estate%2C%2098-B%2C%20Navjivan%20Buddh%20Vihar%2C%20Taimoor%20Nagar%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110064!5e0!3m2!1sen!2sin!4v1734528428042!5m2!1sen!2sin"
              width={1500}
              height={500}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
