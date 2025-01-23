import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../../../../common/CustomInputField';

const RegularWorkingDays = () => {
    const [shiftInformation, setShiftInformation] = useState([
        { id: 1, weekDays: "Sunday", fromTime: "", toTime: "" },
        { id: 2, weekDays: "Monday", fromTime: "", toTime: "" }
    ]);
    
    const [shiftName, setShiftName] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');

    // Handle input changes for fromTime and toTime
    const handleShiftInputChange = (index, field, value) => {
        const updatedShifts = [...shiftInformation];
        updatedShifts[index][field] = value;
        setShiftInformation(updatedShifts);
    };

    // Handle adding the same from/to time for all rows
    const applyTimingsToAllDays = () => {
        const updatedShifts = shiftInformation.map(shift => ({
            ...shift,
            fromTime: fromTime,
            toTime: toTime
        }));
        setShiftInformation(updatedShifts);
    };

    // Handle adding a new shift row
    const addShift = () => {
        const newShift = {
            id: shiftInformation.length + 1,
            weekDays: `Day ${shiftInformation.length + 1}`, // Placeholder, you can modify this
            fromTime: '',
            toTime: ''
        };
        setShiftInformation([...shiftInformation, newShift]);
    };

    // Handle removing a row
    const removeShift = (id) => {
        const updatedShifts = shiftInformation.filter(shift => shift.id !== id);
        setShiftInformation(updatedShifts);
    };

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div>
                        <h4 className="bg-black text-light py-1 px-4 fs-4">Shift Information</h4>
                    </div>
                    <div className="row pt-3 px-2">
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="shiftName" className="form-label fs-5">
                                    Shift Name
                                </label>
                                <CustomInputField
                                    type="text" 
                                    id="shiftName" 
                                    value={shiftName} 
                                    onChange={(e) => setShiftName(e.target.value)} 
                                />
                            </div>
                        </div>
    
                        <div className="col-6 text-end">
                            <Link className="text-end" onClick={applyTimingsToAllDays}>
                                Apply all timings to all Days
                            </Link>
                        </div>
                    </div>
                    
                    <div className="row pt-3">
                        <div className="col-12">
                            <table className="table table-striped">
                                <thead >
                                    <tr className=''>
                                        <th className='fs-5'>Select Action</th>
                                        <th className='fs-5'>Week Days</th>
                                        <th className='fs-5'>From Time</th>
                                        <th className='fs-5'>To Time</th>
                                        <th className='fs-5'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shiftInformation.map((shift, index) => (
                                        <tr key={shift.id}>
                                            <td>
                                                <input 
                                                    type="checkbox" 
                                                    checked={shift.selectAction || false} 
                                                    onChange={(e) => handleShiftInputChange(index, 'selectAction', e.target.checked)} 
                                                />
                                            </td>
                                            <td>
                                                {/* Display the weekday as text, not as an input */}
                                                <span>{shift.weekDays}</span>
                                            </td>
                                            <td>
                                                <CustomInputField
                                                    type="time"
                                                    value={shift.fromTime}
                                                    onChange={(e) => handleShiftInputChange(index, 'fromTime', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <CustomInputField
                                                    type="time"
                                                    value={shift.toTime}
                                                    onChange={(e) => handleShiftInputChange(index, 'toTime', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    type='button'
                                                    className="btn btn-success me-2"
                                                    onClick={addShift}
                                                >
                                                    Add
                                                </button>
                                                <button 
                                                type='button' 
                                                    className="btn btn-danger"
                                                    onClick={() => removeShift(shift.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegularWorkingDays;
