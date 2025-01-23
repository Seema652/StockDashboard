import React from "react";

export default function FilterTable(){
    return(
        <div>
            <ul className="d-flex align-items-center justify-content-between">
                <li>
                    <select className="btn-light p-1 m-0 mt-2 btn">
                        <option><span className="text-primary">1</span> - <span className="text-primary">12</span> of <span className="text-primary">100</span></option>
                    </select>
                </li>
                <li>
                <select className="btn-light p-1 m-0 mt-2 btn">
                        <option><span className="text-primary">0</span> Selected</option>
                    </select>
                </li>
                <li className="d-flex gap-2">
                    <button className="fs-6 btn p-1">Previous</button>
                    <button className="fs-6 btn p-1">Next</button>
                </li>
                <li className="d-flex gap-1">
                    <span>page</span>
                    <input type="number" className="p-1 fs-5 border-0" style={{width : "30px", height: "25px"}}/>
                    of
                    <span>100</span>
                </li>
            </ul>
        </div>
    )
}