import React from "react";
import { FaTrashAlt, FaFileInvoiceDollar, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';

function OnGoingOrder() {
  const orders = [
    {
      table: "Table-3",
      orderNumber: "0681",
      waiter: "Online Order",
      time: "01:07:22",
    },
    {
      table: "Table-2D",
      orderNumber: "0680",
      waiter: "Pravin Meshram",
      time: "01:19:07",
    },
  ];

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type and Select Order"
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type and Select Table"
          />
        </div>
        <button className="btn btn-success">Merge Order</button>
      </div>

      <div className="row">
        {orders.map((order, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card" style={{ width: "20rem" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">{order.table}</h5>
                  <div className="d-flex align-items-center">
                    <FaEdit
                      className="text-warning me-2"
                      style={{ cursor: "pointer" }}
                    />
                    <input type="checkbox" className="form-check-input" />
                  </div>
                </div>
                <p className="card-text">Order Number: {order.orderNumber}</p>
                <p className="card-text">Waiter: {order.waiter}</p>
                <p className="card-text">Before Time: {order.time}</p>
                <div className="d-flex justify-content-center mt-1 gap-0">
                  <button className="btn btn-success btn-sm">Complete</button>
                  <button className="btn btn-primary btn-sm">Split</button>
                  <button className="btn btn-danger btn-sm">
                    <FaTrashAlt />
                  </button>
                  <button className="btn btn-secondary btn-sm">
                    <FaFileInvoiceDollar />
                  </button>
                  <button className="btn btn-info btn-sm">
                    <FaFileInvoiceDollar />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnGoingOrder;
