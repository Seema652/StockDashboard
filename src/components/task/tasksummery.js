import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import NextPage from "../project/nextpage";
import ProjectList from "../project/projectList";


export default function TaskSummery(){
    return(
        <div className="wrap-summery">
            <h1 className="title "><FaFileAlt />Task Summary</h1>
            <ul className="d-flex sepretor">
                <li>
                    <p className="m-0"><span>1</span> Not Start</p>
                    <p className="m-0">Tasks assigned to me: 1</p>
                </li>
                <li>
                    <p className="primary m-0"><span>3</span> In Progress</p>
                    <p className="m-0">Tasks assigned to me: 6</p>
                </li>
                <li>
                    <p to="/" className="primary m-0"><span>0</span> Testing</p>
                    <p className="m-0">Tasks assigned to me: 2</p>
                </li>
                <li>
                    <p className="success m-0"><span>7</span> Awaiting Feedback</p>
                    <p className="m-0">Tasks assigned to me: 5</p>
                </li>
                <li>
                    <p className="success m-0"><span>27</span> Complete</p>
                    <p className="m-0">Tasks assigned to me: 13</p>
                </li>
            </ul>
            <div className="p-3 d-flex justify-between">
                <div className="d-flex gap-2">
                <select className="limit">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                    <option>All</option>
                </select>
                <div className="d-flex exp-btn">
                    <button className="px-2">
                        export
                    </button>
                    <button className="px-2 border rounded-0 border-light">
                        Bulk Actions
                    </button>
                    <button className="px-2">
                    <TfiReload  fontSize={20}/>
                    </button>
                </div>
                </div>
                <div className="d-flex exp-btn">
                    <button className="px-2">
                        <IoSearch />
                    </button>
                    <input className="search" placeholder="Search...."/>
                </div>
            </div>
            <div>
                <ProjectList />
            </div> 
            <div>
                <NextPage />
            </div>
        </div>
    )
}