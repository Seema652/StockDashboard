import React, { useState } from "react";
import Account from "../../components/module-customization/Account/account";
import Activities from "../../components/module-customization/Activities/activities";
import Agent from "../../components/module-customization/Agent/agent";
import Appointments from "../../components/module-customization/Appointments/appointments";





export default function ModuleCustomization(){
    const [tab , setTab] = useState(0)
    

   const tabHandle =(num)=>{
        setTab(num)
    }
    return(
        <div className="ServiceMenu container">
    <div className="row">
        <div className="col-2">
            <ul className="list-group btn hover:bg-success" >
                <li className="list-group-item border-black" onClick={() => tabHandle(0)}>Account</li>
                <li className="list-group-item border-black" onClick={() => tabHandle(1)}>Activities</li>
                <li className="list-group-item border-black" onClick={() => tabHandle(2)}>Agent</li>
                <li className="list-group-item border-black" onClick={() => tabHandle(3)}>Appointments</li>
                {/* <li className="list-group-item" onClick={() => tabHandle(4)}>Blocks</li>
                <li className="list-group-item" onClick={() => tabHandle(5)}>Booking Cancellation</li>
                <li className="list-group-item" onClick={() => tabHandle(6)}>Bookings</li>
                <li className="list-group-item" onClick={() => tabHandle(7)}>Brokers</li> */}
            </ul>
        </div>
        <div className="col-10">
            <div className={tab === 0 ? "d-block" : "d-none"}>
                <Account/>
            </div>

            <div className={tab === 1 ? "d-block" : "d-none"}>
                <Activities />
            </div>
            <div className={tab === 2 ? "d-block" : "d-none"}>
                <Agent />
            </div>
            <div className={tab === 3 ? "d-block" : "d-none"}>
                <Appointments />
            </div>
            {/* <div className={tab === 4 ? "d-block" : "d-none"}>
                <Activities />
            </div>
            <div className={tab === 1 ? "d-block" : "d-none"}>
                <Activities />
            </div>
            <div className={tab === 1 ? "d-block" : "d-none"}>
                <Activities />
            </div>
            <div className={tab === 1 ? "d-block" : "d-none"}>
                <Activities />
            </div> */}

        </div>

      
    </div>
</div>

    )
}