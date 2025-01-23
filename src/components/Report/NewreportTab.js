import React, { useState } from "react";

export function NewReportTab(){
    const [tab , tabSet] = useState(0) 

    const handleTab =(e)=>{
        tabSet(e)
    }
    return(
        <div>
            <ul className="d-flex gap-0 p-1">
                <li className="">
                    <button className={`${tab === 0 ? "btn-primary" : "btn-light"} btn p-2 px-4 d-flex m-0 gap-2 align-items-center rounded-0 fs-5 m-o `} onClick={()=>handleTab(0)}>
                    <span className={`${tab === 0 ? "text-black bg-white" : "text-white bg-primary"} p-1 px-3 rounded-circle`}>1</span>
                    Deffine
                    </button>
                </li>
                <li>
                <button className={`${tab === 1 ? "btn-primary" : "btn-light"} btn p-2 px-4 d-flex m-0 gap-2 align-items-center rounded-0 fs-5 m-o `} onClick={()=>handleTab(1)}>
                    <span className={`${tab === 1 ? "text-black bg-white" : "text-white bg-primary"} p-1 px-3 rounded-circle`}>2</span>
                    Select Set
                    </button>
                </li>
                <li>
                <button className={`${tab === 2 ? "btn-primary" : "btn-light"} btn p-2 px-4 d-flex m-0 gap-2 align-items-center rounded-0 fs-5 m-o `} onClick={()=>handleTab(2)}>
                    <span className={`${tab === 2 ? "text-black bg-white" : "text-white bg-primary"} p-1 px-3 rounded-circle`}>3</span>
                    customize
                    </button>
                </li>
            </ul>


            <div className={tab === 0 ? "d-block" : "d-none"}>
                <div className="p-2">
                    
                </div>
            </div>
            <div className={tab === 1 ? "d-block" : "d-none"}>Tab 2</div>
            <div className={tab === 2 ? "d-block" : "d-none"}>Tab 3</div>
        </div>
    )
}