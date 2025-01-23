import React from "react";

export default function DetailTbalble(){
    return(
        <div className="px-5 py-2">
            <table className="w-100">
                    <tr  className="fs-6">
                        <th className="my-3 fs-6">Name</th>
                        <td className="my-3 fs-6">Dosti Group Phase 1</td>
                        <th className="my-3 fs-6"></th>
                        <td className="my-3 fs-6"></td>
                    </tr>
                    <tr  className="py-4 fs-6">
                        <th className="my-3 fs-6">Code</th>
                        <td className="my-3 fs-6">Dost123</td>
                        <th className="my-3 fs-6">Venture</th>
                        <td className="my-3 fs-6">Dosti Group</td>
                    </tr>
                    <tr  className="py-4 fs-6">
                        <th className="my-3 fs-6">Construction Status</th>
                        <td className="my-3 fs-6">-</td>
                        <th className="my-3 fs-6">Construction Start Date</th>
                        <td className="my-3 fs-6">-</td>
                    </tr>
            </table>
            <div className="border mt-4 p-2 ">
                <ul className="d-flex justify-content-center gap-1">
                    <li>
                        <button className="btn m-0 p-1 btn-primary">Edit</button>
                    </li>
                    <li>
                    <button className="btn p-1 m-0 btn-outline-primary">Clone</button>
                    </li>
                    <li>
                    <button className="btn p-1 m-0 btn-outline-primary">Cancle</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}