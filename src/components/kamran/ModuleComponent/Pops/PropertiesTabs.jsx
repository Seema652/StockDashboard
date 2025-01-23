import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import PropertingForm from './PropertingForm'
import MessagingForm from './MessagingForm'

function PropertiesTabs() {
  return (
    <div>
        <div>
     <Tabs
   defaultActiveKey="Properting"
   id="uncontrolled-tab-example"
   className="mb-3"
 >
     <Tab eventKey="If" title="Properting"> <div style={{color:"black"}}><PropertingForm/></div> </Tab>
     <Tab eventKey="Messaging" title="Messaging"><div><MessagingForm/></div> </Tab>
     <Tab eventKey="Alerts" title="Alerts"><div style={{color:"black"}}><PropertingForm/></div> </Tab>
     <Tab eventKey="Formatting" title="Formatting"><div style={{color:"black"}}><PropertingForm/></div> </Tab>
 </Tabs>
 </div>
    </div>
  )
}

export default PropertiesTabs
