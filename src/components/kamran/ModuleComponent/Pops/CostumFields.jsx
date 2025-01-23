import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Standard from './Standard'
import NewRules from './NewRules'


function CostumFields() {
  return (
    <div>
    <div>
      <Tabs
        defaultActiveKey="Fields"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Fields" title="Fields" ><div className=''><Standard/></div> </Tab>
        <Tab eventKey="Rules" title="Rules" ><NewRules/></Tab>
      </Tabs>
    </div>
  </div>
  )
}

export default CostumFields
