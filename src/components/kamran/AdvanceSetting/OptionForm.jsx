import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function OptionForm() {
 
  const [bgColor, setBgColor] = useState('#ffffff'); 

 
  const handleColorChange = (event) => {
    setBgColor(event.target.value); 
  };

  return (
    <div className='card' style={{ backgroundColor: bgColor }}>
      <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light'>Option</h3>
      </div>
      <form>
        <div className='row'>
          <div className='col-6'>
            <select className='form-control' aria-label='select'>
              <option value="">Dashboard</option>
              <option>Marketing</option>
              <option>Revenue</option>
              <option>REMS Dashboard</option>
            </select>
          </div>
          <div className='col-6'>
            <select className='form-control' aria-label='select'>
              <option value="">Landing Screen</option>
              <option>Home</option>
              <option>Home</option>
              <option> Dashboard</option>
            </select>
          </div>
          <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
              <option value="">Task And Calendar Menu Position</option>
              <option>Top</option>
              <option>Bottom</option>
              <option>None Dashboard</option>
            </select>
          </div>
         
          <div className='col-6 mt-2'>
            <label htmlFor='colorPicker' className='fw-normal'>Pick Background Color:</label>
            <input
              id='colorPicker'
              type='color'
              className='form-control'
              value={bgColor}
              onChange={handleColorChange}
            />
          </div>
          <div className='col-6 mt-2'>
            <select className='form-control' aria-label='select'>
              <option value="">Task geolocation for all modules by event</option>
              <option>Save</option>
              <option>Update</option>
              <option>View</option>
              <option>Delete</option>
            </select>
          </div>
          <div className='col-6 d-flex align-itmes-center gap-1'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Evaluate modules rules on add 
            body item
          </label>  </div>
          <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Show Appointment module fields as per
           page layout customization
          </label>  </div>
          <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Validate device IMEI number against user 
            on login into app
          </label>  </div>
          <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light'>Attendance</h3>
      </div>
      <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Track attendance of users on login into app
          </label>  </div>
          <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" disabled id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Track late counts of users with reason
          </label>  </div>
          <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" disabled id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Show Expenses module in Attendance dashboard
          </label>  </div>
          <div className='col-6'>
            <select className='form-control' disabled aria-label='select'>
                <option value=''>Select Modules</option>
                <option>Delivery Notes</option>
                <option>Invocie</option>
                <option>Maintainance</option>
            </select>
          </div>
          <div className='col-6'>
            <select className='form-control' disabled aria-label='select'>
                <option value=''>Auto punch-out setting</option>
                <option>Auto update missing punch-outs </option>
                <option>Auto update missing punch-outs and Logout</option>
               </select>
          </div>
          <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light mt-4'>Activities</h3>
      </div>
      <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Track geolocation of start activity
          </label>  </div>
          <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Track geolocation of end activity
          </label>  </div>
      <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Block activity saving if location is disabled
          </label>  </div>
          <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Show start activity in menu
          </label>  </div>
          <div className='table-responsive active-projects style-1'>
        <h3 className='tbl-caption text-light mt-4'>Other</h3>
      </div>
      <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Allow scan for worklog creation
          </label>  </div>
          <div className='col-6 d-flex align-itmes-center gap-1 mt-2'>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="fw-normal" for="exampleCheck1">Enable Barcode Scanner For Product
          </label>  </div>
          <div className='col-6'>
            <select className='form-control' disabled aria-label='select'>
                <option value=''>Select Modules</option>
                <option>Assets</option>
                <option>Account</option>
                <option>REMS Unit</option>
            </select>
          </div>
          <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Pervious</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Next
          </button>
        </div>
       
                    </div>
                    </form>
    </div>
  );
}

export default OptionForm;
