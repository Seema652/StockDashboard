import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IfElseTab from './IfElseTab';


function TrackingPop({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card'>
      <Modal show={show} size={"xl"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Create URL Tracker</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <div className='card'>
           <form className='row'>
            <div className='col-6'>
<input type='text' className='form-control' placeholder='Page Url'/>
            </div>
            <div className='col-6'>
<input type='text' className='form-control' placeholder='campaign Medium'/>
            </div>
            <div className='col-6 mt-2'>
<input type='text' className='form-control' placeholder='Campaign Name'/>
            </div>
            <div className='col-6 mt-2'>
<select className='form-control'>
    <option className='fw-normal' value="">Campaign Source</option>
    <option className='fw-normal' value="">Linkendin</option>
    <option className='fw-normal' value="">Radio</option>
</select>
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

export default TrackingPop;