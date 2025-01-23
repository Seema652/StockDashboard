import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GeneralListing from './GeneralListing';
import RulesTabs from './RulesTabs';
function FrTabs() {
  return (
    <div>
      <div>
        <Tabs
          defaultActiveKey="Fields"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Fields" title="Fields" ><div style={{color:"black"}}><GeneralListing /></div> </Tab>
          <Tab eventKey="Rules" title="Rules" > <RulesTabs /></Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default FrTabs
