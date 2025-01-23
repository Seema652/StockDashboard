import React from 'react'
import { Link } from 'react-router-dom'
import Fields from '../../../components/kamran/ModuleComponent/Fields'
import RulesTabs from '../../../components/kamran/ModuleComponent/Pops/RulesTabs'

function CostumizeFields() {
  return (
    <div className='card'>
<div className='table-responsive active-projects style-1'>
    <h4 className='tbl-caption text-light'>Customize Fields</h4>
    
    </div>      
    <div>
       <Fields/>
      </div>
     
    </div>
  )
}

export default CostumizeFields
