import React from "react";
import LookIn from "../../components/rems-status/lookin";
import PSMunit from "../../components/rems-status/psmunit";
import StanderLayout from "../../components/rems-status/tenantlayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function Building(){
    return(
        <div>
            <PSMunit title={"Building List"}/>
            <LookIn />
            <StanderLayout link={"/newbuilding"} title={"New Building"}/>
            <AlphabeticFilter />
            <VarturesTable />
        </div>
    )
}