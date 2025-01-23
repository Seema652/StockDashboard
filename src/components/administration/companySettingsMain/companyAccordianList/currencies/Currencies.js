import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AlphabeticFilter from '../../../../rems-status/AlphabeticFilter';

const Currencies = () => {
    const [currencies, setCurrencies] = useState([
        {
          id: 1,
          code: "2023",
          currencyName: "Mark",
          coinName: "2023-10-01",
          symbol: "#"
        },
        {
          id: 2,
          code: "2024",
          currencyName: "01",
          coinName: "Jacob",
          symbol: "#"
        },
        {
          id: 3,
          code: "2025",
          currencyName: "01",
          coinName: "Larry",
          symbol: "#"
        },
      ]);
    return (
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="bg-black d-flex justify-content-between align-items-center text-light py-2 px-4">
                <div className="d-flex align-items-center">
                  <h4 className="fs-4">
                  Currencies List </h4>
                </div>
              </div>
    
              <div className="mt-4">
                <AlphabeticFilter />
              </div>
    
              <div className="table-responsive active-projects style-1responsive mt-3">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col" className="fs-5">
                        Code
                      </th>
                      <th scope="col" className="fs-5">
                        Currency Name
                      </th>
                      <th scope="col" className="fs-5">
                        Coin Name
                      </th>
                      <th scope="col" className="fs-5">
                        Symbol
                      </th>
                      <th scope="col" className="fs-5">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencies?.map((item) => (
                      <tr key={item.id}>
                        <td className="fs-5">{item.code}</td>
                        <td className="fs-5">{item.currencyName}</td>
                        <td className="fs-5">{item.coinName}</td>
                        <td className="fs-5">{item.symbol}</td>
                        <td className="fs-5">
                          <div className="d-flex align-items-center gap-3">
                            <Link to="/edit-currency">
                              <i className="fa-solid fa-pen-to-square text-success"></i>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Currencies