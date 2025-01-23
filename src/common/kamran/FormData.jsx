import React, { useState } from 'react'

function FormData() {
    
        const [terminationDate, setTerminationDate] = useState('');
        const [legalFeeAmount, setLegalFeeAmount] = useState('');
        const [rentStatus, setRentStatus] = useState('');
        const [refundAmount, setRefundAmount] = useState('');
        const [contactStatus, setContactStatus] = useState('');
        const [unitStatus, setUnitStatus] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            
            console.log({
                terminationDate,
                legalFeeAmount,
                rentStatus,
                refundAmount,
                contactStatus,
                unitStatus,
            });
        };
    
  return (
    <div className="container mt-5 card" style={{width:"800px"}}>
    <h2>Legal Case Form</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="terminationDate">Termination Date</label>
            <input
                type="date"
                className="form-control rounded-2"
                id="terminationDate"
                value={terminationDate}
                onChange={(e) => setTerminationDate(e.target.value)}
                required
            />
        </div>
        <div className="form-group rounded-2">
            <label htmlFor="legalFeeAmount">Legal Fee Amount</label>
            <input
                type="number"
                className="form-control"
                id="legalFeeAmount"
                placeholder="Enter amount"
                value={legalFeeAmount}
                onChange={(e) => setLegalFeeAmount(e.target.value)}
                required
            />
        </div>
        <div className="form-group rounded-2">
            <label htmlFor="rentStatus">Rent Status</label>
            <select
                className="form-control"
                id="rentStatus"
                value={rentStatus}
                onChange={(e) => setRentStatus(e.target.value)}
                required
            >
                <option value="">Select...</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="pending">Pending</option>
            </select>
        </div>
        <div className="form-group rounded-2">
            <label htmlFor="refundAmount">Refund Amount</label>
            <input
                type="number"
                className="form-control"
                id="refundAmount"
                placeholder="Enter amount"
                value={refundAmount}
                onChange={(e) => setRefundAmount(e.target.value)}
                required
            />
        </div>
        <div className="form-group rounded-2">
            <label htmlFor="contactStatus">Contact Status</label>
            <select
                className="form-control"
                id="contactStatus"
                value={contactStatus}
                onChange={(e) => setContactStatus(e.target.value)}
                required
            >
                <option value="">Select...</option>
                <option value="contacted">Contacted</option>
                <option value="not_contacted">Not Contacted</option>
                <option value="pending">Pending</option>
            </select>
        </div>
        <div className="form-group rounded-2">
            <label htmlFor="unitStatus">Unit Status</label>
            <select
                className="form-control"
                id="unitStatus"
                value={unitStatus}
                onChange={(e) => setUnitStatus(e.target.value)}
                required
            >
                <option value="">Select...</option>
                <option value="occupied">Occupied</option>
                <option value="vacant">Vacant</option>
                <option value="under_maintenance">Under Maintenance</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>

  )
}

export default FormData
