import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function StageForm2() {
    const [formData, setFormData] = useState({
        stageName: '',
        color: '',
        code: '',
        description: '',
        isActive: false,
        allowOnApproved: false,
        allowPreviousStage: false,
        assignTo: '',
        assignType: '',
        allowPick: false,
        sharingTo: '',
        sharingType: '',
        allowRelease: false,
        preRequisites: [],
        preReqStage: '',
        preReqAction: ''
    });

    // Handle form data change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

   
    const addPreRequisite = () => {
        if (formData.preReqStage && formData.preReqAction) {
            setFormData(prevState => ({
                ...prevState,
                preRequisites: [
                    ...prevState.preRequisites,
                    { stage: formData.preReqStage, action: formData.preReqAction }
                ],
                preReqStage: '',  
                preReqAction: '' 
            }));
        }
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="card">
            
            <form onSubmit={handleSubmit}>

               
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Stage Name</label>
                            <input
                                type="text"
                                name="stageName"
                                value={formData.stageName}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter stage name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Color</label>
                            <input
                                type="color"
                                name="color"
                                value={formData.color}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Code</label>
                            <input
                                type="text"
                                name="code"
                                value={formData.code}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter code"
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter description"
                            />
                        </div>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleInputChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Is Active</label>
                        </div>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                name="allowOnApproved"
                                checked={formData.allowOnApproved}
                                onChange={handleInputChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Allow on Approved Module Only</label>
                        </div>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                name="allowPreviousStage"
                                checked={formData.allowPreviousStage}
                                onChange={handleInputChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Do not allow to select previous stages</label>
                        </div>
                    </div>
                </div>

               
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Assign To</label>
                            <input
                                type="text"
                                name="assignTo"
                                value={formData.assignTo}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Assign to"
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label>Assign Type</label>
                            <input
                                type="text"
                                name="assignType"
                                value={formData.assignType}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Assign type"
                            />
                        </div>
                    </div>
                </div>

              
                <div className="row">
                    <div className="col-6">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name="allowPick"
                                checked={formData.allowPick}
                                onChange={handleInputChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Allow Pick</label>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <label>Sharing To</label>
                            <input
                                type="text"
                                name="sharingTo"
                                value={formData.sharingTo}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Sharing to"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Sharing Type</label>
                            <input
                                type="text"
                                name="sharingType"
                                value={formData.sharingType}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Sharing type"
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name="allowRelease"
                                checked={formData.allowRelease}
                                onChange={handleInputChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Allow Release</label>
                        </div>
                    </div>
                </div>

               
                <div className="mt-3">
                    <h6>Pre-requisite Stages</h6>
                    <div className="form-group">
                        <label>Select Stage</label>
                        <input
                            type="text"
                            name="preReqStage"
                            value={formData.preReqStage}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Select stage"
                        />
                    </div>

                    <div className="form-group">
                        <label>Pre-requisite Action</label>
                        <input
                            type="text"
                            name="preReqAction"
                            value={formData.preReqAction}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Pre-requisite action"
                        />
                    </div>

                  

                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Pre-requisite Stage</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.preRequisites.map((preReq, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{preReq.stage}</td>
                                    <td>{preReq.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Save
          </button>
        </div>
               
            </form>
        </div>
    );
}

export default StageForm2;
