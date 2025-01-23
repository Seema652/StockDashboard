import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Tracking from './Tracking';
import Scoring from './Scoring';
import EmailAdd from './EmailAdd';
import BlockedDomains from './BlockedDomains';
import SenderAdd from './SenderAdd';
import FormRestrect from './FormRestrect';
import TrackingText from './TrackingText';

function Leading() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div style={{ width: '800px' }}>
        <Tabs
          defaultActiveKey="Tracking URL"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Tracking URL" title="Tracking URL"><Tracking/></Tab>
          <Tab eventKey="Page Layouts" title="Engagement Scoring"><Scoring/></Tab>
          <Tab eventKey="Search Layouts" title="Blocked Email Address"><EmailAdd/></Tab>
          <Tab eventKey="Print Template" title="Blocked Email Domains"><BlockedDomains/></Tab>
          <Tab eventKey="Authorization" title="Restrict Email Senders"><SenderAdd/></Tab>
          <Tab eventKey="Workflow" title="From Address Restriction"><FormRestrect/></Tab>
          <Tab eventKey="Tracking Script" title="Tracking Script"><TrackingText/> </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Leading;
