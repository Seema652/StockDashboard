
import Accordion from 'react-bootstrap/Accordion';
import CompanyAccordianList from './companyAccordianList/CompanyAccordianList';

function CompanyuSettingMian() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Company Settings</Accordion.Header>
        <Accordion.Body>
         <CompanyAccordianList />   
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CompanyuSettingMian;