import React, { useState } from 'react'
import Pm from '../../../components/kamran/Pm'
import GeneralPms from './GeneralPms'
import Erp from './Erp'

function Pms() {
  const [tab, setTab] =useState(0)

  const handleTab = (num)=>{
    setTab(num)
  }
return (
       <div>
       <ul className='d-flex gap-2'>
          <li className={`p-2 ${tab === 0 ? "text-primary": "text-black"}`} onClick={()=>handleTab(0)}>General</li>
          <li className={`p-2 ${tab === 1 ? "text-primary": "text-black"}`} onClick={()=>handleTab(1)}>Erp</li>
       </ul>

      <div className={tab === 0 ? "d-block" : "d-none"}>
        <GeneralPms/>
      </div>
      <div className={tab === 1 ? "d-block" : "d-none"}> 
        <Erp />
      </div>
       </div>
  )
}

export default Pms
