import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import CostumFields from './CostumFields'
import MenuComponent from './MenuComponent'
import Searchoptions from './Searchoptions'
import Authorized from './Authorized'
import WorkFlow from './WorkFlow'

function MarketingCostumTbs() {
  return (
    <div>
      <Tabs
          defaultActiveKey="Custom Fields"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Custom Fields" title="Custom Fields" > <div><CostumFields/></div></Tab>
          <Tab eventKey="Page Layouts" title="Page Layouts" ><MenuComponent/></Tab>
          <Tab eventKey="Search Layouts" title="Search Layouts" ><Searchoptions/></Tab>
          <Tab eventKey="Print Template" title="Print Template"></Tab>
          <Tab eventKey="Authorization" title="Authorization"><Authorized/></Tab>
          <Tab eventKey="Workflow" title="Workflow"><WorkFlow/></Tab>
        </Tabs>
      </div>
  
  )
}

export default MarketingCostumTbs
