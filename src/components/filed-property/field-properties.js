import React from "react";
import { Tabs, Tab } from "react-bootstrap"; // Ensure to install react-bootstrap if not already installed
import Fields from "../../pages/field-prop-pages/field";
import FieldPropertie from "../../pages/field-prop-pages/field-properties";
import Format from "../../pages/field-prop-pages/format";

function FieldProperties() {
  return (

    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">Field Properties</h2>
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Field">
          <Fields />
        </Tab>
        <Tab eventKey="profile" title="Properties">
          <FieldPropertie/>
        </Tab>
        <Tab eventKey="contact" title="Format">
          <Format />
        </Tab>
      </Tabs>
    </div>
    </div>
    </div>
  );
}

export default FieldProperties;
