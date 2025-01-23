import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import LayouttTabs from './LayouttTabs'
import PropertingForm from './PropertingForm'
import Customize from '../../AdvanceSetting/Customize'
import ApplicationRo from '../../ApplicationRo'
import RelatedsTabs from './RelatedsTabs'

function TabsLayout(){
  return (
    <div>
      <Tabs
          defaultActiveKey="Layout Details"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Custom Fields" title="Layout Details" > <LayouttTabs/></Tab>
          <Tab eventKey="Page Layouts" title="Fields List" ><div style={{color:"black"}}><PropertingForm/></div></Tab>
          <Tab eventKey="Search Layouts" title="Fields Layouts" ><Customize/></Tab>
          <Tab eventKey="Print Template" title="Related Modify"><ApplicationRo/></Tab>
          <Tab eventKey="Authorization" title="Related Layout"><RelatedsTabs/></Tab>
          <Tab eventKey="Workflow" title="Reports"><ApplicationRo/></Tab>
        </Tabs>
      </div>
  
  )
}

export default TabsLayout
