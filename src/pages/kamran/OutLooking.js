import React from 'react'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function OutLooking() {
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h3 className='tbl-caption text-light'>My Out Looking Setting</h3>
            </div>
            <div className='card'>
                <div className=''>
                    <h5 className=''>CentraCRM - outlook Plug-in installation </h5>
                    <p> 1. Download and install the outlook plug-in from this page.<br />2. For syncing outlook
                        data to CRM use the following setting in outlook Plugin <br />
                        http://DomainName:Port or http://Server-IPAddress:Port <br />

                        (Outlook sync must be enabled in the Outlook Integration Settings page)</p>
                </div>
                <div className=''>
                    <FaDownload size={80} />
                </div>
            </div>
            <h6 className='border-bottom '>Setting</h6>
            <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
                <div class=" form-check col-4">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">sync contact to account</label>
                </div>
                <div className='from-group col-4 '>
                    <label htmlFor='repeat'></label>
                    <select type="text" class="form-control" id="application" aria-describedby="application">
                        <option value="">-1</option>
                    </select>
                    </div>
                    <div className='from-group col-4'>
                    <p>(In case mandatory fields not found)</p>
                    </div>
                    <div class=" form-check col-4">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">sync task to account</label>
                </div>
                <div className='from-group col-4 '>
                    <label htmlFor='repeat'></label>
                    <select type="text" class="form-control" id="application" aria-describedby="application">
                        <option value="">-1</option>
                    </select>
                    </div>
                    <div className='from-group col-4'>
                    <p>(In case mandatory fields not found)</p>
                    </div>
                </div>
                <div style={{margin:"10px 0"}}>
     <Link to="/formcancel" class="btn btn-lg btn-primary" disabled>Save</Link>
     <button type="button" class="btn btn-secondary btn-lg" disabled>Cancel</button>
     </div>
        </div>
    )
}

export default OutLooking
