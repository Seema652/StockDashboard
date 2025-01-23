import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Alerts () {

    return (
        <div className="table-responsive active-projects style-1">
      <h2 className="tbl-caption text-light"></h2>
    <div>
        
        
    <Table>          
        <thead>
            <tr>
                <th>Type</th>
                <th>to	</th>
                <th>SMS	</th>
                <th>Email</th>
                <th>Dash Board</th>
                <th>Pop Up	</th>
                <th>G-Talk	</th>
                <th>Specific Message
                </th>
              
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

    );
}

export default Alerts;