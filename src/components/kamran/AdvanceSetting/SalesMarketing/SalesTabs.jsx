import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import DetailsSalesTabs from './DetailsSalesTabs'
import StageTabs from './StagesTabs'
import ActionTabs from './ActionTabs'
import PropertingForm from '../../ModuleComponent/Pops/PropertingForm'


function SalesTabs() {
  return (
    <div className='card'>

    <div>
<Tabs
   defaultActiveKey="Details"
   id="uncontrolled-tab-example"
   className="mb-3"
 >
     <Tab eventKey="Details" title="Details"><DetailsSalesTabs/> </Tab>
     <Tab eventKey="Stage" title="Stage"><StageTabs/> </Tab>
     <Tab eventKey="Action" title="Action"><ActionTabs/> </Tab>
     <Tab eventKey="Product" title="Product"> <div className='text-black'>
        <h3 className='border-bottom p-2'>Products</h3><PropertingForm/></div></Tab>
 </Tabs>
 </div>
 </div>
  )
}

export default SalesTabs
