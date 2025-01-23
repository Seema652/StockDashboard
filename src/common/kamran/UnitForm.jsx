import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const UnitForm = () => {
    const [opportunity, setOpportunity] = useState('');
    const [account, setAccount] = useState('');
    const [venture, setVenture] = useState('');
    const [property, setProperty] = useState('');
    const [block, setBlock] = useState('');
    const [unit, setUnit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            opportunity,
            account,
            venture,
            property,
            block,
            unit,
        };
        console.log('Form submitted:', formData);
        // Reset form
        setOpportunity('');
        setAccount('');
        setVenture('');
        setProperty('');
        setBlock('');
        setUnit('');
    };

    return (
        <div className="container mt-4 w-50">
            <h2>Unit Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Opportunity:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={opportunity}
                        onChange={(e) => setOpportunity(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Account:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Venture:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={venture}
                        onChange={(e) => setVenture(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Property:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={property}
                        onChange={(e) => setProperty(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Block:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={block}
                        onChange={(e) => setBlock(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Unit:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UnitForm;
