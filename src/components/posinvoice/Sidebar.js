import React from "react";

function Sidebar({ setActiveTab, setActiveCategory }) {
  const categories = [
    "All",
    "Japanese",
    "Indian Vegetarian",
    "Lunch Package",
    "Dinner Package",
    "Bengali Food",
    "Italian",
    "Indian Cuisine",
    "Mexican",
    "Arabian",
    "Chinese",
    "Sea Food",
    "Korean",
    "Asian",
    "Thai",
  ];

  return (
    <div className="d-flex flex-column gap-3">
      <div className="list-group">
        {categories.map((category) => (
          <button
            key={category}
            className="list-group-item list-group-item-action"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
