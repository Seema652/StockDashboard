import React from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Menu() {
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h3 className='tbl-caption text-light mt-4'>Menu</h3>
            </div>
                <div className=''style={{justifyContent:"space-around"}}>
                <div className='d-flex'style={{justifyContent:"space-around"}}>
                    <div className=''style={{width:"300px"}}>
                        <table className='table border'>
                            <thead>
                                <tr>
                                    <th className='bg-secondary text-light'>Available Itmes</th>
                                </tr>
                                <tr>
                                    <th className='bg-primary text-light'>Module Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Account</td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                </tr>
                                <tr>
                                    <td>Invoice</td>
                                </tr>
                                <tr>
                                    <td>Delivery Notes</td>
                                </tr>
                                <tr>
                                    <td>Leads</td>
                                </tr>
                                <tr>
                                    <td>Product</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold bg-primary text-light '>Report</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Heading */}


                    {/* Table Form */}
                    <div className=''style={{width:"300px"}}>
                       
                        <table className='table border'>
                            <thead>
                                <tr >
                                    <th className='d-flex gap-1 bg-secondary text-light'> <IoMenu size={20} /> Menu</th>
                                    </tr>
                                    <tr>
                                        <th className='bg-primary text-light'>Home</th>
                                    </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Account</td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                </tr>
                                <tr>
                                    <td>Invoice</td>
                                </tr>
                                <tr>
                                    <td>Delivery Notes</td>
                                </tr>
                                <tr>
                                    <td>Leads</td>
                                </tr>
                                <tr>
                                    <td>Product</td>
                                </tr>
                                <tr>
                                    <td className='bg-primary text-primary'>Home </td>
                                </tr>
                            </tbody>
         
                        </table>
                    </div>
                </div>
                <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Pervious</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Next
          </button>
        </div>
       
            </div>
        </div>


    )
}

export default Menu
