import React from "react";
import PSMunit from "../../components/rems-status/psmunit";
import LookIn from "../../components/rems-status/lookin";
import StanderLayout from "../../components/rems-status/tenantlayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import VarturesTable from "../../components/rems-status/VerturesTable";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import BlockList from "./Blocklist";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Block",
    path_1:"/block",
    title_2:"View Block",
}

export default function Block(){
    return(
        <div>
            {/* <PSMunit title={"Block List"}/>
            <LookIn />
            <StanderLayout link={"newblock"}/>
            <AlphabeticFilter />
            <VarturesTable /> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BlockList />
        </div>
    )
}  