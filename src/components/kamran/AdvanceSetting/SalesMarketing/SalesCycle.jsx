import React, { useState } from 'react';
import PropertingForm from '../../ModuleComponent/Pops/PropertingForm';
import { Link } from 'react-router-dom';
import SalesPop from './SalesPop';

function SalesCycle() {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h4 className="tbl-caption text-light">
          Sales Life Cycle
          <Link
            className="btn btn-primary btn-sm"
           
            role="button"
            aria-controls="offcanvasExample"
            onClick={() => setShow(true)}
          >
            + New Sales Cycle List Added
          </Link>
        </h4>
      </div>
      <div className="mt-2" style={{ color: 'black' }}>
        <PropertingForm />
      </div>
      <div>
        {show && <SalesPop show={show} setShow={setShow} />}
      </div>
    </div>
  );
}

export default SalesCycle;
