import React, { useState } from 'react'
import { FaGoogleDrive } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Letterpop from './Letterpop';

function PreviewForm() {
    const [show, setShow] = useState(false);
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h4 className='tbl-caption text-light'>Preview</h4>
            </div>
            <form className='d-flex gap-3'>
                <div className='border p-3' style={{ width: "250px" }}>
                    <div className='mt-2'>
                        <select className='form-control' aria-label='select'>
                            <option className='fw-normal' value="themes">Themes</option>
                            <option className='fw-normal' value="default">Default</option>
                            <option className='fw-normal' value=""></option>
                        </select>
                    </div>
                    <div className='mt-2'>
                        <input className='form-control' type='text' aria-label='text' placeholder='Themes' />
                    </div>
                    <div className='border mt-2'>
                        <h6 className='text-center fw-normal'>Logo Image</h6>
                        <div className='d-flex align-items-center gap-1 '>
                            <div className=''>
                                <FaGoogleDrive size={30} />
                            </div>
                            <input type='file' className='border border-primary ' style={{ width: "170px" }} />
                        </div>
                        <p className='text-center'>(Max:-100 Kb)</p>
                        <div className='d-flex gap-2 align-items-center'>
                            <p className=''>Position</p>
                            <div className=''>
                                <select className='form-control' aria-label='select'>
                                    <option className='fw-normal' value="top">Top</option>
                                    <option className='fw-normal' value="bottom">Bottom</option>
                                    <option className='fw-normal' value="both">Both</option>
                                </select>
                            </div>
                            <div className=''>
                                <select className='form-control' aria-label='select'>
                                    <option className='fw-normal' value="align">Align</option>
                                    <option className='fw-normal' value="left">Left</option>
                                    <option className='fw-normal' value="right">Right</option>
                                    <option className='fw-normal' value="center">Center</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='border mt-2'>
                        <p className='text-center'>Survey Background</p>
                        <div className='d-flex align-items-center gap-1 '>
                            <div className=''>
                                <FaGoogleDrive size={30} />
                            </div>
                            <input type='file' className='border border-primary ' style={{ width: "170px" }} />
                        </div>
                        <p className='text-center'>(Max:-100 Kb)</p>
                        <Link className="text-primary border-bottom"
                            role="text" aria-controls="offcanvasExample" onClick={() => setShow(true)}>+ Body Style</Link>
                        <div className='mt-2'>
                            <Link className="text-primary border-bottom"
                                role="text" aria-controls="offcanvasExample" onClick={() => setShow(true)}>+ Title Style</Link>
                        </div>
                    </div>
                    <div className='border mt-2'>
                        <p className='text-center'>Other Style</p>
                        <div className='mt-2'>
                            <Link className="text-primary border-bottom"
                                role="text" aria-controls="offcanvasExample" onClick={() => setShow(true)}>+ Section Heading</Link>
                        </div>
                        <div className='mt-2'>
                            <Link className="text-primary border-bottom"
                                role="text" aria-controls="offcanvasExample" onClick={() => setShow(true)}>+ Question Title</Link>
                        </div>
                        <div className='mt-2'>
                            <Link className="text-primary border-bottom"
                                role="text" aria-controls="offcanvasExample" onClick={() => setShow(true)}>+ Choice Title</Link>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button
                            className="btn btn-primary me-1 mt-2"
                            type="submit">
                            Save
                        </button>
                    </div>
                </div>
                <div>
                    {show && <Letterpop show={show} setShow={setShow} />}
                </div>
                <div className='border'style={{width:"700px"}}>
                    <p className='border bg-secondary text-light fw-bold text-center'
                    >Preview May Not Apply All The Properties</p>
                    <p className='text-center fw-bold fs-1'>Test</p>
                </div>
 </form>
 <div className='mt-2'style={{width:""}}>
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

export default PreviewForm
