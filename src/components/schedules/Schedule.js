import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiBox } from "react-icons/bi";
import Sidebar from './Sidebarschedule';

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2025);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const weeks = [];
    let days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<td key={`empty-${i}`} className="bg-light"></td>);
    }

    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <td
          key={day}
          className={`${selectedDate === day ? 'bg-primary text-white' : 'bg-white'}`}
          style={{ cursor: 'pointer' }}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </td>
      );

      if ((day + firstDayOfMonth) % 7 === 0 || day === totalDays) {
        weeks.push(<tr key={`week-${weeks.length}`}>{days}</tr>);
        days = [];
      }
    }
    return weeks;
  };
  
  return (
    <div className="d-flex">   
      <Sidebar /> 
      <div className="container-fluid py-4 ms-5 mt-0" style={{ marginLeft: '280px', width: '100%' }}>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="border p-3 rounded shadow" style={{ height: '70vh', overflow: 'hidden', width: "100%" }}>
              <div className="d-flex justify-content-between align-items-center bg-black text-white p-2 mb-3">
                <button className="btn btn-light" onClick={handlePreviousMonth}>&lt;</button>
                <h5 className="m-0">
                  {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
                </h5>
                <button className="btn btn-light" onClick={handleNextMonth}>&gt;</button>
              </div>
              <table className="table table-bordered text-center" style={{ height: '80%' }}>
                <thead>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>{renderCalendar()}</tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-center align-items-center">
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BiBox size={150} color="black" />
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "20px", padding: "10px 20px", fontSize: "16px" }}
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
