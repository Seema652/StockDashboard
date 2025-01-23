import React, { useState } from "react";
import CustomInputField from "../../../../../common/CustomInputField";

const CurrencyExchange = () => {
  // Sample data for currencies
  const [currencies, setCurrencies] = useState([
    { id: 1, name: "USD", definedAs: "Fixed", rate: 1.0, description: "US Dollar" },
    { id: 2, name: "EUR", definedAs: "Floating", rate: 0.85, description: "Euro" },
    { id: 3, name: "GBP", definedAs: "Fixed", rate: 0.75, description: "British Pound" },
    { id: 4, name: "INR", definedAs: "Floating", rate: 74.5, description: "Indian Rupee" },
  ]);

  // Handle change in "Defined As" select dropdown
  const handleDefinedAsChange = (id, value) => {
    const updatedCurrencies = currencies.map((currency) =>
      currency.id === id ? { ...currency, definedAs: value } : currency
    );
    setCurrencies(updatedCurrencies);
  };

  // Save handler (this can be customized to handle actual saving logic)
  const handleSave = () => {
    // Add your save logic here (e.g., API call)
    console.log("Saving data...");
    alert("Data saved successfully!");
  };

  // Cancel handler (this can reset or redirect, depending on your needs)
  const handleCancel = () => {
    // You can reset the form or navigate elsewhere
    console.log("Canceling...");
    alert("Changes have been discarded.");
  };

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            {/* Header Section */}
            <div>
              <h4 className="bg-dark py-2 px-4 text-light fs-4">
                Currency Exchange Rate
              </h4>
            </div>

            {/* Base Currency and Effective Date Inputs */}
            <div className="row pt-3 px-2">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="baseCurrency" className="form-label fs-5">
                    Base Currency
                  </label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">USD</option>
                    <option value="2">EUR</option>
                    <option value="3">GBP</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="effectiveDate" className="form-label fs-5">
                    Effective Date
                  </label>
                  <CustomInputField type="date" />
                </div>
              </div>
            </div>

            {/* Currency Exchange Rates Table */}
            <div className="table-responsive mt-4">
              <table className="table table-striped">
                <thead className="bg-light">
                  <tr>
                    <th className="fs-5">S.No</th>
                    <th className="fs-5">Currency Name</th>
                    <th className="fs-5">Defined As</th>
                    <th className="fs-5">Rate</th>
                    <th className="fs-5">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies.map((currency, index) => (
                    <tr key={currency.id}>
                      <td>{index + 1}</td>
                      <td>{currency.name}</td>
                      <td>
                        {/* Select Dropdown for Defined As */}
                        <select
                          className="form-select"
                          value={currency.definedAs}
                          onChange={(e) => handleDefinedAsChange(currency.id, e.target.value)}
                        >
                          <option value="Fixed">Fixed</option>
                          <option value="Floating">Floating</option>
                        </select>
                      </td>
                      <td>{currency.rate}</td>
                      <td>{currency.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Save and Cancel Buttons */}
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-primary fs-5"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger fs-5"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;
