import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FormRestrect() {
  return (
    <div className="container mt-3">
      <h3 className='text-black'>From Address Restrictions</h3>
      <Table bordered striped hover responsive>
        <thead>
          <tr>
            <th>User Role</th>
            <th>Restrict Lead Owner</th>
            <th>Restrict Other User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administrator</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Marketing Manager</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Service Manager</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Executive</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Service Representative</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Tele-Mkt Executive</td>
            <td>No</td>
            <td>No</td>
          </tr>
        </tbody>
      </Table>
      <div>
                                <Link to='' >
                                <button 
                                    className="btn btn-primary me-1" 
                                    type="submit">
                                    Save
                                </button>
                                </Link>
                            </div>
    </div>
  )
}

export default FormRestrect
