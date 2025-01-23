import React from "react";

const HalfGauge = ({ value, label }) => {
  const percentage = (value / 5) * 180; 
  
  return (
    <svg width="150" height="100" viewBox="0 0 200 100">
    
      <path
        d="M10,90 A80,80 0 1,1 190,90"
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="20"
      />

      <path
        d="M10,90 A80,80 0 1,1 190,90"
        fill="none"
        stroke="#66b3ff"
        strokeWidth="20"
        strokeDasharray={percentage, 180}
      />
      <text x="100" y="50" textAnchor="middle" fontSize="16" fill="#000">
        {value}
      </text>

      <text x="100" y="85" textAnchor="middle" fontSize="12" fill="#555">
        {label}
      </text>
    </svg>
  );
};

const GaugeChart = () => {
  const data = [
    { label: "Service", value: 4.33 },
    { label: "Food", value: 4 },
    { label: "Cost", value: 3 },
    { label: "Ambiance", value: 3.33 },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {data.map((item, index) => (
        <HalfGauge key={index} value={item.value} label={item.label} />
      ))}
    </div>
  );
};

export default GaugeChart;