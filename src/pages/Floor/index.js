import React from "react";
import PSMunit from "../../components/rems-status/psmunit";
import LookIn from "../../components/rems-status/lookin";
import StanderLayout from "../../components/rems-status/tenantlayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function Floor(){
    return(
        <div>
            <PSMunit title={"Floors List"}/>
            <LookIn />
            <StanderLayout link={"/newfloor"} title={"New Floor"}/>
            <AlphabeticFilter />
            <VarturesTable />
        </div>
    )
}