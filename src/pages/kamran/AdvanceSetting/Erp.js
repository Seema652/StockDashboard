import React from 'react'
import { Link } from 'react-router-dom'
function Erp() {
  return (
    <div className='card mt-2'>
      <h6 className='border-bottom'>Rental Amount</h6>
      <form>
      <table className='table table-bordered' style={{width:"800px" ,margin:"auto"}}>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>PMS Event</th>
              <th scope='col'>ERP Mapper</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>On creation</td>
              <td>Booked</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>On Termination</td>
              <td>Vacant</td>
              
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>On Legal Case</td>
              <td>Occupied</td>
             
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>On Closed</td>
              <td>REnovation</td>
             
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>On Renewal</td>
              <td>Occupied</td>
             
            </tr>
          </tbody>
        </table>
        <h6 className='border-bottom mx-auto'>Deposite Amount</h6>
        <table className='table table-bordered' style={{width:"800px" ,margin:"auto"}}>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Leasing Contract</th>
              <th scope='col'>Property Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>On creation</td>
              <td>Booked</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>On Termination</td>
              <td>Vacant</td>
              
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>On Legal Case</td>
              <td>Occupied</td>
             
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>On Closed</td>
              <td>REnovation</td>
             
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>On Renewal</td>
              <td>Occupied</td>
             
            </tr>
          </tbody>
        </table>
      
        <div className='mt-2'>
   <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
    <button className="btn btn-primary me-1" type="submit">Save</button></div>
      </form>
    </div>
  )
}

export default Erp
