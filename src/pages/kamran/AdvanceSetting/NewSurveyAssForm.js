import React, { useState } from 'react';
import Assignment from '../../../components/kamran/AdvanceSetting/Assignment';
import FillterForm from '../../../components/kamran/AdvanceSetting/FillterForm';

function NewSurveyAssForm() {
  const [excellent, setExcellent] = useState(0); 

  const excellentHandle = (num) => {
    setExcellent(num); 
  };

  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h4 className='tbl-caption text-light'>New Survey Assignment</h4>
      </div>
      <div>
        <ul className='d-flex'>
          <li className='' onClick={() => excellentHandle(0)}>
            <button
              type='button'
              className={`btn m-0 ${
                excellent === 0 ? 'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              Assignment
            </button>
          </li>
          <li className='' onClick={() => excellentHandle(1)}>
            <button
              type='button'
              className={`btn m-0 ${
                excellent === 1 ? 'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              Filter
            </button>
          </li>
          
        </ul>
      </div>
      <div className={excellent === 0 ? "d-block" : "d-none"}><Assignment/></div>
      <div className={excellent === 1 ? "d-block" : "d-none"}><FillterForm/></div>
    </div>
  );
}

export default NewSurveyAssForm;
