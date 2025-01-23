import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import tab from "../../assets/images/tab.png";

const WaiterModal = (props) => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (table) => {
    setSelectedTable(table);
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tabs eventKey="VIP Block" title="VIP Block"></Tabs>
              <Tabs eventKey="Family Corner" title="Family Corner">
                Family Corner
              </Tabs>
              <Tabs eventKey="2nd Floor" title="2nd Floor">
                2nd Floor
              </Tabs>
              <Tabs eventKey="112" title="112">
                112
              </Tabs>
            </Tabs>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WaiterModal;
