import React from "react";
import { FaClipboardList, FaTrashAlt, FaChartBar, FaClipboardCheck, FaTruck, FaSyncAlt, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


function Inventory() {
  return (
    <div className="container">
      <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-light"> Inventory Management</h4>
        <button className="btn btn-primary">Back</button>
      </div>
      <hr />

      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <div className="card p-3">
            <FaClipboardList size={30} className="mb-2" />
            <h5>Indent Management</h5>
            <p>Calculate raw materials required to prepare specific items in bulk.</p>
            <div className="d-flex justify-content-end">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="card p-3">
            <FaTrashAlt size={30} className="mb-2" />
            <h5>Wastage</h5>
            <p>Enter wastage of your items/raw material & optimize on plugging leakages.</p>
            <div className="d-flex justify-content-end">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="card p-3">
            <FaChartBar size={30} className="mb-2" />
            <h5>Current Stock</h5>
            <p>Update closing stock of the raw material with ease.</p>
            <div className="d-flex justify-content-end">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="card p-3">
            <FaClipboardCheck size={30} className="mb-2" />
            <h5>Stock Report</h5>
            <p>Know your raw material stock status and purchase/consumption history.</p>
            <div className="d-flex justify-content-end">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="card p-3">
          <FaTruck size={30} className="mb-2" />
          <Link to="/purchaselisting"  className="text-decoration-none">  
              <h5>Purchase Management</h5>
              <p>Keep track of your raw material purchase and inward entry.</p>
              <div className="d-flex justify-content-end">
                <FaArrowRight size={20} />
              </div>
            </Link>
          </div>    
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="card p-3">
            <FaSyncAlt size={30} className="mb-2" />
            <h5>Convert Raw Material</h5>
            <p>Define raw material conversions. Convert raw materials for semi-cooked/cooked foods.</p>
            <div className="d-flex justify-content-end">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div className="card p-3">
            <FaShoppingCart size={30} className="mb-2" />
            <h5>Request For Purchase</h5>
            <p>Initiate Request for Purchase (PO) and keep track of the purchase request.</p>
            <div className="d-flex justify-content-end">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
