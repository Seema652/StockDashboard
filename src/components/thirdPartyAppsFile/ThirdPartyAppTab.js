import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GoogleTab from './googelTab/GoogleTab';
import OthersTab from './othersTab/OthersTab';

function ThirdPartyAppTab() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Google">
        <GoogleTab />
      </Tab>
      <Tab eventKey="profile" title="Others">
      <OthersTab />
      </Tab>
    </Tabs>
  );
}

export default ThirdPartyAppTab;