import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function SenderPop({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card'>
      <Modal show={show} size={"xl"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Rules</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <div className='card'>
           <form className='row'>
          <div className='col-6'>
            <select className='form-control'>
                <option className='fw-normal' value="">Users Lists</option>
                <option className='fw-normal' value="">kamran</option>
            </select>
          </div>
<div className='col-6'>
    <input type='text' className='form-control' placeholder='E-mail'/>
</div>
           </form>
           
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

export default SenderPop;