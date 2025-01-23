import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCash({ show, onClose }) {
  return (
  
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} >
      <Modal.Header closeButton>
        <Modal.Title>Day End Summery</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure want to finalize the day end?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
   
  );
}

export default ModalCash;
