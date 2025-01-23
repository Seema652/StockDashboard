import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaHome } from "react-icons/fa";

const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [data, setData] = useState([
    { sl: 1, customerName: "Mohamed", email: "mohamed.zamema@gmail.com", mobile: "01222881580", address: "64 Ebad Al Rhman Moktam", isVIP: false },
    { sl: 2, customerName: "Surjith", email: "Surjith@gmail.com", mobile: "9895400500", address: "SSS", isVIP: false },
    { sl: 3, customerName: "Deepanshu", email: "deepanshu@gmail.com", mobile: "1234567897", address: "Sdfsdfs", isVIP: true },
    { sl: 4, customerName: "Hello", email: "test@gmail.com", mobile: "01234567891", address: "", isVIP: false },
    { sl: 5, customerName: "Memberz", email: "memberz1991@gmail.com", mobile: "0925443119", address: "Ho Chi Minh, District 10", isVIP: true },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    isVIP: false,
  });

  const filteredData = data.filter(item =>
    item.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenPopup = (customer = null) => {
    if (customer) {
      setEditingCustomer(customer);
      setFormData(customer); // Prefill the form with the selected customer's data
    } else {
      setEditingCustomer(null); // For adding new customer
      setFormData({
        customerName: "",
        email: "",
        mobile: "",
        password: "",
        address: "",
        isVIP: false,
      });
    }
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are empty
    if (!formData.customerName || !formData.email || !formData.mobile) {
      alert("Customer Name, Email, and Mobile are required!");
      return; // Prevent submission if required fields are empty
    }

    if (editingCustomer) {
      // Update the customer data
      const updatedData = data.map((item) =>
        item.sl === editingCustomer.sl ? { ...item, ...formData } : item
      );
      setData(updatedData);
    } else {
      // Add a new customer
      const newCustomer = { sl: data.length + 1, ...formData };
      setData([...data, newCustomer]);
    }

    setShowPopup(false); // Close the popup after submitting
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Customer List</h3>
      </div>
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Customer List</h4>
            <button className="btn btn-primary" onClick={() => handleOpenPopup()}>Add Customer</button>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <label className="me-2">
                  Display
                  <select
                    className="form-select d-inline mx-2"
                    style={{ width: "80px", display: "inline-block" }}
                    value={recordsPerPage}
                    onChange={(e) => setRecordsPerPage(e.target.value)}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  records per page
                </label>
              </div>
              <div className="text-center">
                <button className="btn btn-dark me-2">Copy</button>
                <button className="btn btn-dark me-2">CSV</button>
                <button className="btn btn-dark me-2">Excel</button>
                <button className="btn btn-dark me-2">PDF</button>
                <button className="btn btn-dark">Print</button>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "150px" }}
                />
              </div>
            </div>
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Sl</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.customerName}</td>
                    <td>{row.email}</td>
                    <td>{row.mobile}</td>
                    <td>{row.address}</td>
                    <td>
                      <FaEdit
                        className="text-primary me-2"
                        style={{ cursor: "pointer" }}
                        title="Edit"
                        onClick={() => handleOpenPopup(row)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Customer Popup */}
      {showPopup && (
        <div className="modal d-block" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {editingCustomer ? "Update Member" : "Add Customer"}
                </h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClosePopup}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Customer Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="customerName"
                      value={formData.customerName || (editingCustomer ? editingCustomer.customerName : '')}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email || (editingCustomer ? editingCustomer.email : '')}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobile"
                      value={formData.mobile || (editingCustomer ? editingCustomer.mobile : '')}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password || (editingCustomer ? editingCustomer.password : '')}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={formData.address || (editingCustomer ? editingCustomer.address : '')}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="isVIP"
                      checked={formData.isVIP || (editingCustomer ? editingCustomer.isVIP : false)}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="isVIP">
                      Is VIP?
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">{editingCustomer ? "Update" : "Submit"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerList;
