import React, { useState } from "react";

function Agent() {
  const [list, setList] = useState(0);

  const TabMarket = (num) => {
    setList(num);
  };

  // Items array
  const items = [
    "Customize Fields",
    "Customize External Modules",
    "Customize Page Layouts",
    "Customize Print Layouts",
    "Customize Cascading Pick List",
    "Customize Labels",
    "Customize Mapping Templates",
    "Customize Apply Rules",
    "Customize Home Layouts",
    "Customize Business Card Layout",
    "Customize Related Info Layouts",
    "Customize Settings",
    "Customize Duplicate Criteria Definition",
    
  ];

  // Filter items that start with "Customize"
  const filteredItems = items.filter((item) => item.startsWith("Customize"));

  // Split filtered items into two columns
  const leftColumn = filteredItems.slice(0, Math.ceil(filteredItems.length / 2));
  const rightColumn = filteredItems.slice(Math.ceil(filteredItems.length / 2));

  return (
    <div className="col-8">
      <div className="d-flex mt-1 gap-2">
        {/* Left Column */}
        <h1>Customize Agent</h1>

        <ul className="me-5">
          {leftColumn.map((item, i) => (
            <li
              key={i}
              style={{ fontSize: "2rem" }}
              className={list === i ? "text-success" : "text-black"}
              onClick={() => TabMarket(i)}
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Right Column */}
        <ul>
          {rightColumn.map((item, i) => (
            <li
              key={i + leftColumn.length} // Ensure unique key
              style={{ fontSize: "2rem" }}
              className={list === i + leftColumn.length ? "text-success" : "text-black"}
              onClick={() => TabMarket(i + leftColumn.length)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Placeholder for content to toggle */}
      {/* <div className={list === 0 ? "d-block" : "d-none"}><OutLooks/></div>
          <div className={list === 1 ? "d-block" : "d-none"}><SMSSettings/></div> */}
    </div>
  );
}

export default Agent;
