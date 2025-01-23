import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function RollUpField () {

    return (
         <div className="card">
         <div className="table-responsive active-projects style-1">
            <h2 className="tbl-caption text-light" >Roll-Up-Field</h2>
            <div className="row ml-4">
                <div className="col-6">
                <label>Caption</label>
                <CustomInputField/> 
                </div>
                <div className="col-6">
                <label>Name</label>
                <CustomInputField/> 
                </div>
                <div className="col-6">
                <label>Related Module</label>
                <select className="form-select">
                    <option>Tele-Leads</option>
                    <option>Leads</option>
                    <option>Opportunities</option>
                    <option>Account</option>
                    <option>Contact</option>
                    <option>Delivery Note</option>
                    <option>Invoice</option>
                </select>
                </div>
                <div className="col-6">
                <label>Aggregation Type	</label>
                <select className="form-select">
                    <option>Count</option>
                    <option>Sum</option>
                    <option>Average</option>
                    <option>Min</option>
                    <option>Max</option>
                </select>
                </div>
                <div className="col-12">
                <label>Field to Aggregate</label>
                <select className="form-select">
                    <option></option>
                    <option>Annual Revenue</option>
                    <option></option>
                    <option>No. of Employees</option>
                    <option>Trans Id</option>
                </select>
                </div>
                <div className="col-6">
                <label>No. Of Decimals	</label>
                <CustomInputField/> 
                </div>

                <div className="table-responsive active-projects style-1">
      <h2 className="tbl-caption text-light"></h2>
    <div>
        
        
    <Table>          
        <thead>
            <tr>
                <th>S.No	</th>
                <th>Field</th>
                <th>Operator</th>
                <th>Compare 	</th>
                <th>Value</th>
                <th>Link Field	</th>
                <th>Conjunction	</th>
                <th>Action</th>
              
            </tr>
        </thead>
       
        
        
        <tbody>
            <tr>
                
                 <th>   1 </th>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               </tr>
            <tr>
                
            <th>   2 </th>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
            <th>   3 </th>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
            <th>   4 </th>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                </tr>
            <tr>
                
            <th>   5 </th>
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

export default RollUpField;