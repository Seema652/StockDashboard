import React, { useState } from "react";
import NewOrder from "./NewOrder";
import OnGoingOrder from "./OnGoingOrder";
import KitchenStatus from "./KitchenStatus";
import OnlineOrder from "./OnlineOrder";
import TodayOrder from "./TodayOrder";

function POSApp() {
  const [activeTab, setActiveTab] = useState("New Order");

  const renderTab = () => {
    switch (activeTab) {
      case "New Order":
        return <NewOrder />;
      case "On Going Order":
        return <OnGoingOrder />;
      case "Kitchen Status":
        return <KitchenStatus />;
      case "Online Order":
        return <OnlineOrder />;
      case "Today Order":
        return <TodayOrder />;
      default:
        return <NewOrder />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="col-md-12">
          <div className="d-flex gap-3 my-3">
            <button
              className="btn btn-success"
              onClick={() => setActiveTab("New Order")}
            >
              New Order
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setActiveTab("On Going Order")}
            >
              On Going Order
            </button>
            <button
              className="btn btn-info"
              onClick={() => setActiveTab("Kitchen Status")}
            >
              Kitchen Status
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setActiveTab("Online Order")}
            >
              Online Order
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setActiveTab("Today Order")}
            >
              Today Order
            </button>
          </div>
    
          <div>{renderTab()}</div>
        </div>
      </div>
    </div>
  );
}

export default POSApp;
