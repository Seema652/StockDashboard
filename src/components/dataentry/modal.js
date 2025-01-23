import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderDetailsModal = ({ showModal, handleClose, modalData }) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalData.title || "Order Details"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered>
          <thead>
            <tr>
              <th>Category</th>
              <th>Number of Orders</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {modalData.categories.map((category, index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td>{category.orders}</td>
                <td>{category.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>{modalData.totalOrders}</th>
              <th>{modalData.totalAmount.toFixed(2)}</th>
            </tr>
          </tfoot>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const OrderManagement = () => {
  const [modalData, setModalData] = useState({
    title: "Success Orders",
    categories: [
      { name: "Delivery", orders: 1, amount: 374 },
      { name: "Dine In", orders: 14, amount: 13672 },
      { name: "Pick Up", orders: 0, amount: 0 },
      { name: "Online", orders: 9, amount: 12310 },
    ],
    totalOrders: 24,
    totalAmount: 26356,
  });

  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h1>Order Management Dashboard</h1>
      <Button variant="primary" onClick={handleOpen}>
        View Order Details
      </Button>

      <OrderDetailsModal
        showModal={showModal}
        handleClose={handleClose}
        modalData={modalData}
      />
    </div>
  );
};

export default OrderManagement;
