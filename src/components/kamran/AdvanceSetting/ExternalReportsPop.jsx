import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ExternalReportspop({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card'>
      <Modal show={show} size={"lg"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Report Parameter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <form>
        <div className='row'>
            <div className='col-6'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Parameter Name'/>
            </div>
            <div className='col-6'>
                <select className='form-control' aria-label='select'>
                    <option className='fs-normal'>Parameter Type</option>
                    <option value="normal">Normal</option>
                    <option value="master">Master</option>
                </select>
            </div>
            <div className='col-6 mt-2'>
                <select className='form-control' aria-label='select'>
                    <option className='fs-normal'>Display Control Type</option>
                    <option value="normal">Text</option>
                    <option value="master">As On Time</option>
                </select>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='External Key'/>
            </div>
            <div className='col-6 mt-2'>
                <input type='text' className='form-control' aria-label='name'
                placeholder='Default Value'/>
            </div>
        </div>
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

export default ExternalReportspop;