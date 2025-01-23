import React from 'react'
import { SiGooglesearchconsole } from "react-icons/si";
import { Button } from 'react-bootstrap';
import { SlCalender } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import { FaGoogleDrive } from "react-icons/fa";
function SocialApp() {
  return (
    <div className='card'>
        <div className='table-responsive active-projects style-1' >
        <h3 className='tbl-caption text-light'>My Change Tabs</h3>
        </div>
        <div className='row '>
          <div className='card col-3'>
            <div className=''style={{textAlign:"center", marginBottom:"2px"}}>
            <SiGooglesearchconsole size={80} />
            </div>
            <div className='card bg-dark text-white'>
              <p className='text-light'>Sync your contacts in your CRM with your Google Contacts.</p>
              <button type="button" class="btn btn-lg btn-primary text-light" disabled>Enable</button>
              </div>
          </div>
          <div className='card col-3'>
            <div className=''style={{textAlign:"center", marginBottom:"2px"}}>
            <SlCalender  size={80}/>
            </div>
            <div className='card bg-dark text-white'>
             <p className='text-light'>By enabling access to your Google Calendar, well automatically sync your events
               in your Google Calendar with CRM Calendar.</p>
               <button type="button" class="btn btn-lg btn-primary text-light" disabled>Disable</button>
               <button type="button" class="btn btn-lg btn-primary text-light" disabled>Sync Google Event</button>
              </div>
          </div>
          <div className='card col-3 '>
            <div className=''style={{textAlign:"center", marginBottom:"2px"}}>
            <CgMail size={120} />
            </div>
            <div className='card bg-dark text-white'>
              <p className='text-light'>Sync your mails in your CRM with your Gmail.</p>
              <button type="button" class="btn btn-lg btn-primary text-light" disabled>Disable</button>
              </div>
          </div>
          <div className='card col-3'>
            <div className=''style={{textAlign:"center", marginBottom:"2px"}}>
            <FaGoogleDrive size={80}/>
            </div>
            <div className='card bg-dark text-white'>
               <p className='text-light'>Sync your files in your CRM with your Google Drive.</p>
               <button type="button" class="btn btn-lg btn-primary text-light" disabled>Disable</button>
              </div>
          </div>
        </div>
      </div>
  )
}

export default SocialApp
