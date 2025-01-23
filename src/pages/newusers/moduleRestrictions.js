import React from 'react'
import CustomInputField from '../../common/CustomInputField';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ModuleRestrictions() {
  return (
    <div className="card">
    <div className="table-responsive active-projects style-1">
      <h2 className="tbl-caption text-light">Module Restrictions</h2>
    <div>
        <div className='d-flex ml-5'>
        <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/>
        <label>  Override user role restrictions</label>
        </div> 
        
    <Table>          
        <thead>
            <tr>
                <th>Modules</th>
                <th>Restrictions1</th>
                <th>Restrictions2</th>
                <th>Restrictions3</th>
                <th>Restrictions4</th>
                <th>Restrictions5</th>
                <th>Restrictions6</th>
                <th>Restrictions7</th>
                <th>Restrictions8</th>
                <th>Restrictions9</th>
                <th>Restrictions10</th>
                <th>Exclude</th>
            </tr>
        </thead>
       
        
        
        <tbody>
            <tr>
                <td>    Account	</td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               <td> <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/> </td>
            </tr>
            <tr>
                <td>Product</td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               <td> <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/> </td>
            </tr>
            <tr>
                <td>Department</td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               <td> <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/> </td>
            </tr>
            <tr>
                <td>    Warehouse	</td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               <td> <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/> </td>
            </tr>
            <tr>
                <td>    Contacts	</td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               <td> <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/> </td>
            </tr>
            <tr>
                <td>Campaigns</td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               <td> <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/> </td>
            </tr>
            <tr>
                <td>Region</td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               <td> <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/> </td>
            </tr>
            <tr>
                <td>Location</td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
                <td> <CustomInputField /> </td>
               <td> <input type="checkbox"class="form-check-input mr-2"id="exampleCheck1"/> </td>
            </tr>
        </tbody>
        
    </Table>
    
    

    <div className="d-flex justify-content-center mt-3">
        <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
                                            <button
                                                className="btn btn-primary me-1"
                                                type="submit">
                                                Save
                                            </button>  
                                            </div>
    </div>
    </div>
    </div>
    
    
  )
}

export default ModuleRestrictions;