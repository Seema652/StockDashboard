import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderTable = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    orderNo: "",
    paymentType: "",
    tableNo: "",
    customerName: "",
    mobile: "",
    orderStatus: "",
    onlinePartner: "",
    sortBy: "",
    sortOrder: "",
    total: "",
  });

  const orders = [
    {
      orderNo: "2248",
      orderType: "Dine In (D)",
      customerPhone: "",
      customerName: "Other [Paytm]",
      paymentType: "Other",
      myAmount: "92.98",
      tax: "25.62",
      discount: "(0.00)",
      grandTotal: "518.00",
      created: "2023-09-18 16:23:24",
    },
    {
      orderNo: "2247",
      orderType: "Dine In (Z)",
      customerPhone: "",
      customerName: "",
      paymentType: "Cash",
      myAmount: "349.53",
      tax: "17.41",
      discount: "(0.00)",
      grandTotal: "367.00",
      created: "2023-09-18 16:10:34",
    },
    {
      orderNo: "2246",
      orderType: "Pick Up",
      customerPhone: "",
      customerName: "",
      paymentType: "Cash",
      myAmount: "133.33",
      tax: "6.66",
      discount: "(0.00)",
      grandTotal: "140.00",
      created: "2023-09-18 16:14:15",
    },
    {
      orderNo: "2245",
      orderType: "Dine In (AC)",
      customerPhone: "",
      customerName: "",
      paymentType: "Cash",
      myAmount: "586.35",
      tax: "29.61",
      discount: "(0.00)",
      grandTotal: "618.00",
      created: "2023-09-18 22:23:05",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredOrders = orders.filter((order) => {
    return (
      (!filters.orderNo || order.orderNo.includes(filters.orderNo)) &&
      (!filters.paymentType || order.paymentType === filters.paymentType) &&
      (!filters.tableNo || order.orderType.includes(filters.tableNo)) &&
      (!filters.customerName || order.customerName.includes(filters.customerName)) &&
      (!filters.mobile || order.customerPhone.includes(filters.mobile)) &&
      (!filters.orderStatus || order.orderType.includes(filters.orderStatus)) &&
      (!filters.onlinePartner || order.orderType.includes(filters.onlinePartner)) &&
      (!filters.total || order.grandTotal.includes(filters.total))
    );
  });

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="btn-group">
          <button className="btn btn-primary">Current Order</button>
          <button className="btn btn-outline-primary">Online Order</button>
          <button className="btn btn-outline-primary">Advance Order</button>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-secondary me-2">Get Past Orders</button>
          <button className="btn btn-secondary">Back</button>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <div className="btn-group">
          <button className="btn btn-primary">All</button>
          <button className="btn btn-outline-primary">Dine In</button>
          <button className="btn btn-outline-primary">Delivery</button>
          <button className="btn btn-outline-primary">Pick Up</button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-25">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onClick={() => setShowFilters(!showFilters)}
          />
        </div>
        <div className="btn-group">
          <button className="btn btn-outline-success">
            <input type="checkbox" className="me-2" /> Saved Bill
          </button>
          <button className="btn btn-outline-primary">
            <input type="checkbox" className="me-2" /> Printed Bill
          </button>
          <button className="btn btn-outline-danger">
            <input type="checkbox" className="me-2" /> Cancelled Bill
          </button>
          <button className="btn btn-outline-warning">
            <input type="checkbox" className="me-2" /> Paid
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="card p-3 mb-4">
          <div className="row g-3">
            <div className="col-md-2">
              <input
                type="text"
                name="orderNo"
                value={filters.orderNo}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Order No."
              />
            </div>
            <div className="col-md-2">
              <select
                name="paymentType"
                value={filters.paymentType}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Payment Type</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-2">
              <input
                type="text"
                name="tableNo"
                value={filters.tableNo}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Table No."
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                name="customerName"
                value={filters.customerName}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Customer Name"
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                name="mobile"
                value={filters.mobile}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Mobile"
              />
            </div>
            <div className="col-md-2">
              <select
                name="orderStatus"
                value={filters.orderStatus}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Order Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                name="onlinePartner"
                value={filters.onlinePartner}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Online Partner</option>
                <option value="Zomato">Zomato</option>
                <option value="Swiggy">Swiggy</option>
              </select>
            </div>
            <div className="col-md-2">
              <input
                type="text"
                name="total"
                value={filters.total}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Total"
              />
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => setFilters({
                orderNo: "",
                paymentType: "",
                tableNo: "",
                customerName: "",
                mobile: "",
                orderStatus: "",
                onlinePartner: "",
                sortBy: "",
                sortOrder: "",
                total: "",
              })}
            >
              Reset
            </button>
            <button className="btn btn-outline-danger me-2">Search From Web</button>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      )}

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Order No.</th>
            <th>Order Type</th>
            <th>Customer Phone</th>
            <th>Customer Name</th>
            <th>Payment Type</th>
            <th>My Amount (₹)</th>
            <th>Tax (₹)</th>
            <th>Discount (₹)</th>
            <th>Grand Total (₹)</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderNo}</td>
              <td>{order.orderType}</td>
              <td>{order.customerPhone}</td>
              <td>{order.customerName}</td>
              <td>{order.paymentType}</td>
              <td>{order.myAmount}</td>
              <td>{order.tax}</td>
              <td>{order.discount}</td>
              <td>{order.grandTotal}</td>
              <td>{order.created}</td>
              <td>
                <button className="btn btn-sm btn-link">View</button>
                <button className="btn btn-sm btn-link">Reprint</button>
                <button className="btn btn-sm btn-link text-danger">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
