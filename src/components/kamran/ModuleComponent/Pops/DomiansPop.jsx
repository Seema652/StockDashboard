import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function DomainsPop({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card'>
      <Modal show={show} size={"xl"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Blocked Emails Domains</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <div className='card'>
          <div className='row'>
            <div className='col-6'>
          <input type='text' className='form-control p-2 ' placeholder='Domain Name' aria-label='name'/>
          </div>
          <div className='col-6'>
          <input type='text' className='form-control p-2 ' placeholder='Domain Name' aria-label='Notes'/>
          </div>
          </div>
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

export default DomainsPop;