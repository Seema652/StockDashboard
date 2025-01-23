import React from "react";
import { Link } from "react-router-dom";

export default function Tags(){
    return(
        <div className="mt-3 p-3">
            <ul className="d-flex gap-2">
                <li className="fs-6"><i class="fa-solid fa-tag"></i></li>
                <li className="fs-6">Tags</li>
                <li className="fs-6"><Link to=""><i class="fa-solid fa-plus"></i></Link></li>
            </ul>
            <ul className="mt-2 p-0 d-flex bg-light">
                <li className="text-primary border-b p-1 fs-6 border-primary">Related List</li>
                <li className="fs-6 p-1">Activity Stream</li>
            </ul>
        </div>
    )
}