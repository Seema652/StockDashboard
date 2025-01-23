import React, { useState } from "react";
import { Genral } from "../../../pages/newusers/genral";
import { Security } from "../../../pages/newusers/security";
import Restrictions from "../../../pages/newusers/restrictions";
import ModuleRestrictions from "../../../pages/newusers/modulerestrictions";
import SocialInfo from "../../../pages/newusers/socialinfo";

function Newusers () { 
    
    const [user, setUser] = useState(0);

    const TabMarket = (num) => {
        setUser(num);
    };

    return (
        
        <div className="col-10">
                           
                                <ul className="d-flex mt-1 gap-2">
                                    {["Genral" ,  "Secutiry" ,  "Restrictions" , "Modules Restrictions" , "Social Info"].map((item, i) => (
                                        <li
                                            key={i} style={{fontSize:"2rem"}}
                                            className={user === i ? "text-success" : "text-black"}
                                            onClick={() => TabMarket(i)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className={user === 0 ? "d-block" : "d-none"}
                                >
                                    <Genral />
                                </div>
                                <div className={user === 1 ? "d-block" : "d-none"}>
                                    <Security />
                                </div>
                                <div className={user === 2 ? "d-block" : "d-none"}>
                                    <Restrictions/>
                                </div>
                                <div className={user === 3 ? "d-block" : "d-none"}>
                                    <ModuleRestrictions />
                                </div>
                                <div className={user === 4 ? "d-block" : "d-none"}>
                                    <SocialInfo/>
                                </div>
                            </div>
                        
                                
    );
}

export default Newusers;