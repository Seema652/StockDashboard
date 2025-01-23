import React, { useState } from 'react'
import ModuleStageForm from './ModuleStageForm';
import Stage from '../../../components/kamran/Stage';

function Roter() {
    const [tab, setTab] = useState(0);

    const tabHandle = (num)=>{
        setTab(num)
    }
  return (
    <div className=''>
      <ul className='d-flex gap-3'>
        <li className=''onClick={()=>tabHandle(0)}>Module Stage Form</li>
         <li className=''onClick={()=>tabHandle(1)}>Stage</li>
      </ul>
      <div className={tab === 0 ? "d-block" : "d-none"}>
        <ModuleStageForm/>
      </div>
      <div className={tab === 1 ? "d-block" : "d-none"}>
       <Stage/>
      </div>
    </div>
  )
}

export default Roter
