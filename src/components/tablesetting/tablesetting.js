import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from "react-icons/fa";

import table1 from "../../assets/images/table1.png";
import table3 from "../../assets/images/table3.png";
import table7 from "../../assets/images/table7.png";


const TableSetting = () => {
  return (
    <div>
   
      <div className="container mt-4">
        <div className="d-flex align-items-center mb-3">
          <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
          <h3 className="mb-0">Table Setting</h3>
        </div>
      </div>

      <div className="container my-4">
      
        <div
          className="d-flex justify-content-center flex-wrap"
          style={{
            gap: "40px",
            outline: "1px solid #ccc", 
            padding: "20px", 
            maxWidth: "80%", 
            margin: "0 auto", 
          }}
        >
          <div className="card">
            <img src={table1} className="card-img-top" alt="Table 1" />
          </div>
          <div className="card">
            <img src={table3} className="card-img-top" alt="Table 3" />
          </div>
          <div className="card">
            <img src={table7} className="card-img-top" alt="Table 7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSetting;
