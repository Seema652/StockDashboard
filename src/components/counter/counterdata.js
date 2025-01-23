import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CounterPage = () => {
  const [counterNumber, setCounterNumber] = useState("");  
  const [data, setData] = useState([
    { sl: 1, counterNumber: 1, action: "" },
    { sl: 2, counterNumber: 2, action: "" },
    { sl: 3, counterNumber: 3, action: "" },
    { sl: 4, counterNumber: 4, action: "" },
    { sl: 5, counterNumber: 7, action: "" },
  ]);

  const handleAddCounter = () => {
    if (counterNumber) {
      const newCounter = { sl: data.length + 1, counterNumber: parseInt(counterNumber), action: "" };
      setData([...data, newCounter]);
      setCounterNumber(""); 
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-house-fill me-2" style={{ fontSize: "1.5rem" }}></i>
        <h3 className="mb-0">Order</h3>
      </div>

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h4>Counter List</h4>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-center align-items-center mb-3 ms-3">
          
              <label className="me-2" htmlFor="counterNumber">Counter Number:</label>
              <input
                id="counterNumber"
                type="number"
                className="form-control d-inline-block"
                value={counterNumber}
                onChange={(e) => setCounterNumber(e.target.value)}
                placeholder="Enter Counter Number"
                style={{ width: "200px" }}
              />
              <button
                className="btn btn-primary ms-2"
                onClick={handleAddCounter}
              >
                Add Counter
              </button>
            </div>
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>L No.</th>
                  <th>Counter Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sl}</td>
                    <td>{row.counterNumber}</td>
                    <td>
                      <i
                        className="bi bi-pencil-square text-primary"
                        style={{ cursor: "pointer" }}
                        title="Edit"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
