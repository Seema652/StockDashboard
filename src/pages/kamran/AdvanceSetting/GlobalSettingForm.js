import React from 'react'
import { Link } from 'react-router-dom'
function GlobalSettingForm() {
    return (

        <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
            <div className='table-responsive active-projects style-1' >
                <h3 className='tbl-caption text-light'>
                    Global Setting</h3>
            </div>
            <form className='row'>
                <h6 className='border-bottom'>Enter View </h6>
                <div class="mb-3 form-check col-6">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Search only on Name or
                        Code fields on Dollar search</label>
                </div>
                <div class="mb-3 form-check col-6">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Edit module record in exclusive 
                        mode for</label>
                </div>
                <div class="mb-3 form-check col-6">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1"> Show list view after new 
                        record save</label>
                </div>
                <div class="mb-3 form-check col-6">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1"> Show validation messages 
                        in alert box</label>
                </div>
                <div class="mb-3 form-check col-6">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1"> Align Field 
                        captions to left in Edit view
                    </label>
                    </div>
                    <div className='mb-3 form-check col-6'>
                    <input type="text" class="form-control" id="modulename" aria-describedby="modulename"
                    placeholder='Allowed file extensions' /></div>
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Show checkbox field label on left side</lable>
                    </div>
                    <div className='mb-3 form-check col-6'>
                    <input type="text" class="form-control" id="modulename" aria-describedby="modulename"
                    placeholder='Default rows in Body Table' /></div>
                    <h6 className='border-bottom'>Details View</h6>
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Disable List View for</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Do not show related module actions in list view</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Do not remember List view Filter</lable>
                    </div> 
                    <h6 className='border-bottom'>General</h6>
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Enable Print from browser (only for Chrome)</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Allow multiple SMTP service</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Enable Finance module</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Do not show notifications of deleted records</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Do not attach mail reply from Quote/ Sales Order to Opportunity</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='text' className='form-control' id='example1'
                         placeholder='Epbx unknown number create new'/>
                    </div>
                    <div className='mb-3 form-check col-6'>
                        <input type='text' className='form-control' id='example1'
                         placeholder='Epbx unknown number add to existing'/>
                    </div>
                    <h6 className='border-bottom'>List View</h6>
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Disable List View for</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Do not remember List view Filter</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Do not show related module actions in list view</lable>
                    </div> 
                    <h6 className='border-bottom'>Reports</h6>
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Show reports in auto fit mode by default</lable>
                    </div> 
                    <div className='mb-3 form-check col-6'>
                        <input type='checkbox' className='form-check-input' id='examplecheck1'/>
                        <lable className="form-check-label" for="examplecheck1">
                        Send reports in auto fit mode</lable>
                    </div> 
                    <div>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
            </form>
        </div>
    )
}

export default GlobalSettingForm
