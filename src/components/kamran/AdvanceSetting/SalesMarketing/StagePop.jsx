import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddStageTabs from './AddStageTabs';



function StagePop({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card'>
      <Modal show={show} size={"xl"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Add Stages</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <div className='card'>
     <div ><AddStageTabs/></div>
           </div>
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

export default StagePop;