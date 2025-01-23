import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function FrequencyForm() {
    const [check, setCheck] = useState(false);
    const [selectedFrequency, setSelectedFrequency] = useState(null);

    const handleCheck = (num) => {
        setCheck(num);
    }

    const handleFrequencyChange = (event) => {
        setSelectedFrequency(event.target.value);
    }

    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h4 className='tbl-caption text-light'>New Frequency Template</h4>
            </div>
            <h6 className='border-bottom mb-3 p-2'>Frequency Template Details</h6>
            <div className=''>
                <form>
                    <div style={{ width: "400px" }}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name"
                        />
                    </div>

                    <div className='d-flex gap-2 mt-2'>
                        <div className='d-flex align-items-center gap-1'>
                            <input
                                type='radio'
                                className='form-check-input'
                                name='day'
                                id='daily'
                                checked={selectedFrequency === 'daily'}
                                onChange={handleFrequencyChange}
                                value="daily"
                            />
                            <label className="form-check-label" htmlFor="daily">Daily</label>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <input
                                type='radio'
                                className='form-check-input'
                                name='day'
                                id='weekly'
                                checked={selectedFrequency === 'weekly'}
                                onChange={handleFrequencyChange}
                                value="weekly"
                            />
                            <label className="form-check-label" htmlFor="weekly">Weekly</label>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <input
                                type='radio'
                                className='form-check-input'
                                name='day'
                                id='monthly'
                                checked={selectedFrequency === 'monthly'}
                                onChange={handleFrequencyChange}
                                value="monthly"
                            />
                            <label className="form-check-label" htmlFor="monthly">Monthly</label>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <input
                                type='radio'
                                className='form-check-input'
                                name='day'
                                id='yearly'
                                checked={selectedFrequency === 'yearly'}
                                onChange={handleFrequencyChange}
                                value="yearly"
                            />
                            <label className="form-check-label" htmlFor="yearly">Yearly</label>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <input
                                type='radio'
                                className='form-check-input'
                                name='day'
                                id='periodic'
                                checked={selectedFrequency === 'periodic'}
                                onChange={handleFrequencyChange}
                                value="periodic"
                            />
                            <label className="form-check-label" htmlFor="periodic">Periodic</label>
                        </div>
                    </div>

                    <div className='card mt-3'>
                        <h6>Daily Task Scheduling</h6>
                        <div className='d-flex align-items-center gap-1'>
                            <input
                                type='radio'
                                className='form-check-input'
                                name='time'
                                id='weekday'
                                checked={check === true}
                                onChange={() => handleCheck(true)}
                            />
                            <label className="form-check-label" htmlFor="weekday">Every Weekday</label>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="time"
                                id="ever"
                                checked={check === false}
                                onChange={() => handleCheck(false)}
                            />
                            <label className="form-check-label" htmlFor="ever">Ever</label>

                            <div className="d-flex align-items-center gap-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="time-input"
                                    disabled={check} 
                                    id="timeInput"
                                    placeholder="Enter"
                                />
                            </div>
                        </div>
                        </div>
                        <div className='card'>
                        <div className="d-flex align-items-center gap-1">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="time"
                                id="end after"
                                checked={check === false}
                                onChange={() => handleCheck(false)}
                            />
                            <label className="form-check-label" htmlFor="ever">End After</label>

                            <div className="d-flex align-items-center gap-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="time-input"
                                    disabled={check} 
                                    id="timeInput"
                                    placeholder="Enter"
                                />
                            </div>
                        </div>
                        <div className='d-flex align-item-center gap-1' style={{width:"300px", paddingTop:"10px"}}>
                          <input type='date'
                          className='form-control'
                          id='date'
                          placeholder='End By'/>
                        </div>
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
        </div>
    );
}

export default FrequencyForm;
