import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  { name: "Rozella WI-FI", date: "Dec 19, 2024, 10:03 AM", map: "View on Google" },
  { name: "Dayna WI-FI", date: "Dec 18, 2024, 10:03 AM", map: "View on Google" },
  { name: "Kaylee WI-FI", date: "Dec 17, 2024, 10:03 AM", map: "View on Google" },
  { name: "Fatima WI-FI", date: "Dec 16, 2024, 10:03 AM", map: "View on Google" },
  { name: "Josianne WI-FI", date: "Dec 15, 2024, 10:03 AM", map: "View on Google" },
  { name: "Elouise WI-FI", date: "Dec 14, 2024, 10:03 AM", map: "View on Google" },
  { name: "Ariane WI-FI", date: "Dec 13, 2024, 10:03 AM", map: "View on Google" },
  { name: "Cordia WI-FI", date: "Dec 12, 2024, 10:03 AM", map: "View on Google" },
  { name: "Lara WI-FI", date: "Dec 11, 2024, 10:03 AM", map: "View on Google" },
  { name: "Tara WI-FI", date: "Dec 10, 2024, 10:03 AM", map: "View on Google" },
  { name: "Sophie WI-FI", date: "Dec 9, 2024, 10:03 AM", map: "View on Google" },
  { name: "Mia WI-FI", date: "Dec 8, 2024, 10:03 AM", map: "View on Google" },
];

function WiFi() {
  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", padding: "20px" }}>
      <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
        Block WiFi
      </h1>

      <div className="container">
    
        <div
          className="card rounded-4 shadow-sm"
          style={{
            backgroundColor: "white",
            padding: "20px",
            maxWidth: "1200px",
            margin: "auto",
            height: "calc(100vh - 100px)", 
          }}
        >
       
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              borderRadius: "8px 8px 0 0", 
              textAlign: "center",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ flex: 1, textAlign: "left" }}>Name</span>
            <span style={{ flex: 1, textAlign: "center" }}>Date</span>
            <span style={{ flex: 1, textAlign: "right" }}>Map</span>
          </div>

   
          <div
            style={{
              maxHeight: "100%",
              overflowY: "auto",
              padding: "10px",
              border: "1px solid #e0e0e0",
              borderTop: "none", 
            }}
          >
     
            {data.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between mb-3 p-3 shadow-sm"
                style={{
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #e0e0e0",
                  borderRadius: "10px",
                }}
              >
                <div style={{ flex: 2, fontWeight: "bold", textAlign: "left" }}>
                  {item.name}
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>{item.date}</div>
                <div style={{ flex: 1, textAlign: "right" }}>
                  <a href="#" style={{ textDecoration: "none", color: "blue" }}>
                    {item.map}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WiFi;
