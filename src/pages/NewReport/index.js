import React from "react";
import PSMunit from "../../components/rems-status/psmunit";
import ViewFolder from "../../components/Report/ViewFolder";

export default function ReportHome(){
    return(
        <div>
            <PSMunit title={"Report Home"}/>
            <ViewFolder />
        </div>
    )
}