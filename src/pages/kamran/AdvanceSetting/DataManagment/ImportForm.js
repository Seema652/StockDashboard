import React, { useState } from 'react'
import GeneralImport from '../../../../components/kamran/AdvanceSetting/DataImportForm/GeneralImport';
import SelectImport from '../../../../components/kamran/AdvanceSetting/DataImportForm/SelectImport';
import MappingForm from '../../../../components/kamran/AdvanceSetting/DataImportForm/MappingForm';
import OptionImportForm from '../../../../components/kamran/AdvanceSetting/DataImportForm/OptionImportForm';
import PreviewImportForm from '../../../../components/kamran/AdvanceSetting/DataImportForm/PreviewImportForm';

function ImportForm() {
    const [India, setIndia] = useState (0);

    const indiaHandle = (num) =>{
        setIndia (num);
    } 
  return (
    <div className='card'>
    <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light'>New Import</h3>
    </div>
    <ul className='d-flex'>
        <li className=''onClick={()=>indiaHandle (0)}>
            <button type='button'className={`btn m-0 ${India === 0 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              General 
            </button>
        </li>
        <li className=''onClick={()=>indiaHandle (1)}>
            <button type='button'className={`btn m-0 ${India === 1 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              Select File 
            </button>
        </li>
        <li className=''onClick={()=>indiaHandle (2)}>
            <button type='button'className={`btn m-0 ${India === 2 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              Mapping Details 
            </button>
        </li>
        <li className=''onClick={()=>indiaHandle (3)}>
            <button type='button'className={`btn m-0 ${India === 3 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              Option
            </button>
        </li>
        <li className=''onClick={()=>indiaHandle (4)}>
            <button type='button'className={`btn m-0 ${India === 4 ?
             'btn-primary' : 'btn-outline-primary'
              } rounded-0`}
            >
              Preview
            </button>
        </li>
    </ul>
    <div className={India === 0 ? "d-block" : "d-none"}><GeneralImport/></div>
    <div className={India === 1 ? "d-block" : "d-none"}><SelectImport/></div>
    <div className={India === 2 ? "d-block" : "d-none"}><MappingForm/></div>
    <div className={India === 3 ? "d-block" : "d-none"}><OptionImportForm/></div>
    <div className={India === 4 ? "d-block" : "d-none"}><PreviewImportForm/></div>
     </div>
  )
}

export default ImportForm
