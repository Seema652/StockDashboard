import React, { useState } from "react"; // Import useState hook
import CustomInputField from "../../common/CustomInputField";
import Marketing from "./marketing";
import Sales from "./sales";
import Masters from "./masters";
import Ecommerce from "./e-commerce";
import Leasing from "./leasing";

// This is the first Main component
export function MainProfile() {

    const [sll, setSll] = useState(0);

    const TabMarket = (num) => {
        setSll(num);
    };
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h2 className='tbl-caption text-light'>
                    Profile Details
                </h2>
                {/* <button type="button" className="btn btn-secondary btn-sm"> + Invite Employee
                </button> */}
            </div>

            <div>
                <div>
                    <label>Name</label>
                    <CustomInputField />
                </div>

                <div>
                    <label>Description</label>
                    <CustomInputField />
                </div>
            </div>

            <div className="d-flex justify-content-end mt-2">
                <a className="btn btn-primary shadow btn-xs sharp me-1">
                    <i className="fa fa-pencil"></i>
                </a>
                <a className="btn btn-danger shadow btn-xs sharp">
                    <i className="fa fa-trash"></i>
                </a>
            </div>
            <label>Module Access Rights</label>

            <div className="ServiceMenu container mt-4">
                    <div className="row">
                        <div className="col-2">
                            <ul className="list-group">
                                {/* Add items to the list-group here if necessary */}
                            </ul>
                        </div>
                        <div className="col-10">
                           
                                <ul className="d-flex mt-1 gap-2">
                                    {["Marketing" ,  "Sales" ,  "Masters" , "E-Commerce" , "Leasing"].map((item, i) => (
                                        <li
                                            key={i} style={{fontSize:"2rem"}}
                                            className={sll === i ? "text-success" : "text-black"}
                                            onClick={() => TabMarket(i)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className={sll === 0 ? "d-block" : "d-none"}
                                >
                                    <Marketing />
                                </div>
                                <div className={sll === 1 ? "d-block" : "d-none"}>
                                    <Sales />
                                </div>
                                <div className={sll === 2 ? "d-block" : "d-none"}>
                                    <Masters />
                                </div>
                                <div className={sll === 3 ? "d-block" : "d-none"}>
                                    <Ecommerce />
                                </div>
                                <div className={sll === 4 ? "d-block" : "d-none"}>
                                    <Leasing />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
    );
}


