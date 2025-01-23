import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const NewTransfer = () => {
    const [BookingNo, setBookingNo] = useState('');
    const [Venture, setVenture] = useState('');
    const [Property, setProperty] = useState('');
    const [OldBlock, setOldBlock] = useState('');
    const [OldFloor, setOldFloor] = useState('');
    const [OldUnitArea, setOldUnitArea] = useState('');
    const [OldSellingPrice, setOldSellingPrice] = useState('');
    const [NewBlock, setNewBlock] = useState('');
    const [NewFloor, setNewFloor] = useState('');
    const [NewUnit, setNewUnit] = useState('');
    const [NewUnitArea, setNewUnitArea] = useState('');
    const [NewSellingPrice, setNewSellingPrice] = useState('');
    const [DiffInArea, setDiffInArea] = useState('');
    const [DiffInPrice, setDiffInPrice] = useState('');
    const [OpportunityNo, setOpportunityNo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ BookingNo, Venture, Property,  });
    };

    return (
      
        <div className="container mt-5 w-50  ">
          
              <form className='row' onSubmit={handleSubmit}>
                <div className="mb-3 col-6">
                    <label className="form-label">Booking No</label>
                    <input type="text" className="form-control" value={BookingNo} onChange={(e) => setBookingNo(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Venture</label>
                    <input type="text" className="form-control" value={Venture} onChange={(e) => setVenture(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Property</label>
                    <input type="text" className="form-control" value={Property} onChange={(e) => setProperty(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Old Block</label>
                    <input type="text" className="form-control" value={OldBlock} onChange={(e) => setOldBlock(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Old Floor</label>
                    <input type="text" className="form-control" value={OldFloor} onChange={(e) => setOldFloor(e.target.value)} />
                </div>
                <div className="mb-3 col-6 ">
                    <label className="form-label">Old Unit Area</label>
                    <input type="text" className="form-control" value={OldUnitArea} onChange={(e) => setOldUnitArea(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Old Selling Price</label>
                    <input type="text" className="form-control" value={OldSellingPrice} onChange={(e) => setOldSellingPrice(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">New Block</label>
                    <input type="text" className="form-control" value={NewBlock} onChange={(e) => setNewBlock(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">New Floor</label>
                    <input type="text" className="form-control" value={NewFloor} onChange={(e) => setNewFloor(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">New Unit</label>
                    <input type="text" className="form-control" value={NewUnit} onChange={(e) => setNewUnit(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">New Unit Area</label>
                    <input type="text" className="form-control" value={NewUnitArea} onChange={(e) => setNewUnitArea(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">New Selling Price</label>
                    <input type="text" className="form-control" value={NewSellingPrice} onChange={(e) => setNewSellingPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Difference in Area</label>
                    <input type="text" className="form-control" value={DiffInArea} onChange={(e) => setDiffInArea(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Difference in Price</label>
                    <input type="text" className="form-control" value={DiffInPrice} onChange={(e) => setDiffInPrice(e.target.value)} />
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Opportunity No</label>
                    <input type="text" className="form-control" value={OpportunityNo} onChange={(e) => setOpportunityNo(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
       
    );
};

export default NewTransfer;
