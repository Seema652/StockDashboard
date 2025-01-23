import React, { useState } from "react";

export const ManageCurrencies = () => {
  const currencies = [
    { id: 1, currencyCode: "LekeALL", countryName: "Albania, Leke", currencyName: "Leke", coinName: "", SymbolL: "$" },
    { id: 2, currencyCode: "LekeALL", countryName: "Albania, Leke", currencyName: "Leke", coinName: "", SymbolL: "$" },
    { id: 3, currencyCode: "LekeALL", countryName: "Albania, Leke", currencyName: "Leke", coinName: "", SymbolL: "$" },
    { id: 4, currencyCode: "LekeALL", countryName: "Albania, Leke", currencyName: "Leke", coinName: "", SymbolL: "$" },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(item => item !== id); 
      } else {
        return [...prevSelected, id];
      }
    });
  };

  // Select or deselect all checkboxes
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(currencies.map(currency => currency.id)); // Select all
    } else {
      setSelectedItems([]); // Deselect all
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <form>
            <div>
              <h4 className="bg-dark py-2 px-4 text-light fs-4">
                Manage Currencies
              </h4>
            </div>

            <div className="table-responsive mt-4">
              <table className="table table-striped">
                <thead className="bg-light">
                  <tr>
                    <th className="fs-5">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={handleSelectAll}
                        checked={selectedItems.length === currencies.length}
                      />
                    </th>
                    <th className="fs-5">Currency Code</th>
                    <th className="fs-5">Country Name - Currency</th>
                    <th className="fs-5">Currency Name</th>
                    <th className="fs-5">Coin Name</th>
                    <th className="fs-5">Symbol</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies.map((item) => (
                    <tr key={item.id}>
                      <td className="fs-5">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </td>
                      <td className="fs-5">{item.currencyCode}</td>
                      <td className="fs-5">{item.countryName}</td>
                      <td className="fs-5">{item.currencyName}</td>
                      <td className="fs-5">{item.coinName}</td>
                      <td className="fs-5">{item.SymbolL}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-3">
              <button className="btn btn-primary fs-5" disabled={selectedItems.length === 0}>
                Save
              </button>
              <button className="btn btn-danger fs-5" disabled={selectedItems.length === 0}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
