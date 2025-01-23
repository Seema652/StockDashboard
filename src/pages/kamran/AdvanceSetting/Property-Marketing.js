import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidFileJson } from 'react-icons/bi'
import { FaFileExcel } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'
import MarketingCostumTbs from '../../../components/kamran/ModuleComponent/Pops/MarketingCostumTbs';
import Leading from '../../../components/kamran/ModuleComponent/Pops/Leading';
function PropertyMarketing() {
  const [out, setOut] = useState(null);

  // Example content for each menu item
  const outContents = [
    "Campaigns Content",
    "Leads Content",
    "Leading Content"
  ];

  const outHandle = (num) => {
    setOut(num);
  };

  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1'>
        <div className='tbl-caption text-light'>
            <h3 >Marketing</h3>
       <div>
        
          <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import PDF" style={{ marginLeft: '8px' }}>
            <FaFilePdf /> PDF
          </Link>
          <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import JSON" style={{ marginLeft: '8px' }}>
            <BiSolidFileJson /> JSON
          </Link>
          <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import Excel" style={{ marginLeft: '8px' }}>
            <FaFileExcel /> Excel
          </Link>
        </div>
      </div>
    </div>
 <div className='' style={{display:"flex", justifyContent:"space-between", width:"1000px"}}>
    <ul className="serviceMenu mt-2">
  <li
    className="list-group-item"
    style={{ width : "100px",border: '1px solid #ddd', padding: '8px', marginBottom: '4px' }}
    onClick={() => outHandle(0)}
  >
    Campaigns
  </li>
  <li
    className="list-group-item"
    style={{ width : "100px",border: '1px solid #ddd', padding: '8px', marginBottom: '4px' }}
    onClick={() => outHandle(1)}
  >
    Leads
  </li>
  <li
    className="list-group-item"
    style={{width : "100px", border: '1px solid #ddd', padding: '8px', marginBottom: '4px' }}
    onClick={() => outHandle(2)}
  >
    Leading
  </li>
</ul>
<div className={out === 0 ? "d:block" : "d-none"}><MarketingCostumTbs/></div>
<div className={out === 1 ? "d:block" : "d-none"}><MarketingCostumTbs/></div>
<div className={out === 2 ? "d:block" : "d-none"}><Leading/></div>
</div>
    </div>
  );
}

export default PropertyMarketing;
