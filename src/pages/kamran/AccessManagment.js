import React, { useState } from 'react'
import Desgination from './Desgination'
import Role from './Role'
import User from './User'
import PassPolicy from './PassPolicy'
import Calender from './Calender'
import PropertyShowing from '../PropertyShowing'
import PropertyFinal from './PropertyFinal'
import BusninessOf from './BusninessOf'
import Profiles from './profiles'

function AccessManagment(){
    const [tab, setTab] = useState(0);

    const tabContents = [
        <Desgination />,
        <Profiles />,
        <Role />,
        <User />,
        <PassPolicy />,
        <Calender />,
        <PropertyShowing />,
        <PropertyFinal />,
        <BusninessOf />
    ];
    
const tabHandle = (num)=>{
    setTab(num)
}
    
    return (
        <div className="ServiceMenu container">
            <div className="row">
                <div className="col-2 border-none">
                    <ul className="list-group" >
                        <li className="list-group-item" onClick={() => tabHandle(0)}>Profiles</li>
                        <li className="list-group-item" onClick={() => tabHandle(1)}>Roles</li>
                        <li className="list-group-item" onClick={() => tabHandle(2)}>User</li>
                        <li className="list-group-item" onClick={() => tabHandle(3)}>Desgination Heiarchy</li>
                        <li className="list-group-item" onClick={() => tabHandle(4)}>Password Policy</li>
                        <li className="list-group-item" onClick={() => tabHandle(5)}>Calender</li>
                        <li className="list-group-item" onClick={() => tabHandle(6)}>Property Showing</li>
                        <li className="list-group-item" onClick={() => tabHandle(7)}>Property Finalization</li>
                        <li className="list-group-item" onClick={() => tabHandle(8)}>Type Of Business</li>
                    </ul>
                </div>
                <div className="col-10">
                <div className={tab === 0 ? "d-block" : "d-none"}>
                        <Profiles />
                    </div>

                    <div className={tab === 0 ? "d-block" : "d-none"}>
                        <Desgination />
                    </div>

                    <div className={tab === 1 ? "d-block" : "d-none"}>
                        <Role />
                    </div>
                    <div className={tab === 2 ? "d-block" : "d-none"}>
                        <User />
                    </div>

                    <div className={tab === 3 ? "d-block" : "d-none"}>
                        <PassPolicy />
                    </div>

                    <div className={tab === 4 ? "d-block" : "d-none"}>
                        <Calender />
                    </div>

                    <div className={tab === 5 ? "d-block" : "d-none"}>
                        <PropertyShowing />
                    </div>
                    <div className={tab === 6 ? "d-block" : "d-none"}>
                        <PropertyFinal />
                    </div>
                    <div className={tab === 7 ? "d-block" : "d-none"}>
                        <BusninessOf />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AccessManagment
