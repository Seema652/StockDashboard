import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import If from './If'
import Else from './Else'

function IfElseTab() {
  return (
    <div>

    <div>
<Tabs
   defaultActiveKey="If"
   id="uncontrolled-tab-example"
   className="mb-3"
 >
     <Tab eventKey="If" title="If"><If/> </Tab>
     <Tab eventKey="Else" title="Else"><Else/> </Tab>
 </Tabs>
 </div>
 </div>
  )
}

export default IfElseTab
