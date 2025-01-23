import React, { useState } from 'react'
import MassDefineForm from '../../../../components/kamran/AdvanceSetting/DataImportForm/MassDefineForm';
import MassTransferToForm from '../../../../components/kamran/AdvanceSetting/DataImportForm/MassTransferToForm';

function MassForm() {
    const [cotlin, setCotlin] = useState(0);

    const cotlinHandle  = (num) =>{
 setCotlin(num);
    }
  return (
    <div className='card'>
       <div className='table-responsive active-projects style-1'>
            <h4 className='tbl-caption text-light'>New Mass Transfer</h4>
        </div>
      
       <ul className='d-flex'>
        <li className=''onClick={()=>cotlinHandle (0)}>
            <button type='button'className={`btn m-0 ${cotlin === 0 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              Define Fillter 
            </button>
        </li>
        <li className=''onClick={()=>cotlinHandle (1)}>
            <button type='button'className={`btn m-0 ${cotlin === 1 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              Transfer To 
            </button>
        </li>
    </ul>
    <div className={cotlin === 0 ? "d-block" : "d-none"}><MassDefineForm/></div>
    <div className={cotlin === 1 ? "d-block" : "d-none"}><MassTransferToForm/></div>
    </div>
  )
}

export default MassForm
