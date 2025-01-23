import React from "react";
import PSMunit from "../../components/rems-status/psmunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import VenturesForm from "../../components/rems-status/VenturesForm";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";

export default function CreateBuilding(){
    return(
        <div>
            <PSMunit title={"New Building"}/>
            <SaveCancle />
            <VenturesForm />
            
        </div>
    )
}