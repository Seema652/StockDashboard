import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RegularWorkingDays from './regularWorkingDays/RegularWorkingDays';
import Holidays from './holidays/Holidays';
import Exceptions from './exceptions/Exceptions';
import WorkWeeks from './workWeeks/WorkWeeks';

function EditCalendarTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Regular Working Days" title="Regular Working Days">
        <RegularWorkingDays />
      </Tab>
      <Tab eventKey="HoliDays" title="HoliDays">
        <Holidays/>
      </Tab>
      <Tab eventKey="Exceptions" title="Exceptions">
        <Exceptions />
      </Tab>
      <Tab eventKey="Word Weeks" title="Word Weeks">
        <WorkWeeks />
      </Tab>
    </Tabs>
  );
}

export default EditCalendarTab;