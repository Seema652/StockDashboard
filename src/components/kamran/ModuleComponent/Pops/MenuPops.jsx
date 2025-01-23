import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import TabsLayout from './TabsLayout';

function MenuPops({ setAllow, allow }) {
  const handleClose = () => setAllow(false);

  return (
    <div className="card">
      <Modal show={allow} size="lg" centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="border-bottom p-2 fw-normal">Report Parameter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <TabsLayout/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MenuPops;
