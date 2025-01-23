import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import LookIn from "../../components/rems-status/lookin";
import PSMunit from "../../components/rems-status/psmunit";
import StanderLayout from "../../components/rems-status/tenantlayout";
import VarturesTable from "../../components/rems-status/VerturesTable";
import PropertyUnitList from "./PropertyunitList";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Property unit",
    path_1:"/propertyunit",
    title_2:"View Property Unit",
}

export default function PropertyUnit(){
    return(
        <div>
            {/* <PSMunit title={"Property Unit"}/>
            <LookIn />
            <StanderLayout link={"newpropertyunit"} title={"New property Unit"}/>
            <AlphabeticFilter />
            <VarturesTable /> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PropertyUnitList />
        </div>
    )
}