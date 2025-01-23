import React from "react";
import PSMunit from "../../components/rems-status/psmunit";
import LookIn from "../../components/rems-status/lookin";
import StanderLayout from "../../components/rems-status/tenantlayout";
import VarturesTable from "../../components/rems-status/VerturesTable";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import PropertyStageList from "./PropertyStageList";


const breadCrumbsTitle = {
    id:"1",
    title_1:"Propeerty Stage",
    path_1:"/propertystage",
    title_2:"View Property Stage",
}

export default function PropertyStages(){
    return(
        <div>
            {/* <PSMunit title={"property Stages"}/>
            <LookIn />
            <StanderLayout title={"New Property Stages"} link={"/newpropertystages"}/>
            <VarturesTable /> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PropertyStageList />
        </div>
    )
}