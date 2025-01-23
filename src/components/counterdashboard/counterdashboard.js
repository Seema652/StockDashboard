import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterDashboard = () => {
  const tableData = [
    {
      tableNo: 54,
      orderNumber: "579",
      orderTime: "16:35:26",
      remainingTime: "1:19",
      status: "Ready",
    },
    {
      tableNo: 0,
      orderNumber: "570 (Online Order)",
      orderTime: "00:36:26",
      remainingTime: "Time Over",
      status: "Processing",
    },
    {
      tableNo: 0,
      orderNumber: "573 (Online Order)",
      orderTime: "06:44:49",
      remainingTime: "Time Over",
      status: "Processing",
    },
    {
      tableNo: 0,
      orderNumber: "575 (Online Order)",
      orderTime: "10:33:51",
      remainingTime: "Time Over",
      status: "Ready",
    },
    {
      tableNo: 0,
      orderNumber: "576",
      orderTime: "12:32:07",
      remainingTime: "Time Over",
      status: "Ready",
    },
  ];

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Order Time Countdown Board</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ backgroundColor: "black", color: "white" }}>
              Table No
            </th>
            <th style={{ backgroundColor: "black", color: "white" }}>
              Order Number
            </th>
            <th style={{ backgroundColor: "black", color: "white" }}>
              Order Time
            </th>
            <th style={{ backgroundColor: "black", color: "white" }}>
              Remaining Time
            </th>
            <th style={{ backgroundColor: "black", color: "white" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.tableNo}</td>
              <td>{row.orderNumber}</td>
              <td>{row.orderTime}</td>
              <td>{row.remainingTime}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CounterDashboard;
