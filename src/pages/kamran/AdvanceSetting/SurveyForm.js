import React, { useState } from 'react'
import DefineForm from '../../../components/kamran/AdvanceSetting/DefineForm'
import Customize from '../../../components/kamran/AdvanceSetting/Customize'
import PreviewForm from '../../../components/kamran/AdvanceSetting/PreviewForm'
import Letterpop from '../../../components/kamran/AdvanceSetting/Letterpop'

function SurveyForm() {
    const [perfect, setPerfect] = useState ();

    const perfecthandle = (num) => {
        setPerfect(num)
    }
  return (
    <div className='card'>
      <div className='table-responsive active-projects style-1'>
        <h4 className='tbl-caption text-light'>New Survey</h4>
      </div>
     <div className='mt-2'>
        <ul className='d-flex '>
            <li className=''onClick={()=> perfecthandle(0) }>
            <button type="button" class={`btn m-0 ${perfect === 0 ? " btn-primary" :
                 " btn-outline-primary"} rounded-0`}>Define</button>
            </li>
            <li className=''onClick={()=> perfecthandle(1) }>
            <button type="button" class={`btn m-0 ${perfect === 1 ? " btn-primary" :
                 " btn-outline-primary"} rounded-0`}>Customize</button>
            </li>
            <li className=''onClick={()=> perfecthandle(2) }>
            <button type="button" class={`btn m-0 ${perfect === 2 ? " btn-primary" :
                 " btn-outline-primary"} rounded-0`}>Preview</button>
            </li>
        </ul>
     </div>
     <div className={perfect === 0 ? "d-block" : "d-none"}>
        <DefineForm/>
  </div>
  <div className={perfect === 1 ? "d-block" : "d-none"}>
        <Customize/>
  </div>
  <div className={perfect === 2 ? "d-block" : "d-none"}>
        <PreviewForm/>
  </div>
    </div>
  )
}

export default SurveyForm
