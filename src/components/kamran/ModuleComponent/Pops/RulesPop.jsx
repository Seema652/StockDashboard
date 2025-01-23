import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IfElseTab from './IfElseTab';


function RulesPop({setShow, show}) {
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
           <form>
            <div className='row'>
                <input type='text' className='form-control p-2 mb-2' placeholder='Name' aria-label='name'/>  
            <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">Creating Groups</label>
                </div>
                <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">Load</label>
                </div>
                <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">New Record</label>
                </div>
                <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">Edit</label>
                </div>
                <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">Before Save</label>
                </div>
                <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">Before Delete</label>
                </div>
                <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">On Enter</label>
                </div>
                <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">On Leave</label>
                </div>
                <div className="col-4 form-check">
                 <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">No Conition</label>
                </div>
            </div>
           </form>
           <div className='mt-2'>
            <IfElseTab/>
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

export default RulesPop;