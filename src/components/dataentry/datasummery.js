import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Modal, Button, Table } from 'react-bootstrap';

const DayEndOverview = () => {
  const [showModal, setShowModal] = useState(false); 
  const [modalData, setModalData] = useState({
    title: '',
    categories: [],
    totalOrders: 0,
    totalAmount: 0,
  });

  const cardData = [
    { 
      title: 'Success Orders', 
      amount: '₹ 26,356.00', 
      orders: 24, 
      details: [
        { name: 'Delivery', orders: 1, amount: 374 },
        { name: 'Dine In', orders: 14, amount: 13672 },
        { name: 'Pick Up', orders: 0, amount: 0 },
        { name: 'Online', orders: 9, amount: 12310 },
      ],
    },
    { title: 'Cancelled Orders', amount: '₹ 0.00', orders: 0 },
    { title: 'Complimentary Orders', amount: '₹ 0.00', orders: 0 },
    { title: 'Sales Return Orders', amount: '₹ 90.00', orders: 1 },
    { title: 'Success Advance Orders', amount: '₹ 0.00', orders: 0 },
    { title: 'Memo Advance Orders', amount: '₹ 0.00', orders: 0 },
    { title: 'Order Payment Details', amount: '₹ 26,356.00', orders: 0 },
    { title: 'Payment Information', amount: '₹ 26,356.00', orders: 0 },
 
  ];

  const handleArrowClick = (data) => {
    setModalData({
      title: data.title,
      categories: data.details || [],
      totalOrders: data.orders,
      totalAmount: parseFloat(data.amount.replace(/[^0-9.]/g, '')) || 0,
    });
    setShowModal(true);  
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3 bg-dark text-white p-2 rounded">
                  {card.title}
                </Card.Title>
                <h5 className="mb-3">{card.amount}</h5>
                {card.orders !== null && (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>No of orders</span>
                    <span className="font-weight-bold">{card.orders}</span>
                    <FaArrowRight
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleArrowClick(card)} 
                    />
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title || 'Order Details'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData.categories.length > 0 ? (
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
          ) : (
            <p>No additional details available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DayEndOverview;
