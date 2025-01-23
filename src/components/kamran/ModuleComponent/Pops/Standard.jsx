import React from 'react'
import Listing from './Listing'
import { Tab, Tabs } from 'react-bootstrap'

function Standard() {
  return (
    <div>
    <div>
      <Tabs
        defaultActiveKey="Fields"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Fields" title="Standard Fields" ><div className=''style={{color:"black"}}><Listing/></div> </Tab>
        <Tab eventKey="Rules" title="Custom Fields" ><div className=''style={{color:"black"}}><Listing/></div></Tab>
      </Tabs>
    </div>
  </div>
  )
}

export default Standard
