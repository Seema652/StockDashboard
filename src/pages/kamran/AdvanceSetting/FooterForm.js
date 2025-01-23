import JoditEditor from 'jodit-react'
import React, { useMemo, useRef, useState } from 'react'
import { Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function FooterForm() {
    const editor = useRef(null);
	const [content, setContent] = useState('');

	
    const config =  useMemo(() => ({
        
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder:  'Start typings...'
		
    }),[])
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h4 className='tbl-caption text-light'>E-Mail Footer</h4>
        </div>
        <div className='row'>
            <div className='col-4'>
                <input type='text' className='form-control' aria-label='name' placeholder='Name'></input>
            </div>
            <div className='col-4'>
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="fw-normal" for="exampleCheck1">Active For Single Mail</label>
 </div>
 <div className='col-4'>
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="fw-normal" for="exampleCheck1">Active For Mass Mail</label>
 </div>
        </div>
        
        <div className='mt-4'>
      <JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
 </div>
 <div className='mt-3'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
    </div>
  )
}

export default FooterForm
