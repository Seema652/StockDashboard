import React, { useState } from "react";
import SelfServiceUsers from "../../components/selfServicePages/selfServiceUsers/selfserviceusers";
import AccessSettings from "../../components/selfServicePages/accessSettings/accesssetting";
import ModuleMappings from "../../components/selfServicePages/moduleMappings/modulemappings";
import HomePageCustomization from "../../components/selfServicePages/homePageCustomization/homepagecustomization";
import ThemesUi from "../../components/selfServicePages/themesUi/themesui";
// import ThemeCollection from "../../components/selfServicePages/Themes/Themes";




export default function SelfService(){
    const [tab , setTab] = useState(0)

   const tabHandle =(num)=>{
        setTab(num)
    }
    return(
        <div className="ServiceMenu container">
    <div className="row">
        <div className="col-2">
            <ul className="list-group" >
                <li className="list-group-item" onClick={() => tabHandle(0)}>Self Service Users</li>
                <li className="list-group-item" onClick={() => tabHandle(1)}>Access Settings</li>
                <li className="list-group-item" onClick={() => tabHandle(2)}>Module Mappings</li>
                <li className="list-group-item" onClick={() => tabHandle(3)}>Home Page Customization</li>
                <li className="list-group-item" onClick={() => tabHandle(4)}>Themes</li>
            </ul>
        </div>
        <div className="col-10">
            <div className={tab === 0 ? "d-block" : "d-none"}>
                <SelfServiceUsers />
            </div>

            <div className={tab === 1 ? "d-block" : "d-none"}>
                <AccessSettings />
            </div>

            <div className={tab === 2 ? "d-block" : "d-none"}>
                <ModuleMappings />
            </div>

            <div className={tab === 3 ? "d-block" : "d-none"}>
                <HomePageCustomization />
            </div>

            <div className={tab === 4 ? "d-block" : "d-none"}>
                <ThemesUi />
            </div>
        </div>
    </div>
</div>

    )
}