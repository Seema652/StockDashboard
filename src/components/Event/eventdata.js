import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Events = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
      <h1
        className="fw-bold mb-4"
        style={{ fontSize: "30px", textAlign: "left", width: "100%" }}
      >
       Event
      </h1>
      <div className="container card rounded-3 shadow-sm p-3" style={{ backgroundColor: "#ffffff" }}>
        <div className="row text-center fw-bold mb-3">
          <div className="col">Title</div>
          <div className="col">Location</div>
          <div className="col">Started At</div>
          <div className="col">Completed At</div>
          <div className="col">Description</div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="row text-center">
              <div className="col">After-school hangout</div>
              <div className="col">Grant Park, 337 E Randolph St, Chicago, IL 60601</div>
              <div className="col">Dec 20, 2024 2:00 PM</div>
              <div className="col">Dec 20, 2024 5:00 PM</div>
              <div className="col">Chill with friends at the local park</div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="row text-center">
              <div className="col">Spanish lesson</div>
              <div className="col">Online</div>
              <div className="col">Dec 20, 2024 11:30 AM</div>
              <div className="col">Dec 20, 2024 12:30 PM</div>
              <div className="col">This event was added from Goals in Google Calendar. </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="row text-center">
              <div className="col">Easter</div>
              <div className="col">No location</div>
              <div className="col">Dec 20, 2024 9:00 AM</div>
              <div className="col">Dec 20, 2024 10:00 AM</div>
              <div className="col">Easter Sunday</div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="row text-center">
              <div className="col">Coding club meeting</div>
              <div className="col">School Library</div>
              <div className="col">Dec 19, 2024 5:30 PM</div>
              <div className="col">Dec 19, 2024 7:00 PM</div>
              <div className="col">Learn programming basics with friends</div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="row text-center">
              <div className="col">Kanye West concert</div>
              <div className="col">201 E. Jefferson St, Phoenix, AZ 85004, US</div>
              <div className="col">Dec 19, 2024 4:00 PM</div>
              <div className="col">Dec 19, 2024 5:30 PM</div>
              <div className="col">Tickets are going on sale</div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="row text-center">
              <div className="col">Secret party planning for Amanda</div>
              <div className="col">Lisa's house</div>
              <div className="col">Dec 19, 2024 2:00 PM</div>
              <div className="col">Dec 19, 2024 3:00 PM</div>
              <div className="col">Discuss party ideas and invite list</div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="row text-center">
              <div className="col">School dance preparation</div>
              <div className="col">No location</div>
              <div className="col">Dec 19, 2024 12:00 PM</div>
              <div className="col">Dec 19, 2024 2:00 PM</div>
              <div className="col">Pick up outfit from mall</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
