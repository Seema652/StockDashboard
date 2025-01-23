import React, { useState } from "react";
import OutLooks from "../../components/add-onsmain/outlookintegration";
import OutlookPlug from "../../components/add-onsmain/outlook-plug";
import Registration from "../../components/add-onsmain/registration-list";
import SmsSettings from "../../components/add-onsmain/sms-settings";
import SMSSettings from "../../components/add-onsmain/sms-settings";
import OutLooking from "../kamran/OutLooking";
import OutLookingPlug from "../../components/add-onsmain/outlook-plug";

function AddOns () {

    const [list, setList] = useState(0);

        const TabMarket = (num) => {
            setList(num);
        };


    return (
        <div className="col-8">

<ul className="d-flex mt-1 gap-2">
                                    {["OutLooks" ,  "SMS Settings" ,  "OutlookPlug-In" , "App Registration"].map((item, i) => (
                                        <li
                                            key={i} style={{fontSize:"2rem"}}
                                            className={list === i ? "text-success" : "text-black"}
                                            onClick={() => TabMarket(i)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>

        <div className={list === 0 ? "d-block" : "d-none"}><OutLooks/></div>
        <div className={list === 1 ? "d-block" : "d-none"}><SMSSettings/></div>
        <div className={list === 2 ? "d-block" : "d-none"}><OutLookingPlug/></div>
        <div className={list === 3 ? "d-block" : "d-none"}><Registration/></div>


        </div>
    );
}

export default AddOns;