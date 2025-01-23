import React, { useState } from 'react'
import ApplicationForm from '../../../components/kamran/ApplicationForm'
import ChooseCuster from '../../../components/kamran/ChooseCuster'
import ApplicationRo from '../../../components/kamran/ApplicationRo'

function NewApplicatinForm() {
    const [allow, setAllow] = useState (0);

    const allowHandle = (num)=>{
        setAllow(num)
    }
  return (
   
    <div className='mt-4'>
      <ul className='d-flex'>
        <li className=''onClick={()=>allowHandle(0)}>
        <button type="button" class={`btn m-0 ${allow === 0 ? " btn-primary" : " btn-outline-primary"} rounded-0`}>Define Custom</button></li>
         <li className=''onClick={()=>allowHandle(1)}>
         <button type="button" class={`btn m-0 ${allow === 1 ? " btn-primary" : " btn-outline-primary"} rounded-0`}>Choose Custer</button></li>
         <li className=''onClick={()=>allowHandle(2)}>
         <button type="button" class={`btn m-0 ${allow === 2 ? " btn-primary" : " btn-outline-primary"} rounded-0`}>Application Ro</button></li>
      </ul>
      <div className={allow === 0 ? "d-block" : "d-none"}>
       
            <ApplicationForm/>
       
        </div>
        <div className={allow === 1 ? "d-block" : "d-none"}>
        <ChooseCuster/>
        </div> 
        <div className={allow === 2 ? "d-block" : "d-none"}>
        <ApplicationRo/>
        </div> 
    </div>
  )
}

export default NewApplicatinForm
