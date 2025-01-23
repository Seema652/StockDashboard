import React, { useState } from 'react';
import HeaderPops from './HeaderPops';
import Costumepop from './Costumepop';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function GeneralListing() {
    const [show, setShow] = useState(false)
    const [addBody, setAddBody] = useState(false)
    const [open1, setOpen] = useState(false)
    const [General, setGeneral] = useState(0);


    return (
        <div >
            <div className='d-flex justify-content-end mb-3'>
                <DropdownButton id="dropdown-basic-button " title="Add Fields">
                    <Dropdown.Item href="#" onClick={() => setShow(true)}>Add Header Fields</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => setAddBody(true)}>Add Body Fields</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => setOpen(true)}>Add Roll-Up Field</Dropdown.Item>
                </DropdownButton>
            </div>
            <div>
                {show && <HeaderPops show={show} setShow={setShow} />}
            </div>
            <div>
                {addBody && <HeaderPops show={addBody} setShow={setAddBody} />}
            </div>
            <div >
                {open1 && <Costumepop show={open1} setOpen={setOpen} />}
            </div>





            <div className="mt-3">
                <table className="w-100">
                    <tr className="p-1 bg-light">
                        <th className="p-1">


                        </th>
                        <th className="p-1">Module Caption</th>
                        <th className="p-1">Singular Name</th>
                        <th className="p-1">Description</th>
                        <th className="p-1">Allow Audit Trail</th>
                        <th className="p-1">Allow Web Template</th>
                        <th className="p-1">Status</th>

                    </tr>
                    <tr className="border p-1">

                        <td className="p-1">

                        </td>
                        <td className='p-1'>Delivey Note</td>
                        <td className='p-1'>Notes</td>
                        <td className='p-1'>Public</td>
                        <td className='p-1'>Block-A</td>
                        <td className='p-1'></td>
                        <div>
                            <a className="btn btn-primary shadow btn-xs sharp me-1">
                                <i class="fa fa-pencil"> </i>
                            </a>
                            <a class="btn btn-danger shadow btn-xs sharp" >
                                <i class="fa fa-trash">

                                </i>
                            </a>
                        </div>


                    </tr>
                </table>
            </div>

        </div>

    )
}

export default GeneralListing
