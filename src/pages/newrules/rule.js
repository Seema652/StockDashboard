import React, { useState } from "react";
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";
import { Alert, Table } from "react-bootstrap";
import Else from "./else";
import Alerts from "./alerts";
import Formatting from "./formatting";

function Rule() {

  

    const [rule, setRule] = useState(0);

    const TabMarket = (num) => {
        setRule(num);
    };

  return (
    <div className="card">
      <div className="table-responsive active-projects style-1">
        <h2 className="tbl-caption text-light">Rule</h2>
        <div className="row ml-4">
          <div className="col-12">
            <label>Name</label>
            <CustomInputField />
            &nbsp;
            <div className="row">
              {/* First Column */}
              <div className="col-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="creatingGroups" />
                  <label className="form-check-label" htmlFor="creatingGroups">Creating Groups</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="beforeSave" />
                  <label className="form-check-label" htmlFor="beforeSave">Before Save</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="beforeDelete" />
                  <label className="form-check-label" htmlFor="beforeDelete">Before Delete</label>
                </div>
              </div>
              {/* Second Column */}
              <div className="col-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="load" />
                  <label className="form-check-label" htmlFor="load">Load</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="onEnter" />
                  <label className="form-check-label" htmlFor="onEnter">On Enter</label>
                </div>
              </div>
              {/* Third Column */}
              <div className="col-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="newRecord" />
                  <label className="form-check-label" htmlFor="newRecord">New Record</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="onLeave" />
                  <label className="form-check-label" htmlFor="onLeave">On Leave</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="edit" />
                  <label className="form-check-label" htmlFor="edit">Edit</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="edit" />
                  <label className="form-check-label" htmlFor="edit">No Condition</label>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* start if else  */}
        <div className="col-10">
                           
                           <ul className="d-flex mt-1 gap-2 btn hover:bg-success" >
                               {["IF" ,  "ELSE", "ALERTS", "FORMATTING" ].map((item, i) => (
                                   <li
                                       key={i} style={{fontSize:"2rem"}}
                                       className={rule === i ? "text-success" : "text-black"}
                                       onClick={() => TabMarket(i)}
                                   >
                                       {item}
                                   </li>
                               ))}
                           </ul>
                           
                           <div className={rule === 1 ? "d-block" : "d-none" }>
                               < Else />
                           </div>
                           <div className={rule === 2 ? "d-block" : "d-none"}>
                               < Alerts />
                           </div>
                           <div className={rule === 3 ? "d-block" : "d-none"}>
                               < Formatting />
                           </div>
                          
                           

    

    {/* Table start here */}
    <div className="table-responsive active-projects style-1">
      <h2 className="tbl-caption text-light">Conditions</h2>
    <div>
        
        
    <Table>          
        <thead>
            <tr>
                <th>(</th>
                <th>Field</th>
                <th>Operator</th>
                <th>Compare With	</th>
                <th>Value</th>
                <th>Link Field	</th>
                <th>)</th>
                <th>Conjunction</th>
              
            </tr>
        </thead>
       
        
        
        <tbody>
            <tr>
                
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               </tr>
            <tr>
                
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
        </tbody>
        
    </Table>
    
    

    <div className="d-flex justify-content-center mt-3">
        <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
                                            <button
                                                className="btn btn-primary me-1"
                                                type="submit">
                                                Ok
                                            </button>  
                                            </div>
    </div>
    </div>
    </div>
    </div>
    </div>
 
    
  );
}

export default Rule;
