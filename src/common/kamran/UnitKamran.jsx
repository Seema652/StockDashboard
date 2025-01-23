import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function UnitKamran() {
    return (
        <div>
            <div className="mt-3">
                <table className="w-100">
                    <tr className="p-1 bg-light">
                        <th className="p-1">
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                        </th>
                        <th className="p-1">Action</th>
                        <th className="p-1">Opportunity No</th>
                        <th className="p-1">Account No</th>
                        <th className="p-1">Unit</th>
                        <th className="p-1">Floor</th>
                        <th className="p-1">Block</th>
                        <th className="p-1">Property</th>
                        <th className="p-1">Venture</th>
                        <th className="p-1">Description</th>
                        <th className="p-1">Status</th>
                    </tr>
                    <tr className="border p-1">
            <td className="p-1"><input type="checkbox"/></td>
            <td className="p-1">
                <div className="d-flex gap-2">
                    <Link ><i class="fa-solid fa-pen-to-square"></i></Link>
                    <Link ><i class="fa-regular fa-circle-xmark"></i></Link>
                </div>
            </td>
        <td className='p-1'>Dosti</td>
        <td className='p-1'>Abm</td>
        <td className='p-1'>101</td>
        <td className='p-1'></td>
        <td className='p-1'>Block-A</td>
        <td className='p-1'>SkyHouse Phase 1</td>
        <td className='p-1'>SkyHouse</td>
        <td className='p-1'>Abm Industires</td>
        <td className='p-1'>Reserved</td>
            </tr>
                </table>
            </div>
        </div>
    )
}

export default UnitKamran
