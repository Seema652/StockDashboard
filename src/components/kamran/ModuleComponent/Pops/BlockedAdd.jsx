import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function BlockedAdd({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card'>
      <Modal show={show} size={"xl"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>locked Email Address</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <div className='card'>
           <form className='row'> 
           <div className='col-6'>
<input type='text' className='form-control' placeholder='Page Url'/>
            </div>
            <div className='col-6'>
<input type='text' className='form-control' placeholder='Reason'/>
            </div>
            <div className='col-6 mt-2'>
<input type='text' className='form-control' placeholder='Notes'/>
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

export default BlockedAdd;