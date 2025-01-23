import React, { useState } from "react";
import { FaPlus, FaMinus,FaLightbulb  } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalCash from "./modelcash";

const CashCalculations = () => {
  const denominations = [10, 20, 50, 100, 200, 500, 2000];
  const [quantities, setQuantities] = useState({});
  const [extraCash, setExtraCash] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleQuantityChange = (value, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [value]: quantity,
    }));
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const calculateTotal = () => {
    let total = denominations.reduce((acc, value) => {
      return acc + value * (quantities[value] || 0);
    }, 0);
    return total + parseFloat(extraCash);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center flex-wrap gap-3">
        <div className="card shadow-sm" style={{ width: "300px" }}>
          <div className="card-body">
            <p className="mb-1 bg-black text-white p-2 rounded text-center">
              Previous Day Balance
            </p>
            <h6 className="text-center">₹ 2000.00</h6>
          </div>
        </div>

        <FaPlus className="align-self-center text-success fs-4" />

        <div className="card shadow-sm" style={{ width: "300px" }}>
          <div className="card-body">
            <p className="mb-1 bg-black text-white p-2 rounded text-center">
              Total Cash
            </p>
            <h6 className="text-center">₹ 11065.00</h6>
          </div>
        </div>

        <FaPlus className="align-self-center text-success fs-4" />

        <div className="card shadow-sm" style={{ width: "300px" }}>
          <div className="card-body">
            <p className="mb-1 bg-black text-white p-2 rounded text-center">
              Total Cash Expense
            </p>
            <h6 className="text-center">₹ 0.00</h6>
          </div>
        </div>

        <FaMinus className="align-self-center text-danger fs-4" />

        {/* Total Cash Withdrawal Card */}
        <div className="card shadow-sm" style={{ width: "300px" }}>
          <div className="card-body">
            <p className="mb-1 bg-black text-white p-2 rounded text-center">
              Total Cash Withdrawal
            </p>
            <h6 className="text-center">₹ 0.00</h6>
          </div>
        </div>

        <FaMinus className="align-self-center text-danger fs-4" />

        {/* Final Cash Balance Card */}
        <div className="card shadow-sm" style={{ width: "300px" }}>
          <div className="card-body">
            <p className="mb-1 bg-black text-white p-2 rounded text-center">
              Final Cash Balance
            </p>
            <h6 className="text-center">₹ 13065.00</h6>
          </div>
        </div>

        {/* New Card for Total Cash Top */}
        <FaPlus className="align-self-center text-success fs-4" />
        <div className="card shadow-sm" style={{ width: "300px" }}>
          <div className="card-body">
            <p className="mb-1 bg-black text-white p-2 rounded text-center">
              Total Cash Top
            </p>
            <h6 className="text-center">0.00</h6>
          </div>
        </div>

        {/* New Card for Total Cash Sale Return */}
        <FaPlus className="align-self-center text-success fs-4" />
        <div className="card shadow-sm" style={{ width: "300px" }}>
          <div className="card-body">
            <p className="mb-1 bg-black text-white p-2 rounded text-center">
              Total Cash Sale Return
            </p>
            <h6 className="text-center">₹ 90.00</h6>
          </div>
        </div>
        <div className="card shadow-sm" style={{ width: "300px" }}>
          <div className="card-body">
            <p className="mb-1 bg-black text-white p-2 rounded text-center">
              Total Other Cash
            </p>
            <h6 className="text-center">12310.00</h6>
          </div>
        </div>
      </div>

      <div className="card mt-5   shadow-sm" style={{ width: "100%" }}>
        <div className="card-body">
         

        </div>
        <div className="row mt-3">
          {denominations.map((value) => (
            <div className="col-6">
              <div className="border p-2 shadow-sm mb-3 justify-content-between">
                <div
                  className="col-6 d-flex align-items-center justify-content-between"
                  key={value}
                >
                  <span className="me-3">{value}</span>
                  <span className="me-3">x</span>
                  <input
                    type="number"
                    placeholder="Qty."
                    className="form-control me-3"
                    style={{ width: "80px" }}
                    onChange={(e) =>
                      handleQuantityChange(value, parseInt(e.target.value) || 0)
                    }
                  />
                  <span className="me-3">=</span>
                  <span>{value * (quantities[value] || 0)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <label htmlFor="extraCash" className="me-3">
            Extra Cash:
          </label>
          <input
            id="extraCash"
            type="number"
            placeholder="Enter Amount"
            className="form-control d-inline-block"
            style={{ width: "150px" }}
            value={extraCash}
            onChange={(e) => setExtraCash(e.target.value)}
          />
        </div>
      </div>
      <div className="w-75 mx-auto">
      <div className="border p-2 shadow-sm mb-3 d-flex justify-content-between">
      <label htmlFor="extraCash" className="me-3">
            Final Cash Balance:
          </label>
          <input
            id="extraCash"
            type="number"
            placeholder="Enter Amount"
            className="form-control d-inline-block"
            style={{ width: "150px" }}
            value={extraCash}
            onChange={(e) => setExtraCash(e.target.value)}
          />
          <label htmlFor="extraCash" className="me-3">
            Final Card Total:0.00
          </label>
          <input
            id="extraCash"
            type="number"
            placeholder="Enter Amount"
            className="form-control d-inline-block"
            style={{ width: "150px" }}
            value={extraCash}
            onChange={(e) => setExtraCash(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Submit
        </button>
      </div>
      <ModalCash show={showModal} onClose={() => setShowModal(false)} />
    </div>
  
  );
};
export default CashCalculations;
