import React from "react";
import { ReportFolder, SearchFolder } from "./ReportFolder";
import VarturesTable from "../rems-status/VerturesTable";
import FilterTable from "./FilterTable";

export default function ViewFolder(){
    return(
        <div className="row p-2">
            <div className="col-2 rounded-0 border">
                <SearchFolder />
            </div>
            <div className="col-10 rounded-0 border">
                <ReportFolder />
                <VarturesTable />
                <FilterTable />
            </div>
        </div>
    )
}