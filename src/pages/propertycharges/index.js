import React from "react";
import PSMunit from "../../components/rems-status/psmunit";
import LookIn from "../../components/rems-status/lookin";
import StanderLayout from "../../components/rems-status/tenantlayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import VarturesTable from "../../components/rems-status/VerturesTable";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import PropertyChargesList from "./PropertyChagesList";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Property Chages",
    path_1:"/propertycharges",
    title_2:"View Property Charges",
}
export default function PropertyCharges(){
    return(
        <div>
            {/* <PSMunit title={"Charges List"}/>
            <LookIn />
            <StanderLayout link={"/newProertycharges"} />
            <AlphabeticFilter />
            <VarturesTable /> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PropertyChargesList />
        </div>
    )
}