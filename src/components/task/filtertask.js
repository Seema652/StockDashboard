import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaFilter } from "react-icons/fa";
export default function FilterTask(){
    return(
        <div className="d-flex wrap-filter">
            <ul className="d-flex">
                <li><Link to="newproject" className="btn btn-primary mx-0"><IoMdAdd /> New Tesk</Link></li>
                <li><Link to="/" className="btn btn-outline-light bg-white"><CgMenuLeftAlt /></Link></li>
            </ul>
            <ul className="d-flex gap-3">
                <li><Link to="newproject" className="btn btn-success mx-0">Tesks overview</Link></li>
                <li><Link to="/" className="btn btn-ouline-light bg-white mx-0" ><FaFilter /></Link></li>
            </ul>
        </div>
    )
}