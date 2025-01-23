import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Properties from '../Properties';
import FooterPops from './FooterPops';
import Format from './Format';
function HeaderTabs() {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Field">
      <FooterPops/>
      </Tab>
      <Tab eventKey="profile" title="Properties">
       <Properties/>
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        <Format/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default HeaderTabs
