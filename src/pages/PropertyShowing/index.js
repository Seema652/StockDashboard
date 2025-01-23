import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import LookIn from "../../components/rems-status/lookin";
import PSMunit from "../../components/rems-status/psmunit";
import StanderLayout from "../../components/rems-status/tenantlayout";
import VarturesTable from "../../components/rems-status/VerturesTable";
import PropertyShowerList from "./PropertyShowingList";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Property Showing",
    path_1:"/propertyshowing",
    title_2:"View Property Showing",
}

export default function PropertyShowing(){
    return(
        <div>
            {/* <PSMunit title={"Property Showing"}/>
            <LookIn />
            <StanderLayout link={"/newpropertyshowing"}/>
            <VarturesTable /> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PropertyShowerList />
        </div>
    )
}