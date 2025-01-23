import React from "react";
import { Button } from "antd"; 
import { SettingOutlined } from "@ant-design/icons"; 
import GaugeChart from "./GaugeChart";

const Petpooja = () => {
  const handleCustomerWise = () => {
    console.log("Customer Wise button clicked");

  };

  const handleFeedbackWise = () => {
    console.log("Feedback Wise button clicked");
   
  };

  return (
    <div className="container mt-4">
        
      <div
        className="feedback-buttons"
        style={{ marginBottom: "20px", display: "flex", justifyContent: "flex-start" }}
      >
        <Button
          onClick={handleCustomerWise}
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          Customer Wise <SettingOutlined style={{ marginLeft: "5px" }} />
        </Button>
        <Button
          onClick={handleFeedbackWise}
          style={{ display: "flex", alignItems: "center" }}
        >
          Feedback Wise <SettingOutlined style={{ marginLeft: "5px" }} />
        </Button>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Customer Name"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Customer Phone"
          />
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option value="all">All</option>
            <option value="dine-in">Dine-In</option>
            <option value="takeaway">Takeaway</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        <div className="col-md-2">
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-2">
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-12">
          <button className="btn btn-success me-2">Search</button>
          <button className="btn btn-secondary">Show All</button>
        </div>
      </div>
      <GaugeChart/>
    </div>
  );
};

export default Petpooja;
