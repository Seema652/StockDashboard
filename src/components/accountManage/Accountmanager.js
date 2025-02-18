import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUserCircle,
  FaTrash,
} from "react-icons/fa";
import { FcShare } from "react-icons/fc";

const AccountManager = () => {
  const [searchQueries, setSearchQueries] = useState({
    profile: "",
    group: "",
    page: "",
    instagram: "",
    twitter: "",
  });

  const handleSearch = (type, value) => {
    setSearchQueries((prev) => ({ ...prev, [type]: value }));
  };

  const data = {
    profile: {
      title: "Facebook Profile",
      icon: <FaFacebook size="1.5rem" className="me-2" />,
      items: [{ name: "Tiến Phạm" }],
    },
    group: {
      title: "Facebook Groups",
      icon: <FaFacebook size="1.5rem" className="me-2" />,
      items: ["Group Test"],
    },
    page: {
      title: "Facebook Pages",
      icon: <FaFacebook size="1.5rem" className="me-2" />,
      items: ["Test Page 1", "Test Page 2", "Test Page 3"],
    },
    instagram: {
      title: "Instagram Profiles",
      icon: <FaInstagram size="1.5rem" className="me-2" />,
      items: ["Instagram 1", "Instagram 2"],
    },
    twitter: {
      title: "Twitter Profiles",
      icon: <FaTwitter size="1.5rem" className="me-2" />,
      items: ["Twitter 1", "Twitter 2"],
    },
  };

  return (
    <div className="container-fluid">
      <div className="row">   
        <div className="col-md-2 col-lg-2"></div>
        <div className="col-md-10 col-lg-10 d-flex flex-column align-items-center p-4">
          <div className="bg-black text-white py-2 px-4 rounded mb-4 text-left w-100">
            <h3 className="mb-0">
              <FcShare /> Account Manager
            </h3>
          </div>

          <div className="d-flex flex-wrap justify-content-center w-100 gap-4">
            {Object.keys(data).map((key) => (
              <AccountCard
                key={key}
                type={key}
                title={data[key].title}
                icon={data[key].icon}
                items={data[key].items}
                searchQuery={searchQueries[key]}
                onSearch={handleSearch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccountCard = ({ type, title, icon, items, searchQuery, onSearch }) => {
  const filteredItems = items.filter((item) =>
    item.name
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase())
      : item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="border p-3 rounded shadow-lg"
      style={{ width: "clamp(16rem, 25vw, 22rem)", height: "22rem" }}
    >
   
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h6 className="d-flex align-items-center">
          {icon} {title}
        </h6>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearch(type, e.target.value)}
        />
        <button className="btn btn-danger btn-sm">
          <FaTrash />
        </button>
      </div>

   
      {filteredItems.map((item, idx) => (
        <div
          key={idx}
          className="d-flex align-items-center justify-content-between mb-2"
        >
          <div className="d-flex align-items-center">
            <FaUserCircle size="1.8rem" className="me-2" />
            <span>{item.name || item}</span>
          </div>
          <input type="checkbox" className="form-check-input" />
        </div>
      ))}
    </div>
  );
};

export default AccountManager;
