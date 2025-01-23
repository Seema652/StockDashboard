import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaCreditCard } from "react-icons/fa";

const PaymentSetup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const data = [
    {
      sl: 1,
      paymentMethodName: "Card Payment",
      emailOrLocationId: "admin@example.com",
      merchantOrAppId: "7BUkXCbuHDcx1ZyQqmcKVtsLnFxF0r3f",
      currency: "BRL",
      mode: "Live Mode",
      status: "Active",
    },
    {
      sl: 2,
      paymentMethodName: "Nakit Ödeme",
      emailOrLocationId: "admin@example.com",
      merchantOrAppId: "",
      currency: "NZD",
      mode: "Live Mode",
      status: "Active",
    },
    {
      sl: 3,
      paymentMethodName: "Paystack Payments",
      emailOrLocationId: "ainalcse@gmail.com",
      merchantOrAppId: "sk_test_71353c2613675acb967ea532f4c4c8105ea175b8",
      currency: "NGN",
      mode: "Test Mode",
      status: "Active",
    },
    {
      sl: 4,
      paymentMethodName: "Stripe Payment",
      emailOrLocationId: "ainalcse@gmail.com",
      merchantOrAppId: "sk_test_ol4WUcbGsqxNJItpeOi1ecDT00k5mDyC2G",
      currency: "USD",
      mode: "Live Mode",
      status: "Active",
    },
    {
      sl: 5,
      paymentMethodName: "Paytm Payments",
      emailOrLocationId: "5SNY8GNKAZM00",
      merchantOrAppId: "sandbox-sq0idb-ShIOgPUIHSXxsjCPG4oh_A",
      currency: "AUD",
      mode: "Test Mode",
      status: "Active",
    },
  ];

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleExport = (format) => {
    console.log(`Exporting to ${format}`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaCreditCard className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Payment Setup</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Payment Setup Configuration</h4>
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
                    onChange={(e) => setRecordsPerPage(Number(e.target.value))}
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
                <button className="btn btn-dark me-2" onClick={() => handleExport('copy')}>Copy</button>
                <button className="btn btn-dark me-2" onClick={() => handleExport('csv')}>CSV</button>
                <button className="btn btn-dark me-2" onClick={() => handleExport('excel')}>Excel</button>
                <button className="btn btn-dark me-2" onClick={() => handleExport('pdf')}>PDF</button>
                <button className="btn btn-dark" onClick={() => handleExport('print')}>Print</button>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "200px" }}
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Payment Method</th>
                    <th>Email/Location ID</th>
                    <th>Merchant/App ID</th>
                    <th>Currency</th>
                    <th>Mode</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.sl}</td>
                      <td>{row.paymentMethodName}</td>
                      <td>{row.emailOrLocationId}</td>
                      <td>{row.merchantOrAppId}</td>
                      <td>{row.currency}</td>
                      <td>{row.mode}</td>
                      <td>{row.status}</td>
                      <td>
                        <FaEdit className="text-primary" style={{ cursor: "pointer" }} title="Edit" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSetup;
