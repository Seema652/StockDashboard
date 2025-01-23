import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import StageDeatils from './StageDeatils'
import StageSetupForm from './StageSetupForm'
import DocumentManagementForm from './DocumentManagementForm'
import TemplateManagement from './TemplateManagment'
import StartTriggerManagement from './StartTriggerManagement'



function AddStageTabs() {
  return (
    <div className='card'>

    <div>
<Tabs
   defaultActiveKey="Stage Details"
   id="uncontrolled-tab-example"
   className="mb-3"
 >
     <Tab eventKey="Stage Details" title="Stage Details"> <StageDeatils/></Tab>
     <Tab eventKey="Stage" title="Opportunities"><StageSetupForm/> </Tab>
     <Tab eventKey="Action" title="Document"><DocumentManagementForm/> </Tab>
     <Tab eventKey="Product" title="Escalation Trigger"><TemplateManagement/> </Tab>
     <Tab eventKey="Stage Start Trigger" title="Stage Start Trigger"><StartTriggerManagement/> </Tab>
     <Tab eventKey="Stage End Trigger" title="Stage End Trigger"><StartTriggerManagement/> </Tab>
 </Tabs>
 </div>
 </div>
  )
}

export default AddStageTabs
