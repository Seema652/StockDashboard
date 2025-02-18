import { useState, useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

import {
  FaFolderOpen,
  FaRocket,
  FaPaperPlane,
  FaMedal,
  FaExclamation,
  FaCalendarCheck,
  FaPlus,
} from "react-icons/fa";

import { FcCalendar, FcShare, FcApproval } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
ChartJS.register(PointElement, CategoryScale, Tooltip, Legend);

const Dashboard = () => {
  const [lineWidth, setLineWidth] = useState("0%");

  useEffect(() => {
    setLineWidth("100%");
  }, []);

  const data = {
    labels: [
      "Dec 26",
      "Dec 27",
      "Dec 28",
      "Dec 29",
      "Dec 30",
      "Dec 31",
      "Jan 1",
      "Jan 2",
      "Jan 3",
      "Jan 4",
      "Jan 5",
      "Jan 6",
      "Jan 7",
      "Jan 8",
      "Jan 9",
      "Jan 10",
      "Jan 11",
      "Jan 12",
      "Jan 13",
      "Jan 14",
      "Jan 15",
      "Jan 16",
      "Jan 17",
      "Jan 18",
      "Jan 19",
      "Jan 20",
      "Jan 21",
      "Jan 22",
    ],

    datasets: [
      {
        label: "Post succeed",
        data: Array(28)
          .fill(0)
          .map((_, i) => ({ x: i, y: 0 })),
        borderColor: "green",
        backgroundColor: "green",
        pointBackgroundColor: "green",
        pointRadius: 6,
      },
      {
        label: "Post failed",
        data: Array(28)
          .fill(0)
          .map((_, i) => ({ x: i, y: 0 })),
        borderColor: "gray",
        backgroundColor: "gray",
        pointBackgroundColor: "gray",
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      x: {
        type: "category",
        labels: data.labels,
        ticks: {
          callback: function (val, index) {
            return data.labels[index];
          },
          autoSkip: false,
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 0,
      },
    },
  };

  const menuItems = [
    { icon: <FcShare size={40} />, label: "Account man" },
    { icon: <FaRocket size={40} />, label: "Bulk post" },
    { icon: <FaFolderOpen size={40} />, label: "File manager" },
    { icon: <FaPaperPlane size={40} />, label: "Composer" },
    { icon: <FcCalendar size={40} />, label: "Scheduler" },
  ];

  const statsCards = [
    {
      icon: <FcApproval size={30} />,
      name: "Success",
      count: 0,
      date: "25-12-2024 - 21-01-2025",
      color: "green",
    },
    {
      icon: <FaExclamation size={30} />,
      name: "Failed",
      count: 0,
      date: "25-12-2024 - 21-01-2025",
      color: "red",
    },
    {
      icon: <FaCalendarCheck size={30} />,
      name: "Total",
      count: 0,
      date: "25-12-2024 - 21-01-2025",
      color: "blue",
    },
  ];

  return (
    <div className="container my-4">
    <div className="row mb-4">
      <div className="d-flex align-items-center">
        <div
          className="card bg-dark text-white p-4 me-4 flex-shrink-0 mt-4"
          style={{ width: "100%", maxWidth: "450px", height: "200px" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>Welcome 👋 admindemo</h5>
              <p style={{ color: "#ffffff" }}>Expire date: Unlimited</p>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#ffffff",
                  margin: "5px 0",
                }}
              >
                Free & Trial
              </p>
            </div>
            <FaMedal size={110} className="text-warning" />
          </div>
          <button
            className="btn"
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "bold",
              marginTop: "15px",
              margin: "5px 0",
              width: "30%",
              height: "30%",
            }}
          >
            View Plan
          </button>
        </div>
  
        <div
          className="overflow-auto d-flex align-items-center bg-white shadow mt-0 p-4 rounded"
          style={{
            whiteSpace: "nowrap",
            width: "calc(100% - 470px)",
            height: "200px",
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-3 bg-light rounded me-3 flex-shrink-0"
              style={{ width: "170px", height: "120px" }}
            >
              <div className="text-primary fs-3">{item.icon}</div>
              <p
                className="mt-2 mb-0"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  
    <div className="card p-2 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="d-flex align-items-center" style={{ fontSize: "20px" }}>
          <FaPaperPlane size={20} className="me-2" /> Report posts
        </h4>
        <div className="d-flex align-items-center">
          <select className="form-select me-3" style={{ width: "150px" }}>
            <option>All Report</option>
            <option>Facebook</option>
            <option>Instagram</option>
          </select>
  
          <div className="daterange dashed radius py-2 text-gray-100">
            <button
              type="button"
              id="daterange"
              className="bg-white px-4 py-2 border"
            >
              <FcCalendar className="me-2" />
              <span>January 16, 2025 - January 22, 2025</span>
              <input
                type="hidden"
                name="daterange"
                value="2025-01-16,2025-01-22"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  
    <div className="row">
      {statsCards.map((item, index) => (
        <div className="col-12 col-md-4 mb-3" key={index}>
          <div className="card p-3" style={{ height: "180px" }}>
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "8px",
                  backgroundColor: `rgba(${
                    item.color === "green"
                      ? "0, 128, 0"
                      : item.color === "red"
                      ? "255, 0, 0"
                      : "0, 0, 255"
                  }, 0.2)`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <div className="ms-3">
                <h4
                  className="mb-0"
                  style={{ color: item.color, fontSize: "30px" }}
                >
                  {item.count}
                </h4>
                <h6 className="mb-1">{item.name}</h6>
              </div>
            </div>
            <small className="text-muted mt-2">{item.date}</small>
            <div
              style={{
                height: "2px",
                backgroundColor: item.color,
                width: lineWidth,
                transition: "width 1s ease-in-out",
                marginTop: "30px",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  
    <div className="card shadow rounded p-4 w-100">
      <div className="card bg-dark text-white rounded p-3">
        <h5 className="card-title">Reported Post By Status</h5>
      </div>
      <Scatter data={data} options={options} />
    </div>
  
    <div className="row d-flex justify-content-center mt-4">
      <div className="col-md-6">
        <div
          className="card"
          style={{ minHeight: "350px", height: "100%" }}
        >
          <div className="card-body">
            <div className="card bg-dark text-white rounded p-3">
              <h5 className="card-title">Report post by type</h5>
            </div>
            <div className="text-center">
              <div
                className="position-relative"
                style={{ height: "200px", marginBottom: "20px" }}
              >
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    border: "10px solid #e9ecef",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
  
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "10px solid #f8f9fa",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              </div>
  
              <div className="d-flex justify-content-center mb-3">
                <span className="d-flex align-items-center me-3">
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "green",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  Media
                </span>
                <span className="d-flex align-items-center me-3">
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "pink",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  Link
                </span>
                <span className="d-flex align-items-center">
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "blue",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  Text
                </span>
              </div>
            </div>
  
            <div
              className="border rounded shadow-sm p-4 text-center bg-white"
              style={{ maxWidth: "800px", margin: "auto" }}
            >
              <div className="row fw-bold text-secondary">
                <div className="col text-center">Media</div>
                <div className="col text-center">Link</div>
                <div className="col text-center">Text</div>
              </div>
              <hr />
  
              <div className="row align-items-center fw-bold">
                <div className="col text-center">Total post</div>
                <div className="col text-center text-dark">0</div>
                <div className="col text-center text-dark">0</div>
                <div className="col text-center text-dark">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-md-6">
        <div
          className="card"
          style={{ minHeight: "350px", height: "100%" }}
        >
          <div className="card-body">
            <div className="bg-dark text-white rounded p-3">
              <h5 className="card-title">Recent publications</h5>
            </div>
            <div className="text-center mt-4">
              <i
                className="fa-solid fa-box"
                style={{ fontSize: "80px", margin: "20px 0" }}
              ></i>
              <p className="mt-3">No recent publications</p>
              <button className="btn btn-primary">+ Create post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
