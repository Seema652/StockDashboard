import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabs from './Tabs';
import PropertingForm from './PropertingForm';

function Costumepop({ show, setOpen }) {
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);


  return (
    <div className=''>
      <Modal show={show} size={"lg"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Roll-Up Fields</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='card'>
            <form>
              <div className='row'>
                <div className='col-6'>
                  <input type='text' className='form-control' placeholder='Caption' aria-label='name' />
                </div>
                <div className='col-6'>
                  <input type='text' className='form-control' placeholder='Name' aria-label='name' />
                </div>
                <div className='col-6 mt-2'>
                  <input type='Number' className='form-control' placeholder='Number of Decimal' aria-label='name' />
                </div>
                <div className='col-6 mt-2'>
                  <select
                    className="form-control"
                    name="work">
                    <option value="" >Related Modules</option>
                    <option>Account</option>
                    <option>Activities</option>
                    <option>Agent</option>
                  </select>
                </div>
                <div className='col-6 mt-2'>
                  <select
                    className="form-control"
                    name="work">
                    <option value="" >Field to Aggregate</option>
                    <option>Account</option>
                    <option>Activities</option>
                    <option>Agent</option>
                  </select>
                </div>
                <div className='col-6 mt-2'>
                  <select
                    className="form-control"
                    name="work">
                    <option value="" >Aggregation Type</option>
                    <option>Account</option>
                    <option>Activities</option>
                    <option>Agent</option>
                  </select>
                </div>
              </div>
         <div className='mt-2' style={{color:"black"}}><PropertingForm/></div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Costumepop;