import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddPurchase = () => {
  const [items, setItems] = useState([
    { itemInfo: "", stock: 0, qty: 0, rate: 0, total: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { itemInfo: "", stock: 0, qty: 0, rate: 0, total: 0 }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleInputChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    if (field === "qty" || field === "rate") {
      newItems[index].total = newItems[index].qty * newItems[index].rate;
    }
    setItems(newItems);
  };

  const grandTotal = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Add Purchase</h3>
      <form>
        {/* Supplier and Purchase Details */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="mb-3">Information Details</h5>
            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label">Supplier Name <span className="text-danger">*</span></label>
                <select className="form-select form-control-sm">
                  <option>Select option</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Invoice No <span className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" placeholder="Invoice No" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Purchase Date <span className="text-danger">*</span></label>
                <input type="date" className="form-control form-control-sm" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Expiry Date</label>
                <input type="date" className="form-control form-control-sm" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label">Payment Type</label>
                <select className="form-select form-control-sm">
                  <option>Cash Payment</option>
                  <option>Card Payment</option>
                  <option>Bank Transfer</option>
                </select>
              </div>
              <div className="col-md-9">
                <label className="form-label">Details</label>
                <textarea className="form-control form-control-sm" rows="2" placeholder="Details"></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="mb-3">Items</h5>
            {items.map((item, index) => (
              <div className="row mb-2 align-items-center" key={index}>
                <div className="col-md-2">
                  <label className="form-label">Item Information <span className="text-danger">*</span></label>
                  <select
                    className="form-select form-control-sm"
                    value={item.itemInfo}
                    onChange={(e) =>
                      handleInputChange(index, "itemInfo", e.target.value)
                    }
                  >
                    <option>Select option</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Stock/Qty</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="0.00"
                    value={item.stock}
                    onChange={(e) =>
                      handleInputChange(index, "stock", parseFloat(e.target.value))
                    }
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Qty <span className="text-danger">*</span></label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="0.00"
                    value={item.qty}
                    onChange={(e) =>
                      handleInputChange(index, "qty", parseFloat(e.target.value))
                    }
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Rate <span className="text-danger">*</span></label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="0.00"
                    value={item.rate}
                    onChange={(e) =>
                      handleInputChange(index, "rate", parseFloat(e.target.value))
                    }
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Total</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="0.00"
                    value={item.total}
                    readOnly
                  />
                </div>
                <div className="col-md-2">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm mt-4"
                    onClick={() => removeItem(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-primary btn-sm mb-3"
              onClick={addItem}
            >
              Add More Item
            </button>

            <div className="row">
              <div className="col-md-6 offset-md-6">
                <div className="mb-2">
                  <strong>Grand Total:</strong> {grandTotal.toFixed(2)}
                </div>
                <div className="mb-2">
                  <label className="form-label">Paid Amount:</label>
                  <input type="number" className="form-control form-control-sm" placeholder="0.00" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPurchase;