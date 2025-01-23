import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CompanyInfo from './companyInfo/CompanyInfo';
import { ContactInfo } from './contactInfo/ContactInfo';
import { LocaleSetting } from './localeSetting/LocaleSetting';

function CompanyInformationForm() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Company Info">
        <CompanyInfo />
      </Tab>
      <Tab eventKey="profile" title="Contact Info">
        <ContactInfo />
      </Tab>
      <Tab eventKey="contact" title="Locale Settings">
        <LocaleSetting />
      </Tab>
    </Tabs>
  );
}

export default CompanyInformationForm;