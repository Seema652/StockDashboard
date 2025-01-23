import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaEdit, FaTrashAlt, FaCheckCircle } from "react-icons/fa";

const SmsTemplate = () => {
  const [templates, setTemplates] = useState([
    { id: 1, name: "one", type: "Cancel", template: "Your Order {id} is canceled for some reason." },
    { id: 2, name: "two", type: "CompleteOrder", template: "Your order {id} is completed." },
    { id: 3, name: "three", type: "Processing", template: "Your order {id} is processing." },
    { id: 4, name: "four", type: "Neworder", template: "Your Order Has been Placed Successfully." },
    { id: 5, name: "VC", type: "CompleteOrder", template: "Your Order {id} is completed, collect it from the checkout area." },
    { id: 6, name: "five", type: "Processing", template: "jghgjghgjgjgjhgjhgjg" },
  ]);

  const [formData, setFormData] = useState({ name: "", type: "", template: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTemplates([
      ...templates,
      { id: templates.length + 1, name: formData.name, type: formData.type, template: formData.template },
    ]);
    setFormData({ name: "", type: "", template: "" });
  };

  const handleDelete = (id) => {
    setTemplates(templates.filter((template) => template.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        <h3 className="mb-0">Sms Setting</h3>
      </div>

      <div className="card p-4 mt-4">
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <label className="form-label me-3"  style={{ minWidth: "150px" }}>
              Template Name:
            </label>
            <input
              type="text"
              className="form-control w-50"
               placeholder="Template Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <label className="form-label me-3" style={{ minWidth: "150px" }}>
              Type:
            </label>
            <select
              className="form-select w-50"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
            >
              <option value="">Select Option</option>
              <option value="Cancel">Cancel</option>
              <option value="CompleteOrder">CompleteOrder</option>
              <option value="Processing">Processing</option>
              <option value="Neworder">Neworder</option>
            </select>
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <label className="form-label me-3" style={{ minWidth: "150px" }}>
              SMS Template:
            </label>
            <textarea
              className="form-control w-50"
              rows="3"
              value={formData.template}
              onChange={(e) => setFormData({ ...formData, template: e.target.value })}
              required
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success me-2">
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-danger"
              onClick={() => setFormData({ name: "", type: "", template: "" })}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="card p-3 mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>✔</th>
              <th>Template Name</th>
              <th>Type</th>
              <th>SMS Template</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template) => (
              <tr key={template.id}>
                <td className="text-center">
                  <FaCheckCircle className="text-success" />
                </td>
                <td>{template.name}</td>
                <td>{template.type}</td>
                <td>{template.template}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <FaEdit
                    className="text-primary me-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => alert(`Edit Template ${template.id}`)}
                  />
                  <FaTrashAlt
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(template.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SmsTemplate;
