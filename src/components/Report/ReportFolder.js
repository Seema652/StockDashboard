import React from "react";
import { Link } from "react-router-dom";

export function SearchFolder() {
    return (
        <div className="p-1">
            <h1 className="fs-5">Folder</h1>
            <div className="d-flex align-items-center gap-2">
                <div className="d-flex overflow-hidden border-box gap-1 border p-1 bg-white rounded-0">
                    <div><i class="fa-solid fa-magnifying-glass"></i></div>
                    <div>
                        <input className="border-0 rounded-0 " />
                    </div>
                </div>
                <div className="text-primary">
                    <i class="fa-regular fa-file"></i>
                </div>
            </div>

            <di>
                <ul>
                    <li className="d-flex p-1 gap-2 my-2">
                        <div className="text-primary">
                            <i class="fa-regular fa-file"></i>
                        </div>
                        <div>
                            <Link to="/" className="fs-5 text=black">Account Report</Link>
                        </div>
                    </li>
                    <li className="d-flex p-1 gap-2 my-2">
                        <div className="text-primary">
                            <i class="fa-regular fa-file"></i>
                        </div>
                        <div>
                            <Link to="/" className="fs-5 text=black"> Active Report</Link>
                        </div>
                    </li>
                </ul>
            </di>
        </div>
    )
}


export function ReportFolder() {
    return (
        <div>
            <h1 className="fs-5">All Folders</h1>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-1">
                    <select className="border p-1">
                        <option>All Report</option>
                    </select>
                    <div className="d-flex overflow-hidden align-items-center rounded border-box gap-1 border p-1 bg-white rounded-0">
                        <div><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div>
                            <input className="border-0 rounded-0 " />
                        </div>
                    </div>
                    <button className="p-1 px-3 m-0 btn btn-primary">Go</button>
                    <div>
                        <Link className="btn btn-outline-primary m-0" to="/">New</Link>
                    </div>
                </div>
                <button className="d-flex fs-5 gap-2 btn btn-light align-items-center">
                    <span>Active</span>
                    <span><i class="fa-solid fa-angle-down"></i></span>
                </button>
            </div>
        </div>
    )
}