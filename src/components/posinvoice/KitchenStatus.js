import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const KitchenStatus = () => {
  const orders = [
    {
      table: "Table: ",
      name: "Pravin Meshram",
      token: "Token: 01",
      order: "Order: #673",
      details: [
        "Betel leaf shrimp",
        "1:2",
        "Ready",
        "Accept Time: 10:47:31",
        "Ready Time: 06:00:00",
        "1X",
      ],
    },
    {
      table: "Table: Table-2D",
      name: "Pravin Meshram",
      token: "Token: 08",
      order: "Order: #680",
      details: [
        "Baked Sea Bream",
        "1:1",
        "Ready",
        "Accept Time: 11:35:48",
        "Ready Time: 06:00:00",
        "1X",
        "Salmon Barbecue",
        "1:2",
        "Ready",
        "Accept Time: 11:35:48",
        "Ready Time: 06:00:00",
        "2X",
      ],
    },
    {
      table: "Table: Table-3",
      name: "online order",
      token: "Token: 09",
      order: "Order: #681",
      details: [
        "Bangla Set Menu Rice Boarta",
        "1:2",
        "Ready",
        "Accept Time: 11:35:30",
        "Ready Time: 06:00:00",
        "1X",
      ],
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index); 
  };

  return (
    <div className="d-flex flex-wrap justify-content-start gap-3">
      {orders.map((order, index) => (
        <div
          key={index}
          className="text-white"
          style={{
            backgroundColor: "#28a745",
            borderRadius: "10px",
            width: "250px",
            padding: "15px",
            fontSize: "14px",
            transition: "all 0.3s ease",
            overflow: "hidden",
         
            height: activeCardIndex === index ? "auto" : "150px",
          }}
        >
          {/* Main Content */}
          <div className="d-flex justify-content-between">
            <p style={{ margin: "0" }}>
              <strong>{order.table}</strong>
            </p>
            <p style={{ margin: "0" }}>{order.name}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p style={{ margin: "0" }}>
              <strong>{order.token}</strong>
            </p>
            <p style={{ margin: "0" }}>
              <strong>{order.order}</strong>
            </p>
          </div>

    
          <div
            className="d-flex justify-content-center"
            onClick={() => toggleDetails(index)}
            style={{ cursor: "pointer" }}
          >
            {activeCardIndex === index ? (
              <FaCaretUp style={{ marginTop: "10px", color: "white" }} />
            ) : (
              <FaCaretDown style={{ marginTop: "10px", color: "white" }} />
            )}
          </div>

        
          {activeCardIndex === index && (
            <div
              style={{
                backgroundColor: "#f8f9fa",
                color: "#000",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "10px",
                overflow: "hidden",
              }}
            >
              {order.details.map((detail, i) => (
                <p key={i} style={{ margin: "0" }}>
                  {detail}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default KitchenStatus;
