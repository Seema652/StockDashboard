import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TemplateDetails from "./templateDetails/TemplateDetails";
import Attachments from "./attachments/Attachments";

function EditEmailTemplates() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          {/* <h4 className="bg-black rounded fs-4 text-light py-2 px-4">
            New Email Templates
          </h4> */}
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Template Details" title="Template Details">
              <TemplateDetails />
            </Tab>
            <Tab eventKey="Template Body" title="Template Body">
              Tab content for Contact
            </Tab>
            <Tab eventKey="Attachments" title="Attachments">
              <Attachments />
            </Tab>
            <Tab eventKey="Preview" title="Preview">
              Tab content for Contact
            </Tab>
          </Tabs>
          <div className="row mt-3">
              <div className="mt-3">
                <button type="button" class="btn btn-primary fs-5">
                  Preview
                </button>
                <button type="button" class="btn btn-primary fs-5">
                  Next
                </button>
                <button type="button" class="btn btn-primary fs-5">
                  Finish
                </button>
                <button type="button" class="btn btn-primary fs-5">
                  Cancel
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmailTemplates;
