import React, { useState } from 'react';

function ActionTabs() {
  const [quoteAction, setQuoteAction] = useState('');
  const [salesOrderAction, setSalesOrderAction] = useState('');

  const handleQuoteChange = (e) => {
    setQuoteAction(e.target.value);
  };

  const handleSalesOrderChange = (e) => {
    setSalesOrderAction(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Stage Mapping</h4>

        {/* On Quote Creation */}
        <div className="mb-3">
          <label htmlFor="quoteCreation" className="form-label">
            On Quote Creation
          </label>
          <select
            id="quoteCreation"
            className="form-select"
            value={quoteAction}
            onChange={handleQuoteChange}
          >
            <option value="">-- Select Action --</option>
            <option value="createInvoice">Create Invoice</option>
            <option value="sendNotification">Send Notification</option>
            <option value="assignTask">Assign Task</option>
          </select>
        </div>

        {/* On Sales Order Creation */}
        <div className="mb-3">
          <label htmlFor="salesOrderCreation" className="form-label">
            On Sales Order Creation
          </label>
          <select
            id="salesOrderCreation"
            className="form-select"
            value={salesOrderAction}
            onChange={handleSalesOrderChange}
          >
            <option value="">-- Select Action --</option>
            <option value="generateShipment">Generate Shipment</option>
            <option value="updateInventory">Update Inventory</option>
            <option value="sendConfirmation">Send Confirmation</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ActionTabs;
