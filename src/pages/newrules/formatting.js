import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Formatting () {

    return (
        <div className="table-responsive active-projects style-1">
      <h2 className="tbl-caption text-light"></h2>
    <div>
        
        
    <Table>          
        <thead>
            <tr>
                <th>Field</th>
                <th>Banner</th>
                <th>Tooltip Text		</th>
                <th>Alignment</th>
                <th>Character Casing	</th>
                <th>Font	</th>
                <th>Background Color</th>
              
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
                
               </tr>
            <tr>
                
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
                
                </tr>
            <tr>
                
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
                
                </tr>
            <tr>
                
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
                
                </tr>
            <tr>
                
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

export default Formatting;