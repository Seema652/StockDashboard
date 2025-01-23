import React from "react";

function Outerlots() {
  return (
    <div className="container">
      <div className="bg-black p-2 d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 rounded">
        <h4 className="text-light mb-2 mb-md-0">Outlet Statistics</h4>
        <div className="d-flex justify-content-end align-items-center">
          <button className="btn btn-light me-2">Export Data</button>
          <button className="btn btn-primary me-2">Create Zone</button>
          <select className="form-select w-auto">
            <option value="1">6th Feb</option>
            <option value="2">7th Feb</option>
            <option value="3">8th Feb</option>
          </select>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {[
              {
                title: "Total Sales",
                value: "5,049.00",
                description: "Total Sales of 5 outlets",
                icon: "fa-solid fa-coins",
                showDots: true,
              },
              {
                title: "Net Sales",
                value: "4,325.22",
                description: "Net Sales of 5 outlets",
                icon: "fa-solid fa-chart-line",
                showDots: false,
              },
              {
                title: "No. Of Orders",
                value: "9",
                description: "No. of invoices generated",
                icon: "fa-solid fa-receipt",
                showDots: true,
              },
              {
                title: "Expenses",
                value: "0.00",
                description: "Expenses recorded",
                icon: "fa-solid fa-money-bill",
                showDots: false,
              },
              {
                title: "Cash Collection",
                value: "3,674.00",
                description: "72.77% of total sales via cash",
                icon: "fa-solid fa-wallet",
                showDots: true,
              },
              {
                title: "Online Sales",
                value: "1,370.00",
                description: "27.13% of sales generated from Online",
                icon: "fa-solid fa-wifi",
                showDots: false,
              },
              {
                title: "Taxes",
                value: "363.13",
                description: "Taxes recorded on POS",
                icon: "fa-solid fa-percent",
                showDots: true,
              },
              {
                title: "Discounts",
                value: "0.00",
                description: "0% of My Amount",
                icon: "fa-solid fa-tags",
                showDots: false,
              },
            ].map((card, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
                key={index}
              >
                <div className="card h-100 p-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="m-0">{card.title}</h6>
                    <i
                      className={`${card.icon}`}
                      style={{ fontSize: "20px" }}
                    ></i>
                  </div>
                  <h4 className="mt-2">{card.value}</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0 text-truncate">{card.description}</p>
                    {card.showDots && (
                      <i
                        className="fa-solid fa-ellipsis"
                        style={{ cursor: "pointer" }}
                      ></i>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-header text-danger d-flex align-items-center p-2">
              <i className="fa-solid fa-box me-2"></i> Supplier Hub
              <span className="ms-auto d-flex align-items-center">
                <i className="fa-solid fa-map-marker-alt me-1"></i>
                Bengaluru, Karnataka
              </span>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Get prior for packaging and storage"
                />
                <button className="btn btn-primary">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
              <div className="d-flex flex-wrap">
                {[
                  { name: "Boligien", image: "boligien.png" },
                  { name: "Container", image: "container.png" },
                  { name: "Heat Selling", image: "printing_services.png" },
                  { name: "Intraction", image: "heat_selling.png" },
                  { name: "Bums", image: "intaction.png" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-1"
                    style={{ width: "80px", fontSize: "12px" }}
                  >
                    <div className="mb-1 border p-2 rounded shadow-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body d-flex flex-wrap justify-content-between">
              {[
                {
                  title: "Mutton Masala",
                  discount: "20% off",
                  image: "pizza.png",
                },
                {
                  title: "Tormol Printer",
                  discount: "20% off",
                  image: "tofu.png",
                },
                {
                  title: "Pizza Packing",
                  discount: "20% off",
                  image: "social_media.png",
                },
                {
                  title: "Cash Drawer",
                  discount: "20% off",
                  image: "cash_drawer.png",
                },
              ].map((offer, index) => (
                <div
                  key={index}
                  className="text-center p-2"
                  style={{ width: "80px" }}
                >
                  <div className="mb-1 border p-2 rounded shadow-sm">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      style={{ width: "40px", height: "40px" }}
                    />
                  </div>
                  <p className="m-0">{offer.title}</p>
                  <span className="badge bg-danger text-white">
                    {offer.discount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outerlots;
