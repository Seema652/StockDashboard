import React, { useState } from "react";
import {
  FaEdit,
  FaThumbtack,
  FaSyncAlt,
  FaMinus,
  FaExpand,
  FaTimes,
  FaHome,
} from "react-icons/fa";

const ApplicationSettings = () => {
  const [formData, setFormData] = useState({
    applicationTitle: "",
    storeName: "",
    address: "",
    email: "",
    phone: "",
    favicon: null,
    logo: null,
    openingTime: "10:00",
    closingTime: "21:00",
    discountType: "percent",
    discountRate: "",
    serviceCharge: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [id]: files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="settings-container">
      <div className="d-flex align-items-center mb-4 mt-4">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Settings</h3>
      </div>

      <div
        className="container mt-4 p-4 border rounded"
        style={{ maxWidth: "1200px" }}
      >
        <div
          className="card-header d-flex align-items-center justify-content-between mb-4"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            padding: "1rem",
          }}
        >
          <h5 className="m-0">Application Setting</h5>
          <div className="d-flex align-items-center gap-3">
            {[
              { icon: FaEdit, title: "Edit" },
              { icon: FaThumbtack, title: "Pin" },
              { icon: FaSyncAlt, title: "Reload" },
              { icon: FaMinus, title: "Minimize" },
              { icon: FaExpand, title: "Fullscreen" },
              { icon: FaTimes, title: "Close" },
            ].map(({ icon: Icon, title }) => (
              <Icon
                key={title}
                title={title}
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => console.log(`${title} clicked`)}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="settings-form">
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="applicationTitle"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Application Title <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="applicationTitle"
              className="form-control w-75"
              placeholder="Dynamic Admin Panel"
              value={formData.applicationTitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="storeName"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Store Name
            </label>
            <input
              type="text"
              id="storeName"
              className="form-control w-75"
              placeholder="Dhaka Restaurant"
              value={formData.storeName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="address"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form-control w-75"
              placeholder="98 Green Road, Farmgate, Dhaka-1215."
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="email"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control w-75"
              placeholder="bdtask@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="phone"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control w-75"
              placeholder="0123456789"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Favicon
            </label>
            <input
              type="file"
              id="favicon"
              className="form-control w-75"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Logo
            </label>
            <input
              type="file"
              id="logo"
              className="form-control w-75"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="openingTime"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Opening Time
            </label>
            <input
              type="time"
              id="openingTime"
              className="form-control w-75"
              value={formData.openingTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="closingTime"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Closing Time
            </label>
            <input
              type="time"
              id="closingTime"
              className="form-control w-75"
              value={formData.closingTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="discountType"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Discount Type
            </label>
            <select
              id="discountType"
              className="form-select w-75"
              value={formData.discountType}
              onChange={handleInputChange}
            >
              <option value="percent">Percent</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="discountRate"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Discount Rate
            </label>
            <input
              type="text"
              id="discountRate"
              className="form-control w-75"
              placeholder="Discount Rate"
              value={formData.discountRate}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="serviceCharge"
              className="form-label mb-0 me-3"
              style={{ width: "200px", textAlign: "right" }}
            >
              Service Charge
            </label>
            <input
              type="text"
              id="serviceCharge"
              className="form-control w-75"
              placeholder="Service Charge"
              value={formData.serviceCharge}
              onChange={handleInputChange}
            />
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-4 py-2">
           Reset 
            </button>
            <button type="submit" className="btn btn-success px-4 py-2">
             Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationSettings;
