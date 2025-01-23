import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MenuManagem() {
    const menuItems = [
        { title: "Base Menu", icon: "\ud83d\udcda" },
        { title: "Home Delivery", icon: "\ud83d\udef5" },
        { title: "Parcel", icon: "\ud83d\udce6" },
        { title: "Dine In", icon: "\ud83c\udf7d\ufe0f" },
        { title: "Home Website", icon: "\ud83d\udcbb" },
        { title: "Pick Up Menu QR", icon: "\ud83d\udd0d" }
    ];

    return (
        <div className="menu-management-container">
            <div className="d-flex justify-content-between align-items-center p-2 bg-black border-bottom mt-5 rounded">
                <h1 className="h5 m-0 text-white">Menu Management</h1>
                <button className="btn btn-light btn-white">Back</button>
            </div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-around">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Variants</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Addons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tables/Areas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Taxes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Discounts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container py-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {menuItems.map((item, index) => (
                        <div key={index} className="col">
                            <div className="card text-center h-100">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div className="fs-1 mb-3">{item.icon}</div>
                                    <h5 className="card-title flex-grow-1 text-center">{item.title}</h5>
                                    <div className="fs-3">➡️</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MenuManagem;
