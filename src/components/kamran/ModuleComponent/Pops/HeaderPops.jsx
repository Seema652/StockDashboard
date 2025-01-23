import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabs from './Tabs';

function HeaderPops({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card'>
      <Modal show={show} size={"lg"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Fields Properties</Modal.Title>
        </Modal.Header>
        <div ><Tabs/></div>
        <Modal.Body>
           
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

export default HeaderPops;