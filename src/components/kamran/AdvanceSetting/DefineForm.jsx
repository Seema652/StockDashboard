import React from 'react'
import { Link } from 'react-router-dom'
function DefineForm() {
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h4 className='tbl-caption text-light'>Define</h4>
            </div>
            <form>
                <div className='row'>
                    <div className='col-6 '>
                        <input type='text' className='form-control' aria-label='input'
                            placeholder='Survey Name' />
                    </div>
                    <div className='col-6'>
                        <select className='form-control' aria-label='select'>
                            <option className="fw-normal" value="survey type">Survey Type</option>\
                            <option className='fw-normal' value="generic">Generic</option>
                            <option className='fw-normal' value="module specific">Module Specific</option>
                        </select>
                    </div>
                    <div className='col-6 mt-2'>
                    <textarea class="form-control" placeholder="Description" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea"></label>
                    </div>
                    <div className='col-6 mt-2'>
                    <textarea class="form-control" placeholder="Message On Submit" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea"></label>
                    </div>
                    <div className='col-6 mt-2'>
                    <textarea class="form-control" placeholder="Message On Skip" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea"></label>
                    </div>
                    <div className='col-6 mt-2 d-flex align-items-center gap-2'>
                        <input type='checkbox' className='form-check-input' value=""
                        id='flexCheckDefault'/>
                        <label className='fw-normal'id='flexCheckDefault'>Randomize Question</label>
                    </div>
                    <div className='col-6 '>
                        <input type='date' className='form-control' aria-label='date'
                        value="date"/>
                    </div>
                    <div className='col-6 '>
                        <input type='date' className='form-control' aria-label='date'
                        value="date"/>
                    </div>
                </div>
                <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Next
          </button>
        </div>
            </form>
        </div>
    )
}

export default DefineForm
