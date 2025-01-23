import React from "react";
import { FaCartPlus } from "react-icons/fa6";

export default function Lebal(){
    return(
        <div className="mx-2 mb-4">
            <div className="p-2 rounded-2 d-flex gap-2 border bg-white">
                <span className="p-3 text-light rounded bg-info d-inline-block">
                    <FaCartPlus fontSize={24}/>
                </span>
                <div >
                    <h2 className="m-0 fs-4 text-bold">13</h2>
                    <p className="m-0">Total Order</p>
                </div>
            </div>
        </div>
    )
}