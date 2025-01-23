import React, { useState } from 'react'
import GeneralForm from '../../../components/kamran/AdvanceSetting/GeneralForm';
import Menu from '../../../components/kamran/AdvanceSetting/Menu';
import OptionForm from '../../../components/kamran/AdvanceSetting/OptionForm';
import LayoutSelection from '../../../components/kamran/AdvanceSetting/LayoutSelection';
import MobilePreview from '../../../components/kamran/AdvanceSetting/MobilePreview';

function NewConfigRoter() {
    const  [tab, setTab] = useState(0);

    const tabHandle = (num) => {
        setTab(num)
    }
  return (

 <div className='text-primary'>
<ul className='d-flex gap-3'>
    <li className=''onClick={()=>tabHandle(0)}>General Form</li>
    <li className=''onClick={()=>tabHandle(1)}>Menu</li>
    <li className=''onClick={()=>tabHandle(2)}>Option</li>
    <li className=''onClick={()=>tabHandle(3)}>Layout</li>
    <li className=''onClick={()=>tabHandle(4)}>Mobile Preview</li>
</ul>
<div className={tab === 0 ? "d-block" : "d-none"}>
    <GeneralForm/>
</div>
<div className={tab === 1 ? "d-block" : "d-none"} >
    <Menu/>
</div>
<div className={tab === 2 ? "d-block" : "d-none"} >
<OptionForm/>
</div>
<div className={tab === 3 ? "d-block" : "d-none"} ><LayoutSelection/></div>
<div className={tab === 4 ? "d-block" : "d-none"} ><MobilePreview/></div>
 </div>
  )
}

export default NewConfigRoter
