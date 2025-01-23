import JoditEditor from 'jodit-react';
import { useMemo, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Letterpop({setShow, show}) {
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editor = useRef(null);
	const [content, setContent] = useState('');

	
    const config =  useMemo(() => ({
        
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder:  'Start typings...'
		
    }),[])
  

  return (
    <div className='card'>
      <Modal show={show} size={"lg"} centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='border-bottom p-2 fw-normal'>Font</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="font">Font</option>
                <option className='fw-normal' value="arial">Arial</option>
                <option className='fw-normal' value="default">Default</option>
              </select>
            </div>
            <div className='col-6'>
              <select className='form-control' aria-label='select'>
                <option className='fw-normal' value="font-size">Font-Size</option>
                <option className='fw-normal' value="2px">2px</option>
                <option className='fw-normal' value="4px">4px</option>
              </select>
            </div>
          </div>
        <div className='mt-2'>
      <JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
 </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Apply
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Letterpop;