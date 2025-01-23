import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Else () {

    return (
        <div className="table-responsive active-projects style-1">
      <h2 className="tbl-caption text-light">Actions</h2>
    <div>
        
        
    <Table>          
        <thead>
            <tr>
                <th>Field</th>
                <th>Display Type</th>
                <th>Change Value To	</th>
                <th>Value</th>
                <th>Caption	</th>
              
            </tr>
        </thead>
       
        
        
        <tbody>
            <tr>
                
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
               
                </tr>
            <tr>
                
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
                
                </tr>
            <tr>
                
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
               
                </tr>
            <tr>
                
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

    );
}

export default Else;