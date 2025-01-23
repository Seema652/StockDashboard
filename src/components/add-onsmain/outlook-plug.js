import React from 'react'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function OutLookingPlug() {
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h3 className='tbl-caption text-light'>
                Outlook Plug-in</h3>
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
            
            <div className="d-flex justify-content-center mt-3">
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

export default OutLookingPlug;
